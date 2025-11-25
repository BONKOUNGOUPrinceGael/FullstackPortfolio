import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_developer_workspace_hero_dc7de376.png";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "wouter";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [, navigate] = useLocation();
  const rafRef = useRef<number>();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20"
    >
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-up">
            <div className="space-y-4">
              <p className="text-sm md:text-base font-medium text-muted-foreground tracking-wide uppercase">
                Développeur Web Full-Stack
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Créateur d'expériences
                <span className="block text-primary mt-2">web modernes</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Je conçois et développe des applications web performantes et élégantes,
                de l'interface utilisateur jusqu'à l'architecture serveur.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group"
                data-testid="button-view-projects"
              >
                Voir mes projets
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/cv")}
                data-testid="button-download-cv"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Voir mon CV
              </Button>
            </div>
          </div>

          <div 
            className="relative animate-fade-in" 
            style={{ 
              animationDelay: "200ms",
              transform: `translateY(${scrollY * 0.2}px)`,
              transition: "transform 0.1s ease-out"
            }}
          >
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Espace de travail développeur"
                className="w-full h-full object-cover"
                data-testid="img-hero"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-scroll-down"
          aria-label="Scroll down"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
