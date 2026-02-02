import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Neden sigorta yaptırmalıyım?',
    a: 'Beklenmedik risklere karşı finansal güvence sağlar; zorunlu ve isteğe bağlı ürünlerle ihtiyaçlarınıza göre koruma sunar.',
  },
  {
    q: 'İnternetten sigorta almak güvenli mi?',
    a: 'Güvenilir altyapılar ve SSL ile bilgileriniz korunur. Ödeme ve poliçe süreçleri standartlara uygundur.',
  },
  {
    q: 'Online teklif almanın avantajları neler?',
    a: 'Çoklu şirket karşılaştırması, hızlı fiyat alma ve kolay başvuru ile zaman tasarrufu sağlar.',
  },
  {
    q: 'Poliçe karşılaştırırken nelere dikkat etmeliyim?',
    a: 'Teminat kapsamı, istisnalar, muafiyetler ve ek hizmetler toplam maliyet kadar önemlidir.',
  },
  {
    q: 'Teklifimi nasıl hızlıca alırım?',
    a: 'Kısa formu doldurun, temel bilgilerinizle dakikalar içinde teklif oluşturulur.',
  },
  {
    q: 'Kaza durumunda ilk ne yapmalıyım?',
    a: 'Öncelikle güvenliğinizi sağlayın, gerekirse 112’yi arayın; ardından tutanak ve fotoğrafla süreci belgeleyin.',
  },
  {
    q: 'Hangi durumlarda tutanak tutulmaz?',
    a: 'Yaralanmalı kazalar, sürücü belgesiz kullanım vb. durumlarda polis/jandarma çağırılmalıdır.',
  },
];

const FAQ = () => {
  return (
    <section className="py-12">
      <div className="wrapper">
        <h2 className="h2-bold text-center mb-6">En Çok Sorulan 7 Soru</h2>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, idx) => {
              const value = `item-${idx}`;
              return (
                <AccordionItem key={value} value={value}>
                  <AccordionTrigger value={value}>{item.q}</AccordionTrigger>
                  <AccordionContent value={value}>{item.a}</AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

