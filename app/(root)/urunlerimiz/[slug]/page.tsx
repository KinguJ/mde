import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getProductBySlug, getAllProductSlugs } from '@/lib/data/products';
import { WHATSAPP_URL } from '@/lib/constants';
import { ProductImage } from '@/components/shared/ProductImage';
import { TeklifFormu } from '@/components/forms/TeklifFormu';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="py-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
        <div className="min-w-0 space-y-6">
          <div>
            <h1 className="h1-bold text-chart-1">{product.title}</h1>
            <p className="mt-2 text-muted-foreground max-w-3xl">
              {product.description}
            </p>
          </div>

          <ProductImage src={product.imageSrc} alt={product.title} />

          <section className="space-y-3">
            <h2 className="h3-bold">Teminatlar ve Özellikler</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {product.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </section>

          {/* Optional per-product sections */}
          {product.sections?.map((s, idx) => {
            if (s.type === 'richText') {
              return (
                <section key={idx} className="space-y-3">
                  <h2 className="h3-bold">{s.title}</h2>
                  <div className="space-y-3 text-muted-foreground">
                    {s.content.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </section>
              );
            }

            if (s.type === 'bullets') {
              return (
                <section key={idx} className="space-y-3">
                  <h2 className="h3-bold">{s.title}</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {s.items.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </section>
              );
            }

            if (s.type === 'faq') {
              return (
                <section key={idx} className="space-y-3">
                  <h2 className="h3-bold">{s.title}</h2>
                  <div className="space-y-2">
                    {s.items.map((it, i) => (
                      <details key={i} className="rounded-lg border p-4">
                        <summary className="cursor-pointer font-medium">
                          {it.q}
                        </summary>
                        <p className="mt-2 text-muted-foreground">{it.a}</p>
                      </details>
                    ))}
                  </div>
                </section>
              );
            }

            return null;
          })}

          {/*
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp ile Teklif Al
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/urunlerimiz">Tüm Ürünlere Dön</Link>
            </Button>
          </div>
          */}
        </div>

        <div className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h2 className="h3-bold mb-5">Teklif Talebi</h2>
            <TeklifFormu
              productSlug={product.slug}
              productTitle={product.title}
              extraFields={product.form?.extraFields ?? []}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
