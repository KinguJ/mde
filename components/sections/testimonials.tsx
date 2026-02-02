import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  { name: 'Sinem R.', text: 'Teklif alma süreci çok hızlı ve kolaydı. Destek ekibi de çok ilgili.' },
  { name: 'Mehmet K.', text: 'Fiyat/performans olarak harika. Poliçemi birkaç dakikada tamamladım.' },
  { name: 'Aylin T.', text: 'Kaza sonrası yönlendirmeler çok netti. Süreç sorunsuz ilerledi.' },
  { name: 'Can U.', text: 'Aradığım tüm ürünleri tek yerde karşılaştırabildim, tavsiye ederim.' },
  { name: 'Ece Y.', text: 'Müşteri hizmetleri çok ilgili, aklımdaki her soruyu yanıtladılar.' },
];

const Testimonials = () => {
  return (
    <section className="py-12">
      <div className="wrapper">
        <h2 className="h2-bold text-center mb-6">Müşteri Memnuniyeti</h2>
        <div className="relative">
          <Carousel
            opts={{ align: 'start', loop: true }}
            className="mx-auto max-w-6xl"
          >
            <CarouselContent>
              {testimonials.map((t, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="font-semibold mb-2">{t.name}</div>
                      <p className="text-sm text-muted-foreground">{t.text}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-10 hidden sm:flex" />
            <CarouselNext className="-right-10 hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

