import { SimplePage } from '@/components/shared/SimplePage';

export default function KVKKPage() {
  return (
    <SimplePage
      title="KVKK Aydınlatma Metni"
      description="Kişisel verilerinizin işlenmesine ilişkin aydınlatma metnidir."
      ctaLabel="Sorularınız için iletişime geçin"
      ctaHref="/iletisim"
    >
      <div className="space-y-6">
        <div>
          <h2 className="h3-bold mb-2">Veri Sorumlusu</h2>
          <p>
            Kişisel verileriniz; 6698 sayılı Kişisel Verilerin Korunması Kanunu
            kapsamında veri sorumlusu olan MDE Sigorta tarafından işlenmektedir.
          </p>
        </div>
        <div>
          <h2 className="h3-bold mb-2">İşlenen Veriler</h2>
          <p>
            İletişim formu, WhatsApp ve telefon iletişimleri üzerinden ad soyad,
            e-posta, telefon, adres ve talep içeriğiniz gibi kişisel veriler
            toplanabilmektedir.
          </p>
        </div>
        <div>
          <h2 className="h3-bold mb-2">Amaç ve Hukuki Sebep</h2>
          <p>
            Verileriniz; teklif hazırlama, poliçe ve hasar işlemleri, müşteri
            ilişkileri ve yasal yükümlülüklerin yerine getirilmesi amacıyla
            işlenmektedir.
          </p>
        </div>
        <div>
          <h2 className="h3-bold mb-2">Haklarınız</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme</li>
            <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
            <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
            <li>Kanunda öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
            <li>Otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
            <li>Kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
          </ul>
        </div>
        <div>
          <p>
            Başvurularınızı yazılı veya kayıtlı elektronik ortamdan iletebilirsiniz.
            Detaylı bilgi ve başvuru için iletişim formu veya e-posta adresimizi
            kullanabilirsiniz.
          </p>
        </div>
      </div>
    </SimplePage>
  );
}
