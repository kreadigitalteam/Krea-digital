import { Monitor, Share2, CalendarDays, Star, Users, Clock, Target, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const serviceIcons: Record<string, LucideIcon> = {
  web: Monitor,
  social: Share2,
  events: CalendarDays,
}

export const whyIcons: Record<string, LucideIcon> = {
  star: Star,
  users: Users,
  clock: Clock,
  target: Target,
  chart: TrendingUp,
}
