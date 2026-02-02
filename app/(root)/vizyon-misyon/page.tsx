import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function VizyonMisyonPage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">Vizyon ve Misyon</h1>
        <p className="text-muted-foreground max-w-3xl">
          MDE Sigorta’nın uzun vadeli hedefleri ve günlük hizmet anlayışı.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 max-w-4xl">
        <div className="rounded-lg border p-6 space-y-3">
          <h2 className="h2-bold">Misyonumuz</h2>
          <p className="text-muted-foreground">
            Müşterilerimizin sigorta ihtiyaçlarını karşılamak için şeffaf, hızlı
            ve güvenilir bir deneyim sunmak. Tekliften hasar süreçlerine kadar
            yanlarında olmak.
          </p>
        </div>
        <div className="rounded-lg border p-6 space-y-3">
          <h2 className="h2-bold">Vizyonumuz</h2>
          <p className="text-muted-foreground">
            Sigortayı herkes için erişilebilir kılmak; uzmanlık ve teknolojiyle
            sade, anlaşılır çözümler sunmak.
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
