import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 5.14v13.72c0 .81.9 1.31 1.58.87l10.54-6.86a1.04 1.04 0 0 0 0-1.74L9.58 4.27A1.04 1.04 0 0 0 8 5.14Z" />
    </svg>
  );
}

export function PauseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <path d="M3 6h18M3 12h18M3 18h12" strokeLinecap="square" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <path d="M5 5l14 14M19 5L5 19" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <path d="M4 12h16m0 0-6-6m6 6-6 6" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <path d="M12 4v16m0 0 6-6m-6 6-6-6" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <path d="M9 5l7 7-7 7" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23 12s0-3.85-.49-5.7a3 3 0 0 0-2.1-2.11C18.55 3.7 12 3.7 12 3.7s-6.55 0-8.41.49a3 3 0 0 0-2.1 2.11C1 8.15 1 12 1 12s0 3.85.49 5.7a3 3 0 0 0 2.1 2.11c1.86.49 8.41.49 8.41.49s6.55 0 8.41-.49a3 3 0 0 0 2.1-2.11C23 15.85 23 12 23 12ZM9.7 15.6V8.4L15.5 12l-5.8 3.6Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.03 3h3.02l-6.6 7.55L21.25 21h-6.08l-4.77-6.24L4.98 21H1.95l7.06-8.08L2.7 3h6.24l4.31 5.7L17.03 3Zm-1.07 16.24h1.67L7.9 4.71H6.11l9.85 14.53Z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21.94V14h2.83l.42-3.2h-3.25V8.75c0-.93.3-1.57 1.63-1.57h1.73V4.21c-.3-.04-1.33-.13-2.53-.13-2.5 0-4.22 1.53-4.22 4.33v2.39H7.28V14h2.83v7.94h3.39Z" />
    </svg>
  );
}

export function SoundCloudIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M11.68 8.83a.42.42 0 0 0-.43.42v6.02h.86V9.25a.42.42 0 0 0-.43-.42Zm-3.23 2.55a.35.35 0 0 0-.35.35v3.54h.7V11.7a.36.36 0 0 0-.35-.32Zm-2.9 1.74a.3.3 0 0 0-.31.3v1.88h.6v-1.88a.31.31 0 0 0-.3-.3Zm7.53-5.34c-.5 0-.98.1-1.42.28v7.69c.3.13.62.2.95.2h.47V8.02a2.5 2.5 0 0 0-.17-.16 2.1 2.1 0 0 0-.7-.15Zm4.14 1.1a2.64 2.64 0 0 0-1.16.28 3.61 3.61 0 0 1 .07-.72 3.23 3.23 0 0 0-1.06-2.44 2.9 2.9 0 0 0-2.32-.8 3.23 3.23 0 0 0-2.8 1.7 3.5 3.5 0 0 0-1.5 2.95v3.92c0 1.16.9 2.1 2.01 2.1h7.05a3.28 3.28 0 0 0 2.93-3.28 3.29 3.29 0 0 0-3.22-3.3Z" />
    </svg>
  );
}

export function SpotifyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0Zm5.5 17.3a.76.76 0 0 1-1.05.25c-2.86-1.75-6.46-2.14-10.7-1.17a.76.76 0 0 1-.33-1.48c4.7-1.06 8.7-.6 11.94 1.36a.76.76 0 0 1 .14 1.04Zm1.48-3.27a.95.95 0 0 1-1.32.32c-3.27-2.01-8.26-2.6-12.13-1.42a.95.95 0 1 1-.54-1.82c4.43-1.33 9.96-.67 13.7 1.59.45.28.59.88.29 1.32Zm.13-3.4C15.1 8.1 8.95 7.93 5.2 9.06a1.14 1.14 0 1 1-.66-2.19C8.94 5.6 15.74 5.8 19.72 8.43c.44.27.58.83.31 1.27a.95.95 0 0 1-1.32.3Z" />
    </svg>
  );
}

export function AppleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.36 12.85c.02 2.34 2.06 3.12 2.08 3.13-.02.06-.32 1.1-1.07 2.18-.65.94-1.32 1.87-2.38 1.89-1.04.02-1.37-.61-2.56-.61-1.19 0-1.56.59-2.55.63-1.02.04-1.8-1.02-2.45-1.96C6.37 16.1 5.43 12.08 7.2 9.49a3.91 3.91 0 0 1 3.29-1.98c.99-.02 1.93.68 2.54.68.61 0 1.75-.84 2.95-.72.5.02 1.91.2 2.82 1.53-.07.05-1.68.98-1.66 2.87Zm-1.9-5.75c.54-.66.91-1.57.81-2.47-.79.03-1.74.52-2.3 1.18-.5.58-.95 1.51-.83 2.4.88.07 1.78-.44 2.32-1.11Z" />
    </svg>
  );
}

export function AudiomackIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 17.6a7.6 7.6 0 1 1 0-15.2 7.6 7.6 0 0 1 0 15.2Z" />
      <path d="M9.6 8.6v6.8h-1.3V8.6H7V7.4h4.3v1.2H9.6Zm2.9 6.8h1.3v-4l2.4 4h1.6v-6.8h-1.4v4.1l-2.3-4.1h-1.6v6.8Z" />
    </svg>
  );
}

export function DeezerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="3" y="8" width="3.5" height="3" />
      <rect x="7.7" y="5.5" width="3.5" height="3" />
      <rect x="12.4" y="8" width="3.5" height="3" />
      <rect x="17.1" y="5.5" width="3.5" height="3" />
      <rect x="3" y="13.2" width="3.5" height="3" />
      <rect x="7.7" y="13.2" width="3.5" height="3" />
      <rect x="12.4" y="13.2" width="3.5" height="3" />
      <rect x="17.1" y="13.2" width="3.5" height="3" />
      <rect x="3" y="18.4" width="3.5" height="3" />
      <rect x="7.7" y="18.4" width="3.5" height="3" />
      <rect x="12.4" y="18.4" width="3.5" height="3" />
      <rect x="17.1" y="18.4" width="3.5" height="3" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.6 3c.35 1.53 1.4 2.79 2.85 3.4.5.21 1.05.35 1.55.45V9c-1.55-.05-3.05-.55-4.4-1.4v5.6a5.6 5.6 0 1 1-5.6-5.6c.31 0 .62.03.92.07v2.16a3.44 3.44 0 1 0 2.6 3.35V3h2.08Z" />
    </svg>
  );
}

export function ShoppingBagIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" {...props}>
      <path d="M6 7h12l1 13H5L6 7Z" />
      <path d="M9 10V6a3 3 0 0 1 6 0v4" />
    </svg>
  );
}
