export type FooterLink = { label: string; href: string };

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export const footerSections: FooterSection[] = [
  {
    title: 'Hakkımızda',
    links: [
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'Kurumsal', href: '/kurumsal' },
      { label: 'Vizyon / Misyon', href: '/vizyon-misyon' },
      { label: 'KVKK Aydınlatma', href: '/kvkk' },
      { label: 'Çerez Politikası', href: '/cerez-politikasi' },
      { label: 'Gizlilik Politikası', href: '/gizlilik' },
      { label: 'Kullanıcı Sözleşmesi', href: '/kullanici-sozlesmesi' },
      { label: 'Destek / SSS', href: '/sss' },
      { label: 'Poliçe İptali', href: '/police-iptali' },
    ],
  },
  {
    title: 'Ürünlerimiz',
    links: [
      { label: 'Trafik', href: '/urunlerimiz/trafik-sigortasi' },
      { label: 'Kasko', href: '/urunlerimiz/kasko' },
      { label: 'Sağlık', href: '/urunlerimiz/saglik' },
      { label: 'DASK', href: '/urunlerimiz/dask' },
      { label: 'Tamamlayıcı Sağlık', href: '/urunlerimiz/tamamlayici-saglik' },
      { label: 'Elektrikli Araç Kasko', href: '/urunlerimiz/elektrikli-arac-kasko' },
      { label: 'Zorunlu Mali Mesuliyet', href: '/urunlerimiz/zorunlu-mali-mesuliyet' },
      { label: 'Motosiklet Trafik', href: '/urunlerimiz/motorsiklet-trafik' },
      { label: 'Tüm Ürünler', href: '/urunlerimiz' },
    ],
  },
  {
    title: 'Hızlı Erişim',
    links: [
      { label: 'Bize Ulaşın', href: '/iletisim' },
      { label: 'Poliçe ve Hasar İşlemleri', href: '/police-ve-hasar-islemleri' },
      { label: 'Kaza Tespit Tutanağı', href: '/kaza-tespit-tutanagi' },
      { label: 'Anlaşmalı Servisler', href: '/anlasmali-servisler' },
      { label: 'İşlem Rehberi', href: '/islem-rehberi' },
      { label: 'Araç Değer Listesi', href: '/arac-deger-listesi' },
      { label: 'Vergi / Basamak Hesaplama', href: '/hesaplamalar' },
    ],
  },
];
