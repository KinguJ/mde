import Link from 'next/link';
import { APP_NAME, PHONE, WHATSAPP_URL } from '@/lib/constants';
import { Instagram, Facebook, Twitter, ShieldCheck } from 'lucide-react';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaXTwitter 
} from "react-icons/fa6";
import { footerSections } from '@/lib/data/footer-links';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="wrapper py-10">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4">
            <div className="text-xl font-bold">{APP_NAME}</div>
            <p className="text-sm text-muted-foreground">
              Size uygun sigortayı karşılaştırın, hızlıca teklif alın, güvenle satın alın.
            </p>
            <div className="text-sm">
              <div className="font-medium">İletişim Hattı</div>
              <Link href={`tel:${PHONE}`} className="hover:underline">
                {PHONE}
              </Link>
            </div>
            <div className="pt-2">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                WhatsApp ile Yaz
              </Link>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground transition hover:text-foreground"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>

              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground transition hover:text-foreground"
              >
                <FaFacebookF className="h-5 w-5" />
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-muted-foreground transition hover:text-foreground"
              >
                <FaXTwitter className="h-5 w-5" />
              </Link>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
              <ShieldCheck className="size-4" /> SSL Güvenli Ödeme
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <div className="font-semibold mb-3">{section.title}</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="font-semibold mb-3">Sigorta Şirketleri</div>
            <ul className="columns-2 space-y-2 text-sm text-muted-foreground">
              <li><span>Allianz</span></li>
              <li><span>Anadolu</span></li>
              <li><span>AXA</span></li>
              <li><span>HDI</span></li>
              <li><span>Mapfre</span></li>
              <li><span>Sompo</span></li>
              <li><span>Zurich</span></li>
              <li><span>Güneş</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="wrapper py-4 text-center text-sm text-muted-foreground">
          © {currentYear} {APP_NAME}. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
