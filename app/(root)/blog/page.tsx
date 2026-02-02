import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BlogPage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">Blog</h1>
        <p className="text-muted-foreground max-w-3xl">
          Sigorta, trafik, kasko ve hasar süreçleri hakkında faydalı
          yazılar ve rehberler.
        </p>
      </header>

      <section className="max-w-3xl">
        <p className="text-muted-foreground">
          Yakında yeni içeriklerle burada olacağız. Teklif veya destek için
          iletişime geçebilirsiniz.
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
