import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="py-16">
  <div className="wrapper grid items-center gap-10 lg:grid-cols-2 ">
    <div className="space-y-6">
      <h1 className="h1-bold">
        Araç, sağlık, konut ve iş sigortalarınız için hızlı, güvenilir ve şeffaf çözümler.
      </h1>

      <ul className="space-y-2 text-muted-foreground">
        <li>• Birden fazla şirketten teklif karşılaştırın</li>
        <li>• Dakikalar içinde başvuru</li>
        <li>• Hasar sürecinde adım adım yönlendirme</li>
      </ul>

      <Button asChild size="lg" className='h-12 px-16 text-base bg-primary-foreground text-primary border-1 border-primary/50 hover:border-primary/75 hover:bg-accent/69'>
        <Link href="/iletisim">Teklif Al</Link>
      </Button>
    </div>

    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
      <Image
        src="/pexels-jakubzerdzicki-31424880.jpg"
        alt="Sigorta danışmanlığı"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/10" />
    </div>
  </div>
</section>

  );
};

export default Hero;

