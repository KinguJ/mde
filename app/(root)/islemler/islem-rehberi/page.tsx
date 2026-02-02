import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function IslemlerIslemRehberiPage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">İşlem Rehberi</h1>
        <p className="text-muted-foreground max-w-3xl">
          Teklif alma, poliçe sorgulama, hasar bildirimi ve ilgili işlemlerde
          adım adım rehber için aşağıdaki sayfayı inceleyebilirsiniz.
        </p>
      </header>

      <div className="pt-4">
        <Button asChild>
          <Link href="/islem-rehberi">İşlem Rehberi Sayfasına Git</Link>
        </Button>
      </div>
    </div>
  );
}
