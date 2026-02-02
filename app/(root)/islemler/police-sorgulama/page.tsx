import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PoliceSorgulamaPage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">Poliçe Sorgulama</h1>
        <p className="text-muted-foreground max-w-3xl">
          Mevcut poliçenizi sorgulamak veya bilgilerinizi güncellemek için
          WhatsApp veya iletişim formu üzerinden bize ulaşın.
        </p>
      </header>

      <section className="space-y-4 max-w-3xl">
        <p className="text-muted-foreground">
          Poliçe numaranız ve kimlik bilgilerinizle size yardımcı oluruz.
          Yenileme tarihleri, teminatlar ve ödeme bilgileri hakkında
          bilgilendirme yapılır.
        </p>
      </section>

      <div className="pt-4 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/iletisim">Poliçe Sorgulama Talebi</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/police-ve-hasar-islemleri">Poliçe ve Hasar İşlemleri</Link>
        </Button>
      </div>
    </div>
  );
}
