import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { useLocation } from "wouter";
import { ParticleSystem } from "@/components/particle-system";

export default function CVPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen py-8 md:py-12 relative">
      {/* Particle System Background */}
      <ParticleSystem />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10" id="cv-content">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="mb-6"
            data-testid="button-back-to-home"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au portfolio
          </Button>
        </div>

        {/* CV Header */}
        <div className="mb-8 text-center pb-8 border-b">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            BONKOUNGOU Prince Gaël
          </h1>
          <p className="text-xl text-primary font-semibold mb-6">
            Développeur Web Full-Stack
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>(+226) 62 86 68 24 / 56 87 44 61</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>princegaelb@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Secteur 47, Ouagadougou</span>
            </div>
          </div>

        </div>

        {/* Objectif Professionnel */}
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Objectif Professionnel</h2>
          <p className="text-muted-foreground leading-relaxed">
            Développeur web full-stack avec 3 ans d'expérience, je maîtrise JavaScript et PHP (Laravel). 
            Je conçois des applications web modernes et performantes, en mettant l'accent sur l'optimisation 
            et l'expérience utilisateur.
          </p>
        </Card>

        {/* Formations */}
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Formations</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-foreground">Licence 3 en Génie Informatique</h3>
                  <p className="text-sm text-muted-foreground">Université Aube Nouvelle, Ouagadougou</p>
                </div>
                <span className="text-sm font-semibold text-primary">2021-2022</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Administration des systèmes</li>
                <li>Sécurité réseau</li>
                <li>Gestion de projets informatiques</li>
                <li>Développement d'un intranet basé sur SharePoint</li>
                <li>Configuration d'une infrastructure Active Directory simulée</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Expériences Professionnelles */}
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Expériences Professionnelles</h2>
          <div className="space-y-6">
            {/* Experience 1 */}
            <div className="border-l-4 border-primary pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-foreground">Développeur Full-Stack (Stage)</h3>
                  <p className="text-sm text-muted-foreground">TheBid Sarl, Ouagadougou</p>
                </div>
                <span className="text-sm font-semibold text-primary">01 Août 2025 - Présent</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Analyse des besoins</li>
                <li>Conception & architecture</li>
                <li>Développement</li>
                <li>Déploiement et maintenance</li>
                <li>Optimisation et qualité</li>
                <li>Veille technologique et collaboration</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="border-l-4 border-primary pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-foreground">Développeur Web</h3>
                  <p className="text-sm text-muted-foreground">UPPERFLEX, Ouagadougou</p>
                </div>
                <span className="text-sm font-semibold text-primary">01 Août 2024 - 31 Janvier 2025</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Analyse des besoins et conception</li>
                <li>Administration du panneau de configuration</li>
                <li>Développement et programmation</li>
                <li>Tests et débogage</li>
                <li>Maintenance et amélioration continue</li>
                <li>Assurer la sécurité et la protection des données</li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div className="border-l-4 border-primary pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-foreground">Développeur Web (Stage)</h3>
                  <p className="text-sm text-muted-foreground">UPPERFLEX, Ouagadougou</p>
                </div>
                <span className="text-sm font-semibold text-primary">20 Mai 2024 - 19 Juillet 2024</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Analyse des besoins et conception</li>
                <li>Administration du panneau de configuration</li>
                <li>Développement et programmation</li>
                <li>Tests et débogage</li>
              </ul>
            </div>

            {/* Experience 4 */}
            <div className="border-l-4 border-primary pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-foreground">Développeur Logiciel</h3>
                  <p className="text-sm text-muted-foreground">RIGO Sarl, Ouagadougou</p>
                </div>
                <span className="text-sm font-semibold text-primary">2022 - 2024</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Développement et maintenance d'applications</li>
                <li>Collaboration au sein d'équipes multidisciplinaires</li>
                <li>Conception et implémentation de solutions logicielles</li>
                <li>Participation à la planification et coordination des projets</li>
                <li>Optimisation des performances et amélioration UX</li>
                <li>Intégration d'API et gestion de bases de données (MongoDB, MySQL)</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Compétences */}
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Compétences</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-foreground">Programmation</h3>
                <span className="text-sm text-muted-foreground">70%</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Java, C, JavaScript, HTML/CSS, PHP, Node.js, Laravel, Flutter, Vue.js, Tailwind...
              </p>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-foreground">Bases de Données</h3>
                <span className="text-sm text-muted-foreground">65%</span>
              </div>
              <p className="text-sm text-muted-foreground">
                MySQL, Oracle 11g
              </p>
            </div>
          </div>
        </Card>

        {/* Soft Skills */}
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Soft Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Capacité d\'adaptation', 'Esprit d\'initiative', 'Esprit d\'équipe', 'Communication'].map((skill) => (
              <div key={skill} className="p-3 bg-secondary rounded-md text-center text-sm font-medium text-foreground">
                {skill}
              </div>
            ))}
          </ul>
        </Card>

        {/* Langues */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Langues</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="font-semibold text-foreground">Français</span>
              <span className="text-muted-foreground">Langue maternelle</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold text-foreground">Anglais</span>
              <span className="text-muted-foreground">Niveau intermédiaire</span>
            </li>
          </ul>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground border-t pt-8">
          <p>Je certifie sur l'honneur que les informations fournies sont sincères et exactes.</p>
          <p className="mt-2">Ouagadougou, le 21 novembre 2025</p>
        </div>
      </div>
    </div>
  );
}
