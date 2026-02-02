import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AracDegerListesiPage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">Araç Değer Listesi</h1>
        <p className="text-muted-foreground max-w-3xl">
          Kasko tekliflerinde kullanılan araç piyasa değerleri, sigorta
          şirketleri ve Türk Sigorta Birliği tarafından güncellenir. Aracınızın
          değerini öğrenmek için bize ulaşın.
        </p>
      </header>

      <section className="space-y-4 max-w-3xl">
        <h2 className="h2-bold">Bilgi</h2>
        <p className="text-muted-foreground">
          Marka, model, yıl ve donanım bilgilerinizle güncel değer listesine
          göre kasko primi hesaplanır. WhatsApp veya iletişim formu üzerinden
          aracınızı bildirirseniz, size uygun teklifleri hazırlayalım.
        </p>
      </section>

      <div className="pt-4">
        <Button asChild>
          <Link href="/iletisim">Kasko Teklifi İçin İletişime Geçin</Link>
        </Button>
      </div>
    </div>
  );
}
