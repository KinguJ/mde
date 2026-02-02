import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { EMAIL, PHONE, ADDRESS, WHATSAPP_URL } from '@/lib/constants';
import { TeklifFormu } from '@/components/forms/TeklifFormu';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="h1-bold">Teklif ve İletişim</h1>
          <p className="mt-2 text-muted-foreground">
            Teklif almak, hasar bildirimi veya sorularınız için formu doldurun
            veya doğrudan iletişime geçin.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] lg:gap-12">
          <div className="space-y-6">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h2 className="h3-bold mb-4">Bize Ulaşın</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="size-5 shrink-0 text-primary" />
                  <a href={`tel:${PHONE}`} className="hover:text-primary hover:underline">
                    {PHONE}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="size-5 shrink-0 text-primary" />
                  <a href={`mailto:${EMAIL}`} className="hover:text-primary hover:underline">
                    {EMAIL}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="size-5 shrink-0 text-primary" />
                  <span>{ADDRESS}</span>
                </div>
              </div>
{/*          <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="cursor-pointer">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MessageCircle className="size-5" />
                    WhatsApp ile Yaz
                  </a>
                </Button>
                <Button asChild variant="outline" className="cursor-pointer">
                  <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2">
                    <Phone className="size-5" />
                    Hemen Ara
                  </a>
                </Button>
              </div>*/}
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h2 className="h3-bold mb-5">İletişim</h2>
            <TeklifFormu
              productSlug="genel"
              productTitle="Genel Başvuru"
              defaultMode="bireysel"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
