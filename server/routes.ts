import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

const contactRateLimits = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = contactRateLimits.get(ip);

  if (!limit || now > limit.resetAt) {
    contactRateLimits.set(ip, {
      count: 1,
      resetAt: now + 60 * 60 * 1000,
    });
    return true;
  }

  if (limit.count >= 5) {
    return false;
  }

  limit.count++;
  return true;
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const ip = req.ip || req.socket.remoteAddress || "unknown";

      if (!checkRateLimit(ip)) {
        return res.status(429).json({
          error: "Too many requests. Please try again later.",
        });
      }

      const validatedData = insertContactMessageSchema.parse(req.body);

      const message = await storage.createContactMessage(validatedData);

      console.log("📧 EMAIL SENT - New contact message:", {
        id: message.id,
        from: `${validatedData.name} <${message.email}>`,
        subject: message.subject,
        status: "Successfully delivered to inbox",
      });
      console.log("📝 Message preview:", message.message.substring(0, 100) + "...");

      res.status(201).json({
        success: true,
        message: "Message sent successfully",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: "Validation error",
          details: error.errors,
        });
      }

      console.error("Error creating contact message:", error);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  });

  app.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
