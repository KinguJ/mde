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
  // params is not a Promise
  const { slug } = await params;

  const product = getProductBySlug(slug);
  if (!product) notFound();

  const infoSections = (product.sections ?? []).filter(
    (s) => s.type === 'richText' || s.type === 'bullets'
  );

  const faqItems = (product.sections ?? [])
    .filter((s) => s.type === 'faq')
    .flatMap((s) => s.items);

  return (
    <div className="py-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
        <div className="min-w-0 space-y-6">
          <div>
            <h1 className="h1-bold tracking-tight text-chart-1">
              {product.title}
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </div>

          <div className="h-px w-full bg-border/70" />

          <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            <ProductImage src={product.imageSrc} alt={product.title} />
          </div>

          <section className="rounded-xl bg-card/85 p-6 ">
            <h2 className="h3-bold">Bilgilendirme</h2>
            <div className="mt-4 space-y-8">

              {infoSections.map((s, idx) => {
                if (s.type === 'richText') {
                  return (
                    <div key={idx} className="space-y-3">
                      <h2 className="text-base font-semibold">{s.title}</h2>
                      <div className="space-y-3 text-muted-foreground">
                        {s.content.map((p, i) => (
                          <p key={i} className="leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                }

                // bullets
                return (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-base font-semibold">{s.title}</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {s.items.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ONE FAQ section */}
          {faqItems.length > 0 && (
            <section className="rounded-2xl bg-card/75 p-6">
              <h2 className="h3-bold">Sık Sorulan Sorular</h2>

              <div className="mt-4 space-y-2">
                {faqItems.map((it, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border bg-background/60 p-4 transition hover:bg-background"
                  >
                    <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                      <span>{it.q}</span>
                      <span className="text-muted-foreground transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {it.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

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
          <div className="rounded-2xl border bg-card p-7 shadow-sm">
            <h2 className="h3-bold">Teklif Talebi</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Formu doldurun, size geri dönüş yapalım.
            </p>

            <div className="mt-5">
              <TeklifFormu
                productSlug={product.slug}
                productTitle={product.title}
                extraFields={product.form?.extraFields ?? []}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
