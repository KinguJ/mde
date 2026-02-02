export type FieldConfig = {
  type: 'text' | 'select' | 'date';
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
};

export type ProductFormConfig = {
  extraFields?: FieldConfig[];
};
export type ProductSection =
  | { type: 'richText'; title: string; content: string[] }
  | { type: 'bullets'; title: string; items: string[] }
  | { type: 'faq'; title: string; items: { q: string; a: string }[] };

export type Product = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  sections?: ProductSection[];
  form?: ProductFormConfig;
};

const FALLBACK_IMAGE = '/images/products/fallback.jpg';

export const products: Product[] = [
  {
    slug: 'trafik-sigortasi',
    title: 'Trafik Sigortası',
    description:
      'Zorunlu trafik sigortası, motorlu araç sahiplerinin yasal yükümlülüğüdür. Üçüncü şahıslara verebileceğiniz maddi ve bedeni zararları karşılar. Size uygun fiyat ve hızlı poliçe için WhatsApp veya iletişim formu üzerinden teklif alın.',
    bullets: [
      'Zorunlu yasal teminat',
      'Üçüncü şahıs maddi ve bedeni zarar',
      'Tüm sigorta şirketleriyle karşılaştırmalı fiyat',
      'Hızlı poliçe çıkarma',
    ],
    imageSrc: '/images/products/trafik-sigortasi.jpg',
  },
{
  slug: 'kasko',
  title: 'Kasko Sigortası',
  description:
    'Kasko sigortası, aracınızı beklenmedik kazalara, hırsızlığa, yangına ve doğal afetlere karşı koruyan isteğe bağlı bir sigorta türüdür. Poliçenizi ihtiyaçlarınıza göre özelleştirerek daha geniş kapsam elde edebilirsiniz.',

  bullets: [
    'Geniş teminat seçenekleri',
    'Anlaşmalı servis ağı',
    'Hızlı hasar işlemleri',
    'Esnek ödeme alternatifleri',
  ],

  imageSrc: '/images/products/kasko.jpg',

  sections: [
    {
      type: 'richText',
      title: 'Araç Kasko Sigortası Nedir?',
      content: [
        'Kasko sigortası, aracınızın karşılaşabileceği maddi risklere karşı güvence sağlayan isteğe bağlı bir sigorta ürünüdür.',
        'Kaza, çarpma, yanma, hırsızlık ve doğal afetler gibi durumlarda oluşan zararların büyük kısmı poliçe kapsamında karşılanır.',
        'Bu sayede beklenmedik masraflar karşısında bütçeniz korunur.',
      ],
    },

    {
      type: 'richText',
      title: 'Kasko Sigortası Fiyatı Nasıl Belirlenir?',
      content: [
        'Kasko poliçesinin fiyatı, aracın piyasa değeri, modeli ve üretim yılı gibi teknik bilgilere göre hesaplanır.',
        'Sürücünün geçmiş hasar kayıtları ve kullanım alışkanlıkları da prim tutarını etkileyen önemli faktörler arasındadır.',
        'Seçilen teminat kapsamı ve muafiyet oranları fiyat üzerinde belirleyici rol oynar.',
      ],
    },

    {
      type: 'richText',
      title: 'Kasko Sigortası Teklifi Nasıl Alınır?',
      content: [
        'Kasko teklifi almak için araç bilgilerinizi ve kişisel bilgilerinizi teklif formuna girmeniz yeterlidir.',
        'Sistemimiz, farklı sigorta şirketlerinden alınan teklifleri karşılaştırmalı olarak sunar.',
        'Bu sayede bütçenize ve ihtiyaçlarınıza en uygun poliçeyi kolayca seçebilirsiniz.',
      ],
    },

    {
      type: 'faq',
      title: 'Sık Sorulan Sorular',
      items: [
        {
          q: 'Kasko sigortası zorunlu mudur?',
          a: 'Hayır. Kasko sigortası isteğe bağlıdır, ancak aracınızı kapsamlı şekilde korumak için önerilir.',
        },
        {
          q: 'Hasarsızlık indirimi nasıl korunur?',
          a: 'Poliçe süresi boyunca hasar kaydı oluşmaması durumunda hasarsızlık indirimi devam eder.',
        },
        {
          q: 'Kasko tüm hasarları karşılar mı?',
          a: 'Teminat kapsamı poliçeye göre değişir. Bazı riskler ek teminatlarla dahil edilebilir.',
        },
        {
          q: 'Poliçe süresi ne kadardır?',
          a: 'Kasko sigortası genellikle 1 yıl süreyle düzenlenir ve her yıl yenilenir.',
        },
      ],
    },
  ],
},
  {
    slug: 'saglik',
    title: 'Sağlık Sigortası',
    description:
      'Özel sağlık giderlerinizi karşılayan bireysel sağlık sigortası. Anlaşmalı hastane ve doktor ağıyla düşük katılım paylı, esnek paketler sunuyoruz.',
    bullets: [
      'Yatarak ve ayakta tedavi',
      'Anlaşmalı kurum ağı',
      'Ek primle genişletilebilir paketler',
      'Yıllık check-up imkânı',
    ],
    imageSrc: '/images/products/saglik.jpg',
  },
  {
    slug: 'dask',
    title: 'DASK (Zorunlu Deprem Sigortası)',
    description:
      'Meskenler için zorunlu deprem sigortası. Olası deprem kaynaklı hasarlara karşı mal güvencesi sağlar. Konut bilgilerinizle hızlı teklif alabilirsiniz.',
    bullets: [
      'Zorunlu deprem teminatı',
      'Bina ve eşya hasarı',
      'Türkiye geneli geçerli',
      'Uygun prim seçenekleri',
    ],
    imageSrc: '/images/products/dask.jpg',
  },
  {
    slug: 'tamamlayici-saglik',
    title: 'Tamamlayıcı Sağlık Sigortası',
    description:
      'SGK tamamlayıcı sağlık sigortası ile özel sağlık harcamalarınızın bir kısmı karşılanır. Primler vergi indirimi kapsamındadır. Detay ve teklif için bize ulaşın.',
    bullets: [
      'SGK farkı tamamlama',
      'Vergi indirimi avantajı',
      'Geniş anlaşmalı hastane ağı',
      'Ayakta ve yatarak tedavi',
    ],
    imageSrc: '/images/products/tamamlayici-saglik.jpg',
  },
  {
    slug: 'elektrikli-arac-kasko',
    title: 'Elektrikli Araç Kasko',
    description:
      'Elektrikli ve hibrit araçlara özel kasko ürünleri. Batarya, şarj ünitesi ve elektrikli aksam teminatları dahil. Fiyat ve kapsam için WhatsApp veya iletişim formundan teklif isteyin.',
    bullets: [
      'Batarya ve elektrikli aksam teminatı',
      'Şarj istasyonu hasarları',
      'Özel muafiyet seçenekleri',
      'Anlaşmalı yetkili servisler',
    ],
    imageSrc: '/images/products/elektrikli-arac-kasko.jpg',
  },
  {
    slug: 'zorunlu-mali-mesuliyet',
    title: 'Zorunlu Mali Mesuliyet Sigortası',
    description:
      'İşletmenizin üçüncü kişilere verebileceği maddi ve bedeni zararları karşılar. Zorunlu yasal teminat; iş kolu ve limitlere göre fiyatlandırılır.',
    bullets: [
      'Üçüncü şahıs maddi ve bedeni zarar',
      'İş kolu ve limit bazlı prim',
      'Yasal zorunluluk',
      'İsteğe bağlı ek teminatlar',
    ],
    imageSrc: '/images/products/zorunlu-mali-mesuliyet.jpg',
    form: {
      extraFields: [
        {
          type: 'text',
          name: 'isletmeAdi',
          label: 'İşletme Adı',
          placeholder: 'İşletme adınızı girin',
          required: true,
        },
      ],
    },
  },
  {
    slug: 'motorsiklet-trafik',
    title: 'Motosiklet Trafik Sigortası',
    description:
      'Motosiklet ve motorlu bisikletler için zorunlu trafik sigortası. Üçüncü şahıs zararlarını karşılar. Hızlı teklif ve poliçe için WhatsApp veya iletişim formunu kullanın.',
    bullets: [
      'Zorunlu trafik teminatı',
      'Motosiklet ve motorlu bisiklet',
      'Uygun fiyatlı prim seçenekleri',
      'Hızlı poliçe süreci',
    ],
    imageSrc: '/images/products/motorsiklet-trafik.jpg',
  },
];

export const FALLBACK_PRODUCT_IMAGE = FALLBACK_IMAGE;

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
