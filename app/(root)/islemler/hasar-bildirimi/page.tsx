import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HasarBildirimiPage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">Hasar Bildirimi</h1>
        <p className="text-muted-foreground max-w-3xl">
          Kaza veya hasar durumunda en kısa sürede WhatsApp veya iletişim formu
          ile bize bildirimde bulunun. Gerekli evraklar ve süreç hakkında
          sizi yönlendiririz.
        </p>
      </header>

      <section className="space-y-4 max-w-3xl">
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Kaza tespit tutanağı ve varsa fotoğrafları paylaşın.</li>
          <li>Poliçe ve kimlik bilgilerinizi iletin.</li>
          <li>Anlaşmalı servis veya ekspertiz süreçleri için destek alın.</li>
        </ul>
      </section>

      <div className="pt-4 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/iletisim">Hasar Bildirimi Yap</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/police-ve-hasar-islemleri">Poliçe ve Hasar İşlemleri</Link>
        </Button>
      </div>
    </div>
  );
}
