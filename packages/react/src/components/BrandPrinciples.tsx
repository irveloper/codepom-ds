import React from 'react'
import { Mascot } from './Mascot'
import { Icon } from './Icon'

export interface BrandPrinciplesProps {
  className?: string
}

export const BrandPrinciples = ({ className }: BrandPrinciplesProps) => (
  <div className={className}>
    <div className="grid grid-cols-3 gap-[16px]">
      <div className="border border-navy-800 rounded-[14px] bg-card p-[28px]">
        <div className="text-amber-400 mb-[18px]">
          <Icon name="agility" size={38} />
        </div>
        <div className="text-[20px] font-bold mb-[8px]">Agility</div>
        <p className="m-0 text-[14px] text-muted leading-[1.55]">Ship fast and iterate. Lightweight process, sharp execution, quick to adapt.</p>
      </div>
      <div className="border border-navy-800 rounded-[14px] bg-card p-[28px]">
        <div className="text-amber-400 mb-[18px]">
          <Icon name="partner" size={38} />
        </div>
        <div className="text-[20px] font-bold mb-[8px]">Partnership</div>
        <p className="m-0 text-[14px] text-muted leading-[1.55]">Fiercely loyal. We work as an extension of your team, not a vendor at arm&apos;s length.</p>
      </div>
      <div className="border border-navy-800 rounded-[14px] bg-card p-[28px]">
        <div className="text-amber-400 mb-[18px]">
          <Icon name="integrity" size={38} />
        </div>
        <div className="text-[20px] font-bold mb-[8px]">Integrity</div>
        <p className="m-0 text-[14px] text-muted leading-[1.55]">Honest estimates, clean code, no shortcuts. We do what we say we&apos;ll do.</p>
      </div>
    </div>

    <div className="mt-[16px] border border-navy-800 rounded-[14px] bg-[linear-gradient(120deg,#08192E,#0f2747)] p-[30px] flex items-center gap-[24px]">
      <div className="w-[80px] h-[80px] flex-none">
        <Mascot size={80} variant="full" />
      </div>
      <div className="text-[22px] font-bold tracking-tight">
        Pioneering agile web engineering<br />
        &amp; fiercely loyal tech partners.
      </div>
    </div>
  </div>
)
