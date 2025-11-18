import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ecommerceImg from "@assets/generated_images/E-commerce_platform_project_a4df9093.png";
import taskMgmtImg from "@assets/generated_images/Task_management_app_project_28456175.png";
import analyticsImg from "@assets/generated_images/Analytics_dashboard_project_e271a1c1.png";
import realEstateImg from "@assets/generated_images/Real_estate_platform_project_f96373bb.png";
import foodDeliveryImg from "@assets/generated_images/Food_delivery_app_project_eef7c447.png";
import fitnessImg from "@assets/generated_images/Fitness_tracker_project_e7e8fcfb.png";

export function ProjectsSection() {
  const featuredProject = {
    title: "Plateforme E-commerce",
    description: "Boutique en ligne complète avec gestion des produits, panier d'achat et paiement sécurisé. Interface moderne et optimisée pour les conversions avec tableau de bord d'administration avancé, gestion des stocks en temps réel et intégration de multiples passerelles de paiement.",
    image: ecommerceImg,
    tags: ["React", "Node.js", "Stripe", "MongoDB", "Redis", "AWS"],
    demoUrl: "#",
    githubUrl: "#",
  };

  const projects = [
    {
      title: "Gestionnaire de Tâches",
      description: "Application de gestion de projets avec tableau Kanban, collaboration en temps réel et notifications.",
      image: taskMgmtImg,
      tags: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Dashboard Analytics",
      description: "Tableau de bord analytique pour visualiser les métriques clés avec graphiques interactifs.",
      image: analyticsImg,
      tags: ["React", "TypeScript", "Chart.js", "REST API"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portail Immobilier",
      description: "Plateforme de recherche immobilière avec filtres avancés et carte interactive.",
      image: realEstateImg,
      tags: ["Next.js", "Tailwind", "Mapbox", "Prisma"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Application Livraison",
      description: "App mobile-first pour commander des repas avec suivi en temps réel.",
      image: foodDeliveryImg,
      tags: ["React Native", "Firebase", "Google Maps", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Tracker Fitness",
      description: "Application de suivi d'entraînement avec calendrier et graphiques de progression.",
      image: fitnessImg,
      tags: ["React", "Node.js", "Chart.js", "MySQL"],
      demoUrl: "#",
      githubUrl: "#",
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
                  <Button variant="outline" asChild data-testid="button-featured-github">
                    <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => {
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
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        data-testid={`button-github-${index}`}
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
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
