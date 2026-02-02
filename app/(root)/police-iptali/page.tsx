import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PoliceIptaliPage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">Poliçe İptali</h1>
        <p className="text-muted-foreground max-w-3xl">
          Poliçenizi iptal etmek istiyorsanız WhatsApp veya iletişim formu
          üzerinden bize ulaşın. Süreç ve kalan iade tutarı hakkında
          bilgilendiririz.
        </p>
      </header>

      <section className="space-y-4 max-w-3xl">
        <h2 className="h2-bold">İptal Süreci</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>İptal talebinizi WhatsApp veya iletişim formu ile iletin.</li>
          <li>Poliçe numarası, kimlik bilgileri ve iptal gerekçesini paylaşın.</li>
          <li>Sigorta şirketi nezdinde iptal işlemi başlatılır.</li>
          <li>Varsa kalan primi iade süreci ve tutarı size bildirilir.</li>
        </ul>
      </section>

      <div className="pt-4">
        <Button asChild>
          <Link href="/iletisim">İptal Talebi İçin İletişime Geçin</Link>
        </Button>
      </div>
    </div>
  );
}
