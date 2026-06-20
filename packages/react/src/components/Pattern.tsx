import React from 'react'

export interface PatternProps {
  className?: string
}

const SEQ = ['</>', '🐾', '<>', '{}', '</>', '<>', '$_', '🐾']

export const Pattern = ({ className }: PatternProps) => (
  <div className={className}>
    <div className="border border-navy-800 rounded-[14px] overflow-hidden">
      <div className="h-[280px] bg-navy-900 flex flex-wrap content-start overflow-hidden p-[14px]">
        {Array.from({ length: 80 }, (_, i) => (
          <span key={i} className="w-[64px] h-[54px] flex items-center justify-center font-mono text-[15px] text-ivory-50/7">
            {SEQ[i % SEQ.length]}
          </span>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-2 gap-[16px] mt-[20px]">
      <div className="border border-navy-800 rounded-[12px] bg-ivory-50 text-navy-950 p-[22px] flex flex-wrap gap-0 h-[160px] overflow-hidden">
        {Array.from({ length: 24 }, (_, i) => (
          <span key={i} className="w-[54px] h-[44px] flex items-center justify-center font-mono text-[13px] text-navy-950/10">
            {SEQ[i % SEQ.length]}
          </span>
        ))}
      </div>
      <div className="border border-navy-800 rounded-[12px] bg-card p-[22px] flex flex-col justify-center gap-[10px]">
        <div className="font-semibold text-[15px]">Tileable texture</div>
        <p className="m-0 text-[13px] text-muted leading-[1.55]">
          Alternating paw glyphs and code brackets at 7–10% opacity. Use behind hero sections and empty states — never under body text.
        </p>
        <div className="font-mono text-[12px] text-cyan-400 mt-[4px]">opacity: 0.08 · tile 64×54</div>
      </div>
    </div>
  </div>
)
