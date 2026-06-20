import React from 'react'
import { Mascot } from './Mascot'

export interface BusinessCardProps {
  name?: string
  title?: string
  email?: string
  phone?: string
  website?: string
  className?: string
}

export const BusinessCard = ({
  name = 'Maya Chen',
  title = 'Lead Engineer',
  email = 'maya@codepom.com',
  phone = '+1 422 3456 3859',
  website = 'codepom.com',
  className,
}: BusinessCardProps) => (
  <div className={`flex gap-[24px] flex-wrap ${className ?? ''}`}>
    <div className="w-[420px] h-[248px] rounded-[14px] bg-[#08192E] border border-navy-800 p-[26px] flex flex-col justify-between relative overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.4)]">
      <div className="absolute -right-[30px] -top-[30px] w-[150px] h-[150px] opacity-[0.12]">
        <Mascot size={150} variant="solid" />
      </div>
      <div className="flex items-center gap-[12px] z-[1]">
        <Mascot size={46} variant="full" />
        <div>
          <div className="font-bold text-[20px] tracking-tight">CODEPOM</div>
          <div className="font-mono text-[9px] text-cyan-400 tracking-wider">AGILE WEB ENGINEERING</div>
        </div>
      </div>
      <div className="z-[1]">
        <div className="font-semibold text-[17px]">{name}</div>
        <div className="text-[13px] text-muted mb-[12px]">{title}</div>
        <div className="flex flex-col gap-[4px] font-mono text-[11px] text-muted">
          <span className="text-amber-400">{email}</span>
          <span>{phone}</span>
          <span>{website}</span>
        </div>
      </div>
    </div>
    <div className="w-[420px] h-[248px] rounded-[14px] bg-ivory-50 border border-[#e9e6d6] flex flex-col items-center justify-center gap-[14px] shadow-[0_18px_50px_rgba(0,0,0,0.4)]">
      <Mascot size={72} variant="full" />
      <div className="font-bold text-[26px] tracking-tight text-navy-950">CODEPOM</div>
      <div className="font-mono text-[10px] text-[#3A506B] tracking-wider text-center">
        PIONEERING AGILE WEB ENGINEERING<br />
        &amp; FIERCELY LOYAL TECH PARTNERS
      </div>
    </div>
  </div>
)
