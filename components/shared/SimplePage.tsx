import Link from 'next/link';
import { Button } from '@/components/ui/button';

type SimplePageProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
};

export function SimplePage({
  title,
  description,
  children,
  ctaLabel = 'Teklif almak için iletişime geçin',
  ctaHref = '/iletisim',
}: SimplePageProps) {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">{title}</h1>
        {description && (
          <p className="text-muted-foreground max-w-3xl">{description}</p>
        )}
      </header>
      <section className="space-y-4 text-muted-foreground max-w-3xl">
        {children}
      </section>
      <div className="pt-4">
        <Button asChild>
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
    </div>
  );
}
