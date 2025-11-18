import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Users, Zap } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Code de qualité",
      description: "Architecture robuste et maintenable suivant les meilleures pratiques",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Applications optimisées pour une expérience utilisateur fluide",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Veille technologique constante et adoption de solutions modernes",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Communication efficace et travail d'équipe agile",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            À propos de moi
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Passionné par le développement web depuis plusieurs années, je combine
            créativité et expertise technique pour transformer des idées en
            solutions digitales performantes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <Card className="p-6 md:p-8">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">
                Spécialisé dans l'écosystème JavaScript/TypeScript, je maîtrise l'ensemble
                de la chaîne de développement web, du design d'interfaces utilisateur
                réactives avec <strong>React</strong> et <strong>Vue.js</strong>, jusqu'à
                la conception d'APIs robustes avec <strong>Node.js</strong> et <strong>Express</strong>.
              </p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                Mon approche allie rigueur technique et souci du détail pour créer des
                applications web modernes, accessibles et performantes. Je m'investis dans
                chaque projet avec l'objectif de dépasser les attentes et de livrer des
                solutions qui font la différence.
              </p>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-1"
              data-testid={`card-highlight-${index}`}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
