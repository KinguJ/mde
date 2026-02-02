import Link from 'next/link';
import { APP_NAME, PHONE, WHATSAPP_URL } from '@/lib/constants';
import Menu from './menu';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { MessageCircle, Phone, Search as SearchIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between py-2">
        <Link
          href="/"
          className="inline-flex items-baseline font-black tracking-tight text-5xl text-primary hover:text-primary/90 transition-colors"
        >
          {APP_NAME.split(' ')[0]}
        </Link>

        <div className="hidden md:block">
          <Menu showDesktopLinks={true} showMobileTrigger={false} />
        </div>

        <div className="flex items-center gap-2 pr-4">
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href={`tel:${PHONE}`}>
              <Phone className="size-4" />
              {PHONE}
            </Link>
          </Button>

          <Button asChild className="hidden md:inline-flex bg-[#25D366] hover:bg-[#20bd5a]">
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              WhatsApp’tan Yaz
            </Link>
          </Button>

          <Button asChild variant="ghost" size="icon" className="md:hidden ">
            <Link href={`tel:${PHONE}`} aria-label="Telefon">
              <Phone className="size-5" />
            </Link>
          </Button>

          <Button asChild variant="ghost" size="icon" className="md:hidden bg-[#25D366] text-white hover:bg-[#20bd5a] hover:text-white">
            <Link href={WHATSAPP_URL} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-5" />
            </Link>
          </Button>

          <div className="md:hidden">
            <Menu showDesktopLinks={false} showMobileTrigger={true} />
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Ara">
                <SearchIcon className="size-5" />
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default Header;
