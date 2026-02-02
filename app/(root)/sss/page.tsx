import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    q: 'Hangi sigorta ürünlerini sunuyorsunuz?',
    a: 'Trafik, kasko, sağlık, tamamlayıcı sağlık, DASK, elektrikli araç kasko, zorunlu mali mesuliyet ve motosiklet trafik sigortası başta olmak üzere geniş ürün yelpazesi sunuyoruz.',
  },
  {
    q: 'Teklif almak için ne yapmalıyım?',
    a: 'WhatsApp veya iletişim formu üzerinden bize ulaşın. Ürüne göre araç, konut veya kişisel bilgilerinizi paylaşın; size uygun teklifleri hazırlayalım.',
  },
  {
    q: 'Online teklif veya poliçe satışı var mı?',
    a: 'Hayır. Teklif ve poliçe işlemleri yalnızca WhatsApp veya iletişim formu üzerinden yürütülmektedir. Size özel fiyat ve kapsam için bize yazın.',
  },
  {
    q: 'Hasar durumunda süreç nasıl işler?',
    a: 'Önce güvenliğinizi sağlayın. Mümkünse kaza tespit tutanağı düzenleyin, fotoğraf alın. Ardından WhatsApp veya iletişim formu ile bize bildirin; gerekli evraklar ve yönlendirmeler konusunda destek veririz.',
  },
  {
    q: 'Poliçe yenileme hatırlatması yapıyor musunuz?',
    a: 'Evet. Yenileme döneminden önce sizi bilgilendirir, isterseniz güncel teklifleri paylaşırız.',
  },
  {
    q: 'Poliçe iptali nasıl yapılır?',
    a: 'İptal talebinizi WhatsApp veya iletişim formu ile iletin. Kimlik ve poliçe bilgilerinizle süreci başlatıp kalan iade tutarını size bildiririz.',
  },
];

export default function FAQPage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">Sıkça Sorulan Sorular</h1>
        <p className="text-muted-foreground max-w-3xl">
          En çok merak edilen soruları derledik. Aradığınızı bulamazsanız
          WhatsApp veya iletişim formu ile bize yazın.
        </p>
      </header>

      <section className="max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, idx) => {
            const value = `faq-${idx}`;
            return (
              <AccordionItem key={value} value={value}>
                <AccordionTrigger value={value}>{item.q}</AccordionTrigger>
                <AccordionContent value={value}>{item.a}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>

      <div className="pt-4">
        <Button asChild>
          <Link href="/iletisim">Teklif veya Destek İçin İletişime Geçin</Link>
        </Button>
      </div>
    </div>
  );
}
