import { SimplePage } from '@/components/shared/SimplePage';

export default function CerezPolitikasiPage() {
  return (
    <SimplePage
      title="Çerez Politikası"
      description="Web sitemizde kullanılan çerezler ve tercihleriniz."
      ctaLabel="Sorularınız için iletişime geçin"
      ctaHref="/iletisim"
    >
      <div className="space-y-6">
        <div>
          <p>
            MDE Sigorta web sitesi, kullanıcı deneyimini iyileştirmek ve
            site işleyişini sağlamak amacıyla çerezler kullanabilir.
          </p>
        </div>
        <div>
          <h2 className="h3-bold mb-2">Çerez Nedir?</h2>
          <p>
            Çerezler, cihazınıza kaydedilen küçük metin dosyalarıdır. Ziyaret
            tercihlerinizi hatırlama, sayfa performansını ölçme ve güvenlik
            amacıyla kullanılabilir.
          </p>
        </div>
        <div>
          <h2 className="h3-bold mb-2">Kullandığımız Çerez Türleri</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Zorunlu çerezler: Site temel işlevleri için gereklidir.</li>
            <li>İşlevsel çerezler: Dil, tema gibi tercihlerinizi saklar.</li>
            <li>Analitik çerezler: Site kullanımını anlamak için kullanılabilir.</li>
          </ul>
        </div>
        <div>
          <h2 className="h3-bold mb-2">Çerez Tercihleri</h2>
          <p>
            Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz.
            Bazı çerezlerin kapatılması sitenin tam işlevselliğini etkileyebilir.
          </p>
        </div>
        <div>
          <p>
            Bu politika güncellendiğinde sayfa metni yenilenecektir. Konuya
            dair sorularınız için iletişim formu veya e-posta kullanabilirsiniz.
          </p>
        </div>
      </div>
    </SimplePage>
  );
}
