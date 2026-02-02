import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HesaplamalarPage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">Vergi ve Basamak Hesaplama</h1>
        <p className="text-muted-foreground max-w-3xl">
          Motorlu araç vergisi, trafik sigortası basamak bilgisi ve benzeri
          hesaplamalar için resmi kaynaklara ve güncel tarifelere başvurulur.
          Size özel vergi ve prim bilgisi için bize ulaşın.
        </p>
      </header>

      <section className="space-y-4 max-w-3xl">
        <h2 className="h2-bold">Ne Sunuyoruz?</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Motorlu araç vergisi ve yıllık ödeme tutarları hakkında bilgi.</li>
          <li>Trafik sigortası basamak (bonus-malus) açıklaması.</li>
          <li>Kasko ve diğer ürünlerde prim hesabı için teklif talebi.</li>
        </ul>
        <p className="text-muted-foreground">
          Araç plakası veya kimlik bilgilerinizle WhatsApp veya iletişim formu
          üzerinden yazarsanız, güncel bilgileri paylaşıp teklif hazırlayabiliriz.
        </p>
      </section>

      <div className="pt-4">
        <Button asChild>
          <Link href="/iletisim">Hesaplama / Teklif İçin İletişime Geçin</Link>
        </Button>
      </div>
    </div>
  );
}
