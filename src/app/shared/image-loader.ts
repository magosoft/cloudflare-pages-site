import { ImageLoaderConfig } from '@angular/common';

/**
 * Las fotos de Unsplash se referencian por su id ("photo-…") y se piden al ancho
 * que NgOptimizedImage necesite para cada srcset. El resto son archivos de /public.
 */
export function clubImageLoader({ src, width }: ImageLoaderConfig): string {
  if (src.startsWith('photo-')) {
    return `https://images.unsplash.com/${src}?w=${width ?? 1600}&q=80&auto=format&fit=crop`;
  }
  return `/${src}`;
}
