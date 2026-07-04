import type { NavigationItem } from '~~/types/site'

export const primaryNavigation: NavigationItem[] = [
  { label: 'The WELL', to: '/well' },
  { label: 'Contributors', to: '/contributors' },
  { label: 'Researchers', to: '/researchers' },
  { label: 'Shop', to: '/shop' },
]

export const footerNavigation: NavigationItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Request Access', to: '/request-access' },
  ...primaryNavigation,
]
