'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { FALLBACK_PRODUCT_IMAGE } from '@/lib/data/products';

type ProductImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

export function ProductImage({
  src,
  alt,
  className,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: ProductImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes={sizes}
        className={cn('object-cover', className)}
        onError={() => setImgSrc(FALLBACK_PRODUCT_IMAGE)}
      />
    </div>
  );
}
