import { SimplePage } from '@/components/shared/SimplePage';

export default function KullaniciSozlesmesiPage() {
  return (
    <SimplePage
      title="Kullanıcı Sözleşmesi"
      description="Web sitemizi kullanım koşulları ve hükümleri."
      ctaLabel="Sorularınız için iletişime geçin"
      ctaHref="/iletisim"
    >
      <div className="space-y-6">
        <div>
          <p>
            Bu sözleşme, MDE Sigorta web sitesini ziyaret eden ve iletişim
            formu veya WhatsApp üzerinden hizmet talebinde bulunan kullanıcılar
            ile MDE Sigorta arasındaki ilişkiyi düzenler.
          </p>
        </div>
        <div>
          <h2 className="h3-bold mb-2">Hizmet Kapsamı</h2>
          <p>
            Sitede sunulan bilgiler broşür niteliğindedir. Teklif ve poliçe
            işlemleri yalnızca WhatsApp veya iletişim formu üzerinden
            yürütülmektedir. Online teklif veya ödeme altyapısı bulunmamaktadır.
          </p>
        </div>
        <div>
          <h2 className="h3-bold mb-2">Kullanıcı Yükümlülükleri</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Doğru ve güncel bilgi vermek</li>
            <li>Siteyi yasalara aykırı veya kötüye kullanmamak</li>
            <li>Üçüncü kişilerin haklarına saygı göstermek</li>
          </ul>
        </div>
        <div>
          <h2 className="h3-bold mb-2">Fikri Mülkiyet</h2>
          <p>
            Sitedeki metin, görsel ve tasarım unsurları MDE Sigorta’ya aittir.
            İzinsiz kopyalama, dağıtma veya ticari kullanım yasaktır.
          </p>
        </div>
        <div>
          <h2 className="h3-bold mb-2">Uygulanacak Hukuk</h2>
          <p>
            Bu sözleşme Türkiye Cumhuriyeti kanunlarına tabidir. Uyuşmazlıklarda
            İstanbul mahkemeleri ve icra daireleri yetkilidir.
          </p>
        </div>
        <div>
          <p>
            Sözleşme metninde değişiklik yapıldığında güncel metin sitede
            yayımlanacaktır. Sorularınız için iletişim formu veya e-posta
            kullanabilirsiniz.
          </p>
        </div>
      </div>
    </SimplePage>
  );
}
