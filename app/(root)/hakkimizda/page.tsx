import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">Hakkımızda</h1>
        <p className="text-muted-foreground max-w-3xl">
          MDE Sigorta olarak bireysel ve kurumsal müşterilerimize ihtiyaçlarına
          uygun, şeffaf ve güvenilir sigorta çözümleri sunuyoruz. Deneyimli
          ekibimizle; trafik, kasko, sağlık, DASK ve diğer ürünlerde geniş
          yelpazede hizmet veriyoruz.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 max-w-4xl">
        <div className="space-y-3">
          <h2 className="h2-bold">Misyonumuz</h2>
          <p className="text-muted-foreground">
            Müşterilerimizin karşılaşabileceği risklere karşı hızlı, anlaşılır
            sigorta deneyimi sunmak; teklif, poliçe ve hasar süreçlerinde
            yanlarında olmak.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="h2-bold">Vizyonumuz</h2>
          <p className="text-muted-foreground">
            Uzmanlık ve güveni birleştirerek sigortayı herkes için erişilebilir
            ve şeffaf kılmak.
          </p>
        </div>
      </section>

      <section className="space-y-4 max-w-3xl">
        <h2 className="h2-bold">Neden Bizi Tercih Etmelisiniz?</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Çoklu sigorta şirketi karşılaştırması ile size uygun fiyat.</li>
          <li>Teklif ve hasar süreçlerinde WhatsApp ve iletişim formu ile hızlı destek.</li>
          <li>Şeffaf, anlaşılır poliçe ve teminat açıklamaları.</li>
          <li>Yenileme ve iptal işlemlerinde yanınızda olan danışmanlık.</li>
        </ul>
      </section>

      <div className="pt-4 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/iletisim">Bize Ulaşın</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/urunlerimiz">Ürünlerimiz</Link>
        </Button>
      </div>
    </div>
  );
}
