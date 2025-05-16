type TranslationT = {
  language: {
    code: string
  }
  name: string
  slug: string
  perex: string
  labels: {
    id: number | string
    content: {
      public_from: string
      public_till: string
      translations: {
        language: {
          code: string
        }
      }
    }
  }
  image: {
    filename_download?: string
    folder?: string
    filename_disk?: string
  } | null
}

export type ContentT = {
  id: number | string
  public_from: null
  date_updated: string
  labels?: {
    label: {
      id: string | number
      name: string
    }
  }[]
  translations: TranslationT[]
}

export type ContentDetailT = {
  date_updated: string
  translations: {
    perex: string
    name: string
    image: {
      filename_download: string
    }
  }
}

export type CharacterT = {
  name: string
  id: string | number
  image?: string
}

export type HTMLAttrT = 'li' | 'span' | 'div' | 'section' | 'article'

export enum NavType {
  Primary = 'primary',
  Secondary = 'secondary',
}
