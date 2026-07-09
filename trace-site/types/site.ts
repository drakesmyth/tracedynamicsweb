export interface NavigationItem {
  label: string
  to: string
}

export interface ShopifyProduct {
  id: string
  handle: string
  title: string
  description: string
  image?: {
    altText?: string | null
    url: string
  }
  price?: {
    amount: string
    currencyCode: string
  }
}

export interface CheckoutLine {
  merchandiseId: string
  quantity: number
}

export interface CheckoutRequest {
  lines: CheckoutLine[]
}

export type RequestAccessPath =
  | 'hardware'
  | 'researcher'
  | 'contributor'
  | 'media'
  | 'industry'

export interface RequestAccessRequest {
  name: string
  email: string
  path: RequestAccessPath
  organization?: string
  focus: string
  website?: string
  startedAt?: string
}

export interface RequestAccessRecord {
  id: string
  name: string
  email: string
  path: RequestAccessPath
  organization: string
  focus: string
  receivedAt: string
  userAgent: string
}

export interface RequestAccessResponse {
  ok: true
  requestId: string
  message: string
}

export interface RequestAccessListResponse {
  ok: true
  count: number
  records: RequestAccessRecord[]
}
