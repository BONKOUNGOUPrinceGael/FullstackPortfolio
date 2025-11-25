import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Cloud } from "lucide-react";
import { 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiVuedotjs,
  SiPostgresql,
  SiGit,
  SiFigma,
  SiPostman,
  SiLinux,
  SiMysql
} from "react-icons/si";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "TypeScript", level: 76, icon: SiTypescript },
        { name: "Vue.js", level: 82, icon: SiVuedotjs },
        { name: "Tailwind CSS", level: 68, icon: SiTailwindcss },
        { name: "React / Next.js", level: 55, icon: SiReact },
      ],
    },
    {
      title: "Backend",
      skills: [        
        { name: "Mysql", level: 69, icon: SiMysql },
        { name: "Node.js", level: 54, icon: SiNodedotjs },
        { name: "PostgreSQL", level: 60, icon: SiPostgresql },
      ],
    },
    {
      title: "Architecture & DevOps",
      skills: [
        { name: "Git / GitHub", level: 80, icon: SiGit },
        { name: "API REST", level: 65, icon: SiPostman},
        { name: "Linux", level: 70, icon: SiLinux },
        { name: "Figma", level: 61, icon: SiFigma },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Compétences Techniques
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Une expertise complète dans les technologies modernes du développement
            web, du frontend au backend, en passant par les outils DevOps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-skill-category-${categoryIndex}`}
            >
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-foreground flex items-center gap-2">
                  <div className="h-1 w-8 bg-primary rounded-full" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="space-y-2"
                    data-testid={`skill-${categoryIndex}-${skillIndex}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <skill.icon className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="p-6 md:p-8 bg-card/50 backdrop-blur">
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
                <div className="h-1 w-6 bg-primary rounded-full" />
                Code Sample
              </h3>
              <div className="bg-muted/50 rounded-md p-4 font-mono text-xs md:text-sm overflow-x-auto">
                <pre className="text-foreground/90">
{`const fetchData = async () => {
  const res = await fetch('/api/data');
  return res.json();
};

useEffect(() => {
  fetchData().then(setData);
}, []);`}
                </pre>
              </div>
            </div>
          </Card>

          <Card className="p-6 md:p-8 bg-card/50 backdrop-blur">
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
                <div className="h-1 w-6 bg-primary rounded-full" />
                Terminal
              </h3>
              <div className="bg-muted/50 rounded-md p-4 font-mono text-xs md:text-sm overflow-x-auto">
                <pre className="text-muted-foreground">
                  <span className="text-primary">$</span> npm run build
                  <br />
                  <span className="text-muted-foreground/70">Building for production...</span>
                  <br />
                  <span className="text-green-500">✓ Build complete!</span>
                </pre>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 bg-card/50 backdrop-blur">
            <div className="text-center space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Autres compétences
              </h3>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {[
                  "Gestion de Projets",
                  "REST APIs",
                  "Tests Unitaires",
                  "Agile/Scrum",
                  "Responsive Design",
                  "SEO",
                  "Accessibilité",
                  "Sécurité Web",
                  "Microservices",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs md:text-sm bg-secondary text-secondary-foreground rounded-full font-medium"
                    data-testid={`badge-other-skill-${index}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
