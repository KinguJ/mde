import { SimplePage } from '@/components/shared/SimplePage';

export default function GizlilikPage() {
  return (
    <SimplePage
      title="Gizlilik Politikası"
      description="Kişisel verilerinizin korunması ve gizliliğinize ilişkin politikamız."
      ctaLabel="Sorularınız için iletişime geçin"
      ctaHref="/iletisim"
    >
      <div className="space-y-6">
        <div>
          <p>
            MDE Sigorta olarak gizliliğinize önem veriyoruz. Bu politika;
            web sitemizi ziyaret ettiğinizde, iletişim formu veya WhatsApp
            üzerinden bize ulaştığınızda toplanan bilgilerin nasıl kullanıldığını
            açıklamaktadır.
          </p>
        </div>
        <div>
          <h2 className="h3-bold mb-2">Toplanan Bilgiler</h2>
          <p>
            Ad soyad, e-posta, telefon numarası, adres ve talep içeriğiniz
            gibi iletişim ve işlem süreçlerinde kullandığımız veriler
            toplanabilir. Teklif, poliçe ve hasar işlemleri için gerekli
            ek bilgiler talep edilebilir.
          </p>
        </div>
        <div>
          <h2 className="h3-bold mb-2">Kullanım Amaçları</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Sigorta teklifi hazırlama ve poliçe süreçleri</li>
            <li>Hasar bildirimi ve takip işlemleri</li>
            <li>Müşteri iletişimi ve destek hizmetleri</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>
        </div>
        <div>
          <h2 className="h3-bold mb-2">Veri Güvenliği</h2>
          <p>
            Verileriniz güvenli ortamda saklanır; yetkisiz erişim, kayıp veya
            kötüye kullanıma karşı önlemler alınmaktadır. KVKK ve ilgili
            mevzuata uygun işlem yapılmaktadır.
          </p>
        </div>
        <div>
          <p>
            Politika metninde değişiklik yapıldığında bu sayfa güncellenecektir.
            Sorularınız için iletişim formu veya e-posta üzerinden bize
            ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </SimplePage>
  );
}
