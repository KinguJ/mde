import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function IslemRehberiPage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">İşlem Rehberi</h1>
        <p className="text-muted-foreground max-w-3xl">
          Teklif alma, poliçe sorgulama, hasar bildirimi ve ilgili işlemlerde
          adım adım rehber.
        </p>
      </header>

      <section className="space-y-6 max-w-3xl">
        <div>
          <h2 className="h3-bold mb-2">Teklif Almak</h2>
          <p className="text-muted-foreground mb-2">
            WhatsApp veya iletişim formu üzerinden ulaşın. Ürün türüne göre
            araç, konut veya kişisel bilgilerinizi paylaşın; size özel
            teklifler hazırlansın.
          </p>
        </div>
        <div>
          <h2 className="h3-bold mb-2">Poliçe Sorgulama</h2>
          <p className="text-muted-foreground mb-2">
            Poliçe numaranız ve kimlik bilgilerinizle bize yazın. Mevcut
            poliçe bilgilerinizi ve yenileme tarihlerinizi paylaşırız.
          </p>
        </div>
        <div>
          <h2 className="h3-bold mb-2">Hasar Bildirimi</h2>
          <p className="text-muted-foreground mb-2">
            Kaza tespit tutanağı, fotoğraflar ve poliçe bilgilerinizle
            bize ulaşın. Gerekli evraklar ve anlaşmalı servis süreçleri
            konusunda yönlendiririz.
          </p>
        </div>
        <div>
          <h2 className="h3-bold mb-2">Poliçe İptali</h2>
          <p className="text-muted-foreground">
            İptal talebinizi iletişim kanallarımız üzerinden iletin. Kalan
            iade tutarı ve süreç hakkında bilgilendirilirsiniz.
          </p>
        </div>
      </section>

      <div className="pt-4 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/iletisim">İletişime Geçin</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/police-ve-hasar-islemleri">Poliçe ve Hasar İşlemleri</Link>
        </Button>
      </div>
    </div>
  );
}
