import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BasindaBizPage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">Basında Biz</h1>
        <p className="text-muted-foreground max-w-3xl">
          MDE Sigorta ile ilgili basın duyuruları ve haberler. Güncel
          içerikler için takipte kalın.
        </p>
      </header>

      <section className="max-w-3xl">
        <p className="text-muted-foreground">
          Şu anda listelenecek basın haberimiz bulunmamaktadır. Sorularınız
          veya iş birliği talepleriniz için iletişime geçebilirsiniz.
        </p>
      </section>

      <div className="pt-4">
        <Button asChild>
          <Link href="/iletisim">İletişime Geçin</Link>
        </Button>
      </div>
    </div>
  );
}
