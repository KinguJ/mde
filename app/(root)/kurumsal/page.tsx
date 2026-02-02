import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function KurumsalPage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">Kurumsal</h1>
        <p className="text-muted-foreground max-w-3xl">
          MDE Sigorta’nın kurumsal değerleri, müşteri odaklı hizmet anlayışımızın
          temelini oluşturur.
        </p>
      </header>

      <section className="space-y-6 max-w-3xl">
        <div>
          <h2 className="h3-bold mb-2">Güven</h2>
          <p className="text-muted-foreground">
            Müşteri verilerinin güvenliği ve gizliliği önceliğimizdir. İşlemlerimiz
            KVKK ve ilgili mevzuata uygun yürütülür.
          </p>
        </div>
        <div>
          <h2 className="h3-bold mb-2">Şeffaflık</h2>
          <p className="text-muted-foreground">
            Poliçe koşulları, teminatlar ve maliyetler konusunda net, anlaşılır
            bilgi sunuyoruz.
          </p>
        </div>
        <div>
          <h2 className="h3-bold mb-2">Hız ve Erişilebilirlik</h2>
          <p className="text-muted-foreground">
            WhatsApp ve iletişim formu ile ulaşılabilir; teklif, poliçe ve hasar
            süreçlerinde hızlı yanıt veriyoruz.
          </p>
        </div>
      </section>

      <div className="pt-4">
        <Button asChild>
          <Link href="/iletisim">Bize Ulaşın</Link>
        </Button>
      </div>
    </div>
  );
}
