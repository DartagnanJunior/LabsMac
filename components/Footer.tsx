import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

/**
 * Render the site footer with lab branding, quick navigation links, and contact information.
 *
 * Displays LabSMaC name and description, location, quick links (Sobre Nós, Serviços, Equipe, Artigos),
 * contact entries (email and phone), and footer utility links. The copyright year is rendered dynamically.
 *
 * @returns A JSX footer element containing LabSMaC branding, quick navigation links, contact info, and copyright/utility links.
 */
export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-foreground text-lg font-bold mb-2">LabSMaC</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              Laboratório de Síntese de Materiais Cerâmicos e Caracterização de Materiais - UFCG
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />
              <span>Campina Grande, PB - Brasil</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-2 text-sm">Links Rápidos</h4>
            <ul className="space-y-1.5">
              <li>
                <Link href="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Equipe
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Artigos
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-2 text-sm">Contato</h4>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-muted-foreground" />
                <a href="mailto:contato@labsmac.ufcg.edu.br" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  contato@labsmac.ufcg.edu.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">(83) XXXX-XXXX</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} LabSMaC - UFCG. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-3 text-xs">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidade
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
