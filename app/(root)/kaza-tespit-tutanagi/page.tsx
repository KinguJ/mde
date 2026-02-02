import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function KazaTespitTutanagiPage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">Kaza Tespit Tutanağı</h1>
        <p className="text-muted-foreground max-w-3xl">
          Trafik kazası sonrası düzenlenen kaza tespit tutanağı, hasar sürecinin
          temel belgesidir. Nasıl doldurulur ve nelere dikkat edilir?
        </p>
      </header>

      <section className="space-y-4 max-w-3xl">
        <h2 className="h2-bold">Genel Bilgiler</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Kaza yerinde sürücüler arasında anlaşarak doldurulur.</li>
          <li>Araç plakası, sürücü bilgileri, kaza yeri ve hasar kısmı eksiksiz işaretlenmelidir.</li>
          <li>Mümkünse fotoğraf çekin; ortam ve hasarlı bölgeler görünür olmalı.</li>
          <li>Yaralanmalı kazada mutlaka polis veya jandarma çağrılmalıdır.</li>
        </ul>
        <h2 className="h2-bold mt-6">Sonraki Adım</h2>
        <p className="text-muted-foreground">
          Tutanak ve fotoğraflarla birlikte WhatsApp veya iletişim formu üzerinden
          bize ulaşın. Hasar bildirimi ve takip sürecinde size yardımcı olalım.
        </p>
      </section>

      <div className="pt-4">
        <Button asChild>
          <Link href="/iletisim">Hasar Bildirimi İçin İletişime Geçin</Link>
        </Button>
      </div>
    </div>
  );
}
