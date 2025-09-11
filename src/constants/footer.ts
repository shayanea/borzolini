export type FooterLink = {
  href: string;
  label: string;
  ariaLabel?: string;
};

export const footerLinks: ReadonlyArray<FooterLink> = [
  { href: '/why-now', label: 'Why now', ariaLabel: 'Learn why now' },
  { href: '/user-stories', label: 'User stories', ariaLabel: 'Read user stories' },
  { href: '/telemedicine', label: 'Telemedicine', ariaLabel: 'Explore telemedicine' },
] as const;
