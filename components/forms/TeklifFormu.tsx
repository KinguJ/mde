'use client';

import React from "react"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AlertTriangle, Info, Send, User, Building2 } from 'lucide-react';

const EMAIL = 'info@example.com';

const PHONE_REGEX = /^(\+90|0)?[0-9]{10}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldOption = {
  value: string;
  label: string;
};

type FieldConfig = {
  name: string;
  label: string;
  type: 'text' | 'select' | 'date';
  placeholder?: string;
  required?: boolean;
  options?: FieldOption[];
};

type TeklifFormuProps = {
  productSlug: string;
  productTitle: string;
  defaultMode?: 'bireysel' | 'kurumsal';
  extraFields?: FieldConfig[];
};

function validatePhone(value: string): string | null {
  const cleaned = value.replace(/\s/g, '').replace(/-/g, '');
  if (!cleaned) return 'Bu alan zorunludur';
  if (!PHONE_REGEX.test(cleaned)) return 'Geçerli bir telefon numarası girin';
  return null;
}

function validateEmail(value: string): string | null {
  if (!value) return 'Bu alan zorunludur';
  if (!EMAIL_REGEX.test(value)) return 'Geçerli bir e-posta adresi girin';
  return null;
}

const inputStyles = `
  h-11 px-3 rounded-lg border bg-background text-sm
  transition-all duration-200
  focus:border-primary focus:ring-2 focus:ring-primary/20
  hover:border-muted-foreground/40
`;

const inputErrorStyles = 'border-destructive focus:border-destructive focus:ring-destructive/20';

export function TeklifFormu({
  productSlug,
  productTitle,
  defaultMode = 'bireysel',
  extraFields = [],
}: TeklifFormuProps) {
  const [mode, setMode] = useState<'bireysel' | 'kurumsal'>(defaultMode);
  const [adSoyad, setAdSoyad] = useState('');
  const [telefon, setTelefon] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [kvkk, setKvkk] = useState(false);
  const [sozlesme, setSozlesme] = useState(false);
  const [extraValues, setExtraValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleExtraChange(name: string, value: string) {
    setExtraValues((prev) => ({ ...prev, [name]: value }));
  }

  function validate(): boolean {
    const newErrors: Record<string, string> = {};
    if (!adSoyad.trim()) newErrors.adSoyad = 'Bu alan zorunludur';
    const phoneErr = validatePhone(telefon);
    if (phoneErr) newErrors.telefon = phoneErr;
    const emailErr = validateEmail(email);
    if (emailErr) newErrors.email = emailErr;
    if (!kvkk) newErrors.kvkk = 'KVKK aydınlatma metnini kabul etmelisiniz';
    if (!sozlesme) newErrors.sozlesme = 'Kullanıcı sözleşmesini kabul etmelisiniz';
    for (const field of extraFields) {
      if (field.required && !extraValues[field.name]?.trim()) {
        newErrors[field.name] = 'Bu alan zorunludur';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    const subject = `Konu: ${productTitle} teklifi`;
    const extraLines = extraFields
      .map((f) => `${f.label}: ${extraValues[f.name] ?? ''}`)
      .join('\n');
    const body = [
      `Başvuru Tipi: ${mode === 'bireysel' ? 'Bireysel' : 'Kurumsal'}`,
      `Ürün: ${productTitle} (${productSlug})`,
      `Ad Soyad: ${adSoyad}`,
      `Cep Telefonu: ${telefon}`,
      `E-posta: ${email}`,
      extraLines,
      '',
      'Mesaj:',
      message,
    ]
      .filter(Boolean)
      .join('\n');
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function renderExtraField(field: FieldConfig) {
    const hasError = !!errors[field.name];
    
    return (
      <div key={field.name} className="space-y-1.5">
        <Label htmlFor={field.name} className="text-sm font-medium text-foreground">
          {field.label}
          {field.required && <span className="text-destructive ml-1">*</span>}
        </Label>
        {field.type === 'text' && (
          <Input
            id={field.name}
            name={field.name}
            value={extraValues[field.name] ?? ''}
            onChange={(e) => handleExtraChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            required={field.required}
            aria-invalid={hasError}
            className={`${inputStyles} ${hasError ? inputErrorStyles : 'border-border'}`}
          />
        )}
        {field.type === 'select' && (
          <Select
            value={extraValues[field.name] ?? ''}
            onValueChange={(v) => handleExtraChange(field.name, v)}
            required={field.required}
          >
            <SelectTrigger
              id={field.name}
              className={`${inputStyles} ${hasError ? inputErrorStyles : 'border-border'}`}
            >
              <SelectValue placeholder={field.placeholder ?? 'Seçin'} />
            </SelectTrigger>
            <SelectContent>
              {(field.options ?? []).map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        {field.type === 'date' && (
          <Input
            id={field.name}
            name={field.name}
            type="date"
            value={extraValues[field.name] ?? ''}
            onChange={(e) => handleExtraChange(field.name, e.target.value)}
            required={field.required}
            aria-invalid={hasError}
            className={`${inputStyles} ${hasError ? inputErrorStyles : 'border-border'}`}
          />
        )}
        {hasError && (
          <p className="text-xs text-destructive">{errors[field.name]}</p>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Warning Banner */}
      <div className="mb-5 rounded-lg bg-amber-50 border border-amber-200 p-3">
        <div className="flex items-start gap-2.5">
          <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 leading-snug">
            Avantajlı tekliflerimizi görebilmek için{' '}
            <strong className="font-semibold">araç ruhsat bilgilerinizi</strong>{' '}
            yanınızda bulundurunuz.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Mode Toggle */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setMode('bireysel')}
            className={`
              flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm
              transition-all duration-200 cursor-pointer
              ${mode === 'bireysel'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }
            `}
          >
            <User className="h-4 w-4" />
            Bireysel
          </button>
          <button
            type="button"
            onClick={() => setMode('kurumsal')}
            className={`
              flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm
              transition-all duration-200 cursor-pointer
              ${mode === 'kurumsal'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }
            `}
          >
            <Building2 className="h-4 w-4" />
            Kurumsal
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Row 1: Ad Soyad + Telefon */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="adSoyad" className="text-sm font-medium text-foreground">
                Ad Soyad <span className="text-destructive">*</span>
              </Label>
              <Input
                id="adSoyad"
                name="name"
                value={adSoyad}
                onChange={(e) => setAdSoyad(e.target.value)}
                placeholder="Adınız ve soyadınız"
                required
                aria-invalid={!!errors.adSoyad}
                className={`${inputStyles} ${errors.adSoyad ? inputErrorStyles : 'border-border'}`}
              />
              {errors.adSoyad && (
                <p className="text-xs text-destructive">{errors.adSoyad}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="telefon" className="text-sm font-medium text-foreground">
                Cep Telefonu <span className="text-destructive">*</span>
              </Label>
              <Input
                id="telefon"
                name="phone"
                type="tel"
                value={telefon}
                onChange={(e) => setTelefon(e.target.value)}
                placeholder="05XX XXX XX XX"
                required
                aria-invalid={!!errors.telefon}
                className={`${inputStyles} ${errors.telefon ? inputErrorStyles : 'border-border'}`}
              />
              {errors.telefon && (
                <p className="text-xs text-destructive">{errors.telefon}</p>
              )}
            </div>
          </div>

          {/* E-posta - Full Width */}
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              E-posta <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ornek@email.com"
              required
              aria-invalid={!!errors.email}
              className={`${inputStyles} ${errors.email ? inputErrorStyles : 'border-border'}`}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Extra Fields */}
          {extraFields.map(renderExtraField)}

          {/* Message Field */}
          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-sm font-medium text-foreground">
              Notunuz
            </Label>
            <Textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ek bilgi veya sorularınız"
              rows={3}
              className={`
                px-3 py-2.5 rounded-lg border bg-background text-sm resize-none
                transition-all duration-200
                focus:border-primary focus:ring-2 focus:ring-primary/20
                hover:border-muted-foreground/40
                border-border
              `}
            />
          </div>
        </div>

        {/* Info Banner */}
        <div className="flex items-start gap-2.5 p-3 rounded-lg bg-primary/5 border border-primary/10">
          <Info className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-primary leading-snug">
            Kişisel bilgileriniz size özel teklif üretebilmemiz için gerekmektedir.
          </p>
        </div>

        {/* Checkbox Agreements */}
        <div className="space-y-3">
          <label className="flex items-start gap-2.5 p-2 -mx-2 rounded-lg cursor-pointer transition-colors hover:bg-muted/50">
            <Checkbox
              id="kvkk"
              checked={kvkk}
              onCheckedChange={(v) => setKvkk(!!v)}
              aria-invalid={!!errors.kvkk}
              className="mt-0.5 border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <span className="text-sm leading-snug text-foreground">
              <Link 
                href="/kvkk" 
                className="text-primary font-medium hover:underline underline-offset-2"
                onClick={(e) => e.stopPropagation()}
              >
                KVKK Aydınlatma Metnini
              </Link>{' '}
              okudum ve kabul ediyorum.
            </span>
          </label>
          {errors.kvkk && (
            <p className="text-xs text-destructive ml-7">{errors.kvkk}</p>
          )}

          <label className="flex items-start gap-2.5 p-2 -mx-2 rounded-lg cursor-pointer transition-colors hover:bg-muted/50">
            <Checkbox
              id="sozlesme"
              checked={sozlesme}
              onCheckedChange={(v) => setSozlesme(!!v)}
              aria-invalid={!!errors.sozlesme}
              className="mt-0.5 border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <span className="text-sm leading-snug text-foreground">
              <Link 
                href="/kullanici-sozlesmesi" 
                className="text-primary font-medium hover:underline underline-offset-2"
                onClick={(e) => e.stopPropagation()}
              >
                Kullanıcı Sözleşmesini
              </Link>{' '}
              okudum ve kabul ediyorum.
            </span>
          </label>
          {errors.sozlesme && (
            <p className="text-xs text-destructive ml-7">{errors.sozlesme}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="
            w-full h-11 rounded-lg font-semibold text-sm
            bg-primary text-primary-foreground
            hover:bg-primary/90 hover:shadow-md
            active:scale-[0.98]
            transition-all duration-200
          "
        >
          <Send className="h-4 w-4 mr-2" />
          Teklif Al
        </Button>
      </form>
    </div>
  );
}
