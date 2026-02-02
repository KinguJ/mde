import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PoliceVeHasarPage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">Poliçe ve Hasar İşlemleri</h1>
        <p className="text-muted-foreground max-w-3xl">
          Poliçe sorgulama, hasar bildirimi ve işlem rehberi. Tüm süreçlerde
          yanınızdayız. Acil durumlarda WhatsApp veya iletişim formu ile
          bize ulaşın.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl">
        <div className="rounded-lg border p-6 space-y-2">
          <h2 className="h3-bold">Poliçe Sorgulama</h2>
          <p className="text-muted-foreground text-sm">
            Mevcut poliçenizi sorgulamak veya bilgilerinizi güncellemek için
            bize ulaşın. Poliçe numaranız ve kimlik bilgilerinizle size yardımcı
            oluruz.
          </p>
          <Button asChild variant="outline" size="sm" className="cursor-pointer">
            <Link href="/iletisim">Poliçe sorgulama talebi</Link>
          </Button>
        </div>
        <div className="rounded-lg border p-6 space-y-2">
          <h2 className="h3-bold">Hasar Bildirimi</h2>
          <p className="text-muted-foreground text-sm">
            Kaza veya hasar durumunda en kısa sürede bildirimde bulunun. Gerekli
            evraklar ve süreç hakkında sizi yönlendiririz.
          </p>
          <Button asChild variant="outline" size="sm" className="cursor-pointer">
            <Link href="/iletisim">Hasar bildirimi</Link>
          </Button>
        </div>
        <div className="rounded-lg border p-6 space-y-2">
          <h2 className="h3-bold">İşlem Rehberi</h2>
          <p className="text-muted-foreground text-sm">
            Kaza tespit tutanağı, anlaşmalı servisler ve hasar süreçleri hakkında
            adım adım bilgi alın.
          </p>
          <Button asChild variant="outline" size="sm" className="cursor-pointer">
            <Link href="/islem-rehberi">İşlem rehberi</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-4 max-w-3xl">
        <h2 className="h2-bold">Genel Süreç</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Hasar veya poliçe talebinizi WhatsApp veya iletişim formu ile iletin.</li>
          <li>Gerekli evraklar (tespit tutanağı, fotoğraf, kimlik vb.) konusunda bilgilendirilirsiniz.</li>
          <li>Başvurunuz sigorta şirketi nezdinde takip edilir.</li>
          <li>Sonuç ve ödeme süreçleri hakkında sürekli bilgi verilir.</li>
        </ul>
      </section>

      <div className="pt-4">
        <Button asChild>
          <Link href="/iletisim">WhatsApp veya İletişim Formu ile Ulaşın</Link>
        </Button>
      </div>
    </div>
  );
}
