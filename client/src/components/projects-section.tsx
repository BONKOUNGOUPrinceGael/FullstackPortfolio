import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import foodDeliveryImg from "@assets/generated_images/Food_delivery_app_project_eef7c447.png";
import apiRestImg from "@assets/generated_images/api_rest_mobile_backend_project.png";
import codeCraftImg from "@assets/generated_images/codecraft_studio_freelancer_portfolio.png";
import discoverBurkinaImg from "@assets/generated_images/discover_burkina_tourism_site.png";
import digitalLabImg from "@assets/generated_images/digital_lab_academy_school_website.png";
import hrSystemImg from "@assets/generated_images/hr_management_system_application.png";

export function ProjectsSection() {
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);
  const featuredProject = {
    title: "Système de Gestion RH",
    description: "Application de gestion des ressources humaines avec suivi des employés, congés et évaluations. Solution complète pour la gestion administrative du personnel avec reporting avancé et tableaux de bord d'analyse.",
    image: hrSystemImg,
    tags: ["React", "TypeScript", "Tailwind CSS", "PDF", "Email"],
    demoUrl: "https://ad5jxven5g.skywork.website/",
  };

  const projects = [
    {
      title: "CodeCraft Studio",
      description: "Site vitrine professionnel pour développeur freelance avec portfolio, services et contact.",
      image: codeCraftImg,
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      badge: "Portfolio",
      status: "Terminée",
      demoUrl: "https://7axcn9yebb.skywork.website/",
    },
    {
      title: "Discover Burkina",
      description: "Site de tourisme local présentant les lieux touristiques du Burkina Faso avec galeries d'images.",
      image: discoverBurkinaImg,
      tags: ["React", "TypeScript", "Tailwind CSS", "Image Gallery"],
      badge: "Tourism",
      status: "Terminée",
      demoUrl: "https://ebzmcpq8er.skywork.website/",
    },
    {
      title: "Digital Lab Academy",
      description: "Site web pour établissement scolaire avec gestion des cours, étudiants et ressources pédagogiques.",
      image: digitalLabImg,
      tags: ["React", "TypeScript", "Tailwind CSS", "CMS"],
      badge: "Education",
      status: "Terminée",
      demoUrl: "https://r4gaz56tts.skywork.website/",
    },
    {
      title: "Application Livraison",
      description: "App mobile-first pour commander des repas avec suivi en temps réel.",
      image: foodDeliveryImg,
      tags: ["React Native", "Firebase", "Google Maps", "Stripe"],
      badge: "Mobile-First",
      status: "En cours",
      demoUrl: "#",
    },
    {
      title: "API REST pour Mobile",
      description: "Développement d'une API REST robuste pour application mobile avec authentification JWT et documentation complète.",
      image: apiRestImg,
      tags: ["Node.js", "Express", "JWT", "PostgreSQL", "Swagger"],
      badge: "Backend",
      status: "En cours",
      demoUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Mes Projets
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Une sélection de mes réalisations récentes, allant des applications
            web aux solutions e-commerce et dashboards analytiques.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300" data-testid="card-featured-project">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto overflow-hidden bg-muted">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  data-testid="img-featured-project"
                />
              </div>
              <CardContent className="p-8 md:p-10 flex flex-col justify-center">
                <Badge className="w-fit mb-4" data-testid="badge-featured">
                  Projet Phare
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {featuredProject.title}
                </h3>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-featured-tag-${tagIndex}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild data-testid="button-featured-demo">
                    <a href={featuredProject.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto mb-8 md:mb-12">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedTechnology === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTechnology(null)}
              data-testid="button-filter-all"
            >
              Tous
            </Button>
            {Array.from(new Set(projects.flatMap(p => p.tags))).map((tech) => (
              <Button
                key={tech}
                variant={selectedTechnology === tech ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTechnology(tech)}
                data-testid={`button-filter-${tech}`}
              >
                {tech}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-12 max-w-6xl mx-auto">
          {projects.filter(project => 
            selectedTechnology === null || project.tags.includes(selectedTechnology)
          ).map((project, index) => {
            const isImageLeft = index % 2 === 0;
            return (
              <Card
                key={index}
                className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-1"
                data-testid={`card-project-${index}`}
              >
                <div className={`grid md:grid-cols-2 gap-0 ${isImageLeft ? '' : 'md:grid-flow-dense'}`}>
                  <div className={`aspect-video md:aspect-auto overflow-hidden bg-muted ${isImageLeft ? '' : 'md:col-start-2'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      data-testid={`img-project-${index}`}
                    />
                  </div>
                  <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.badge && (
                        <Badge className="w-fit" variant="secondary" data-testid={`badge-project-${index}`}>
                          {project.badge}
                        </Badge>
                      )}
                      {project.status && (
                        <Badge 
                          className="w-fit" 
                          variant={project.status === "Terminée" ? "default" : "secondary"}
                          data-testid={`badge-status-${index}`}
                        >
                          {project.status}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs"
                          data-testid={`badge-tag-${index}-${tagIndex}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        asChild
                        data-testid={`button-demo-${index}`}
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
