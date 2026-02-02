import Link from "next/link";
import { EllipsisVertical, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { products } from "@/lib/data/products";

type MenuProps = {
  showDesktopLinks?: boolean;
  showMobileTrigger?: boolean;
};

const Menu = ({ showDesktopLinks = true, showMobileTrigger = true }: MenuProps) => {
  return (
    <div className="flex justify-end gap-3">
      {showDesktopLinks && (
        <nav className="md:flex hidden items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-auto p-0 font-normal">
                <span className="px-2 py-1">Ürünler</span>
                <ChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href="/urunlerimiz">Tüm Ürünler</Link>
              </DropdownMenuItem>
              {products.map((p) => (
                <DropdownMenuItem key={p.slug} asChild>
                  <Link href={`/urunlerimiz/${p.slug}`}>{p.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-auto p-0 font-normal">
                <span className="px-2 py-1">Poliçe ve Hasar İşlemleri</span>
                <ChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href="/islemler/police-sorgulama">Poliçe Sorgulama</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/islemler/hasar-bildirimi">Hasar Bildirimi</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/islemler/islem-rehberi">İşlem Rehberi</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/iletisim" className="text-sm hover:text-primary transition-colors">
            Bize Ulaşın
          </Link>
        </nav>
      )}

      {showMobileTrigger && (
        <nav className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Menüyü aç"
                className="cursor-pointer"
              >
                <EllipsisVertical className="cursor-pointer size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent className="p-4 [&>button]:cursor-pointer">
              <SheetHeader>
                <SheetTitle>Menü</SheetTitle>
              </SheetHeader>

              <div className="mt-4 flex flex-col gap-3">
                <Link href="/urunlerimiz" className="text-base hover:text-primary transition-colors">
                  Ürünler
                </Link>
                <Link href="/police-ve-hasar-islemleri" className="text-base hover:text-primary transition-colors">
                  Poliçe ve Hasar İşlemleri
                </Link>
                <Link href="/sss" className="text-base hover:text-primary transition-colors">
                  SSS
                </Link>
                <Link href="/basinda-biz" className="text-base hover:text-primary transition-colors">
                  Basında Biz
                </Link>
                <Link href="/iletisim" className="text-base hover:text-primary transition-colors">
                  Bize Ulaşın
                </Link>
                <Link href="/blog" className="text-base hover:text-primary transition-colors">
                  Blog
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      )}
    </div>
  );
};

export default Menu;
