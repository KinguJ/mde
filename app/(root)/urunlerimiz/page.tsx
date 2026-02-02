import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/data/products';

export default function ProductsPage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">Ürünlerimiz</h1>
        <p className="text-muted-foreground max-w-3xl">
          İhtiyacınıza uygun sigorta ürünlerini inceleyin. Detaylı bilgi ve size
          özel teklif için WhatsApp veya iletişim formu üzerinden bize ulaşın.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Card key={p.slug} className="flex flex-col">
            <CardHeader>
              <CardTitle>
                <Link
                  href={`/urunlerimiz/${p.slug}`}
                  className="hover:text-primary hover:underline"
                >
                  {p.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground flex-1">
              {p.description.slice(0, 120)}…
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" size="sm" className="cursor-pointer">
                <Link href={`/urunlerimiz/${p.slug}`}>Detay ve teklif</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <div className="pt-4">
        <Button asChild>
          <Link href="/iletisim">Teklif Almak İçin İletişime Geçin</Link>
        </Button>
      </div>
    </div>
  );
}
