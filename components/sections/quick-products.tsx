import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Car,
  Bike,
  ShieldCheck,
  HeartPulse,
  Building2,
  Home,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { products } from "@/lib/data/products";

const slugToIcon: Record<string, LucideIcon> = {
  "trafik-sigortasi": Car,
  kasko: ShieldCheck,
  saglik: HeartPulse,
  dask: Home,
  "tamamlayici-saglik": HeartPulse,
  "elektrikli-arac-kasko": Zap,
  "zorunlu-mali-mesuliyet": Building2,
  "motorsiklet-trafik": Bike,
};

const QuickProducts = () => {
  return (
    <section id="quick-products" className="py-10">
      <div className="wrapper">
        <div className="mb-6 text-center">
          <h2 className="h2-bold">Sigorta Ürünlerimiz</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            İhtiyacınıza uygun sigortayı hızlıca seçin, teklif için WhatsApp veya iletişim formu ile bize ulaşın.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {products.map((p) => {
            const Icon = slugToIcon[p.slug] ?? ShieldCheck;
            const href = `/urunlerimiz/${p.slug}`;
            const desc = p.description.length > 56 ? p.description.slice(0, 56) + "…" : p.description;
            return (
              <Link key={p.slug} href={href} className="group">
                <Card className="h-full p-5 border bg-card shadow-sm transition-all group-hover:-translate-y-1 group-hover:shadow-md">
                  <div className="flex h-full flex-col items-center text-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-primary">
                      <Icon className="size-6 text-primary transition-colors group-hover:text-primary-foreground" />
                    </div>

                    <div className="text-sm font-semibold leading-tight line-clamp-2">
                      {p.title}
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {desc}
                    </p>

                    <div className="mt-auto pt-2 text-sm font-medium text-primary">
                      Teklif Al →
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickProducts;
