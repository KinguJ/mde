 "use client";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import * as React from 'react';

const logos = [
  { src: '/Allianz.svg.png', alt: 'Partner 1' },
  { src: '/Allianz.svg.png', alt: 'Partner 2' },
  { src: '/Allianz.svg.png', alt: 'Partner 3' },
  { src: '/Allianz.svg.png', alt: 'Partner 4' },
  { src: '/Allianz.svg.png', alt: 'Partner 5' },
  { src: '/Allianz.svg.png', alt: 'Partner 6' },
  { src: '/Allianz.svg.png', alt: 'Partner 7' },
  { src: '/Allianz.svg.png', alt: 'Partner 8' },
];

const Partners = () => {
  const [expanded, setExpanded] = React.useState(false);
  const visible = expanded ? logos : logos.slice(0, 6);
  return (
    <section className="py-12">
      <div className="wrapper">
        <h2 className="h2-bold text-center mb-6">Çözüm Ortaklarımız</h2>

        {/* Mobile: horizontal scroll; Desktop: grid row */}
        <div className="block sm:hidden">
          <div className="flex overflow-x-auto gap-6 px-1 no-scrollbar" aria-label="Partner logos">
            {visible.map((l, i) => (
              <div key={i} className="shrink-0">
                <Image src={l.src} alt={l.alt} width={96} height={32} />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden sm:grid grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
          {visible.map((l, i) => (
            <Image key={i} src={l.src} alt={l.alt} width={120} height={40} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button onClick={() => setExpanded((v) => !v)}>
            {expanded ? 'Daha Az Göster' : 'Tümünü Göster'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Partners;

