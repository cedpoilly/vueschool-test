export type Hero = {
  title: {
    pre: string
    em: string
    post: string
  }
  description: string
  ctaLabel: string
}

export type Stats = {
  lessonsCount: number
  coursesCount: number
  totalDuration: number
}

export type PriceCardItem = {
  reference: string
  position: number
  title: string
  features: string[]
}
