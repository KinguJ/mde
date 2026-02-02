import Hero from '@/components/sections/hero';
import QuickProducts from '@/components/sections/quick-products';
import Partners from '@/components/sections/partners';
import Testimonials from '@/components/sections/testimonials';
import FAQ from '@/components/sections/faq';

const HomePage = async () => {
  return (
    <div className="space-y-0">
      <Hero />
      <QuickProducts />
      <Partners />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default HomePage;