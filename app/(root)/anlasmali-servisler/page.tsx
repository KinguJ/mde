import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AnlasmaliServislerPage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-3">
        <h1 className="h1-bold">Anlaşmalı Servisler</h1>
        <p className="text-muted-foreground max-w-3xl">
          Kasko ve trafik hasarlarında anlaşmalı servislerden yararlanmak için
          hasar bildiriminizi önce bize iletin. Size uygun servis yönlendirmesi
          yapalım.
        </p>
      </header>

      <section className="space-y-4 max-w-3xl">
        <h2 className="h2-bold">Nasıl İşler?</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Hasar bildiriminizi WhatsApp veya iletişim formu ile yapın.</li>
          <li>Poliçe ve hasar detaylarınıza göre anlaşmalı servis önerilir.</li>
          <li>Servis randevusu ve evrak süreçleri konusunda destek alırsınız.</li>
          <li>Onay süreçleri sigorta şirketine göre değişir; takipte kalırız.</li>
        </ul>
      </section>

      <div className="pt-4">
        <Button asChild>
          <Link href="/iletisim">Hasar / Servis Talebi İçin İletişime Geçin</Link>
        </Button>
      </div>
    </div>
  );
}
