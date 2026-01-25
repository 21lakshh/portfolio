'use client'

import Image from 'next/image'
import BannerOverlay from './BannerOverlay'

interface BannerSectionProps {
  quote?: string
  bannerImage?: string
}

export default function BannerSection({ 
  quote = "Everything I'm not makes me everything I am.",
  bannerImage = "/kanyemountain.jpeg"
}: BannerSectionProps) {
  return (
    <div className="w-full mb-2 relative">
      <div className="relative" style={{ height: 'auto' }}>
        <Image 
          alt="Banner" 
          width={1240} 
          height={900} 
          className="rounded-lg w-full h-50 sm:h-[270px] object-cover" 
          src={bannerImage}
          style={{ color: 'transparent', minHeight: '100px' }}
          priority
        />
        <BannerOverlay position="top" />
        <BannerOverlay position="bottom" />
        <BannerOverlay position="left" />
        <BannerOverlay position="right" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-zinc-950 text-xl italic font-[family-name:var(--font-instrument-serif)]">{quote}</p>
        </div>
      </div>
    </div>
  )
}
