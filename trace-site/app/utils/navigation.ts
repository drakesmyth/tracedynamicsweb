import type { NavigationItem } from '~~/types/site'

export const primaryNavigation: NavigationItem[] = [
  { label: 'The WELL', to: '/well' },
  { label: 'Contributors', to: '/contributors' },
  { label: 'Researchers', to: '/researchers' },
  { label: 'Shop', to: '/shop' },
  { label: 'Request access', to: '/request-access' },
]

export const footerNavigation: NavigationItem[] = [
  { label: 'Home', to: '/' },
  ...primaryNavigation,
  { label: 'FAQ', to: '/faq' },
  { label: 'Team', to: '/team' },
]
