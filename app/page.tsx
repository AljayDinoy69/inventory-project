'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleHelp,
  Menu,
  Package,
  Search,
  Settings2,
  ShoppingCart,
  Sparkles,
  Truck,
  X,
} from 'lucide-react'

const navItems = ['Platform', 'Solutions', 'Resources', 'Pricing']

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Inventory Base home">
      <span className="grid size-8 place-items-center bg-[#e7b75c] text-[#171713]">
        <Package size={17} strokeWidth={2.2} />
      </span>
      <span className="font-mono text-[13px] font-bold uppercase tracking-[0.16em] text-[#f3f0e8]">Inventory Base</span>
    </a>
  )
}

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[720px] rotate-[-1deg] border border-[#403c32] bg-[#201f1a] p-2 shadow-2xl shadow-black/30 sm:p-3">
      <div className="border border-[#37352d] bg-[#181814]">
        <div className="flex items-center justify-between border-b border-[#37352d] px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2"><Package size={15} className="text-[#e7b75c]" /><span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#f3f0e8]">Operations overview</span></div>
          <span className="font-mono text-[9px] text-[#817d70]">Today · 09:42 AM</span>
        </div>
        <div className="grid grid-cols-2 gap-px bg-[#37352d] sm:grid-cols-4">
          {[['On hand', '24,892', '+8.4%'], ['Low stock', '18', 'Needs attention'], ['In transit', '1,204', '+12.1%'], ['Inventory value', '$842k', '+6.7%']].map(([label, value, note]) => (
            <div key={label} className="bg-[#201f1a] p-4 sm:p-5"><p className="font-mono text-[9px] uppercase tracking-[0.13em] text-[#817d70]">{label}</p><p className="mt-2 font-serif text-2xl text-[#f3f0e8] sm:text-3xl">{value}</p><p className="mt-1 font-mono text-[9px] text-[#9bc678]">{note}</p></div>
          ))}
        </div>
        <div className="grid gap-px bg-[#37352d] md:grid-cols-[1.35fr_1fr]">
          <div className="bg-[#201f1a] p-4 sm:p-5"><div className="mb-5 flex items-center justify-between"><div><p className="font-serif text-base text-[#f3f0e8]">Stock movement</p><p className="mt-1 text-xs text-[#817d70]">Units across all locations</p></div><BarChart3 size={16} className="text-[#e7b75c]" /></div><div className="flex h-36 items-end gap-2 border-b border-[#37352d] px-1 sm:gap-3"><div className="h-[38%] flex-1 bg-[#5b573e]" /><div className="h-[52%] flex-1 bg-[#80734b]" /><div className="h-[44%] flex-1 bg-[#625d40]" /><div className="h-[69%] flex-1 bg-[#b09352]" /><div className="h-[61%] flex-1 bg-[#8a7848]" /><div className="h-[83%] flex-1 bg-[#e7b75c]" /><div className="h-[72%] flex-1 bg-[#b09352]" /><div className="h-[92%] flex-1 bg-[#e7b75c]" /><div className="h-[79%] flex-1 bg-[#c39d4f]" /></div><div className="mt-3 flex justify-between font-mono text-[8px] text-[#817d70]"><span>MON</span><span>WED</span><span>FRI</span><span>SUN</span></div></div>
          <div className="bg-[#201f1a] p-4 sm:p-5"><div className="mb-5 flex items-center justify-between"><div><p className="font-serif text-base text-[#f3f0e8]">Needs attention</p><p className="mt-1 text-xs text-[#817d70]">3 items require action</p></div><span className="grid size-6 place-items-center rounded-full bg-[#6f483b] font-mono text-[10px] text-[#f3f0e8]">3</span></div><div className="space-y-3">{[['Canvas Tote / Natural', '12 units left'], ['Studio Lamp / Brass', '8 units left'], ['Daily Planner / Slate', 'Reorder now']].map(([name, status], i) => <div key={name} className="flex items-center justify-between border-b border-[#37352d] pb-3"><div className="flex items-center gap-2.5"><span className={`size-1.5 rounded-full ${i === 2 ? 'bg-[#d4775c]' : 'bg-[#e7b75c]'}`} /><span className="text-xs text-[#d6d1c4]">{name}</span></div><span className="font-mono text-[9px] text-[#817d70]">{status}</span></div>)}</div></div>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-5 -right-4 hidden border border-[#504a39] bg-[#29271f] px-3 py-2 sm:block"><p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#e7b75c]">Live sync · 12 stores</p></div>
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#171713] text-[#f3f0e8]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10"><Logo /><nav className="hidden items-center gap-8 md:flex">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#aaa497] transition-colors hover:text-[#e7b75c]">{item}{item !== 'Pricing' && <ChevronDown size={12} />}</a>)}</nav><div className="hidden items-center gap-5 md:flex"><a href="#login" className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#aaa497] hover:text-[#f3f0e8]">Sign in</a><a href="#start" className="bg-[#e7b75c] px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#171713] transition-colors hover:bg-[#f3d18a]">Start free <ArrowRight className="ml-2 inline" size={13} /></a></div><button className="md:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></header>
      {menuOpen && <div className="border-y border-[#37352d] px-6 py-5 md:hidden"><div className="flex flex-col gap-5 font-mono text-[11px] uppercase tracking-[0.14em]">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}<a href="#start" className="w-fit bg-[#e7b75c] px-4 py-3 text-[#171713]">Start free</a></div></div>}
      <section className="relative mx-auto max-w-7xl border-x border-[#2b2a23] px-6 pb-20 pt-20 lg:px-10 lg:pb-28 lg:pt-32"><div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,#2b2a23_1px,transparent_1px),linear-gradient(to_bottom,#2b2a23_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" /><div className="relative max-w-4xl"><p className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#e7b75c]"><span className="h-px w-8 bg-[#e7b75c]" />Inventory, in focus</p><h1 className="max-w-4xl font-serif text-5xl leading-[0.96] tracking-[-0.04em] text-balance sm:text-7xl lg:text-[92px]">Know what&apos;s moving.<br /><span className="text-[#e7b75c]">Move with confidence.</span></h1><div className="mt-9 flex max-w-xl flex-col gap-7 sm:flex-row sm:items-end"><p className="text-base leading-7 text-[#aaa497]">Inventory Base brings every product, location, and decision into one clear operational view.</p><a href="#start" className="shrink-0 border border-[#e7b75c] px-5 py-3.5 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-[#e7b75c] transition-colors hover:bg-[#e7b75c] hover:text-[#171713]">See Inventory Base <ArrowRight className="ml-2 inline" size={14} /></a></div></div><div className="relative mt-20 lg:mt-28"><DashboardPreview /></div></section>
      <section className="border-y border-[#37352d] bg-[#201f1a] px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#817d70]">Built for teams who keep things moving</p><div className="flex flex-wrap gap-x-7 gap-y-3 font-serif text-lg text-[#aaa497]"><span>made well</span><span>northstar</span><span>FIELD / CO.</span><span>common goods</span><span>VERA</span></div></div></section>
      <section id="platform" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36"><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e7b75c]">The platform</p><h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">The whole picture,<br />without the noise.</h2><p className="mt-6 max-w-sm text-sm leading-7 text-[#aaa497]">A calm, connected home for the details that keep your business healthy. From first receipt to final shipment.</p></div><div className="grid gap-px bg-[#37352d] sm:grid-cols-2">{[[Package, 'One source of truth', 'See every SKU, variant, and location in one living catalog.'], [BarChart3, 'Decisions, not data', 'Turn your inventory signals into your next best action.'], [Truck, 'Flow that follows you', 'Track purchase orders and transfers from dock to doorstep.'], [Settings2, 'Built for your rhythm', 'Shape workflows around how your team actually works.']].map(([Icon, title, text]) => <div key={title as string} className="bg-[#171713] p-7 sm:p-8"><Icon size={22} className="text-[#e7b75c]" /><h3 className="mt-10 font-serif text-xl">{title as string}</h3><p className="mt-3 text-sm leading-6 text-[#aaa497]">{text as string}</p><a href="#start" className="mt-7 inline-flex items-center font-mono text-[9px] uppercase tracking-[0.15em] text-[#e7b75c]">Explore <ArrowRight size={13} className="ml-2" /></a></div>)}</div></div></section>
      <section id="solutions" className="border-y border-[#37352d] bg-[#e7b75c] px-6 py-24 text-[#171713] lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-end"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em]">From scattered to sorted</p><h2 className="mt-6 max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] sm:text-7xl">Your next move is already in the data.</h2></div><div><p className="max-w-md text-base leading-7 text-[#51472e]">Inventory Base quietly connects the dots so you can spend less time finding answers and more time acting on them.</p><a href="#start" className="mt-8 inline-flex items-center border-b border-[#171713] pb-2 font-mono text-[10px] uppercase tracking-[0.15em]">See how it works <ArrowRight size={14} className="ml-3" /></a></div></div></section>
      <section id="resources" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36"><div className="flex flex-col justify-between gap-6 border-b border-[#37352d] pb-8 sm:flex-row sm:items-end"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e7b75c]">A clearer way forward</p><h2 className="mt-5 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">Less guesswork.<br />More good work.</h2></div><p className="max-w-xs text-sm leading-6 text-[#aaa497]">The tools you need to protect margin, delight customers, and grow with intention.</p></div><div className="grid divide-y divide-[#37352d] md:grid-cols-3 md:divide-x md:divide-y-0">{[['01', 'See what matters', 'Filter the signal from the noise with views made for the decisions you make every day.'], ['02', 'Stay ahead of demand', 'Forecast with confidence and keep your best products where customers can find them.'], ['03', 'Make every handoff count', 'Keep teams and partners moving from the same source of truth.']].map(([number, title, text]) => <div key={number} className="py-8 md:px-8 md:py-10 first:md:pl-0 last:md:pr-0"><span className="font-mono text-[10px] text-[#e7b75c]">{number}</span><h3 className="mt-12 font-serif text-2xl">{title}</h3><p className="mt-4 text-sm leading-6 text-[#aaa497]">{text}</p></div>)}</div></section>
      <section id="start" className="border-t border-[#37352d] px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 sm:flex-row sm:items-end"><div><Sparkles size={21} className="text-[#e7b75c]" /><h2 className="mt-7 max-w-2xl font-serif text-5xl leading-none tracking-[-0.04em] sm:text-7xl">Make room for<br /><span className="text-[#e7b75c]">what&apos;s next.</span></h2></div><div className="max-w-xs"><p className="text-sm leading-6 text-[#aaa497]">Start with a clearer view of your inventory. No credit card. No complicated setup.</p><a href="mailto:hello@inventorybase.co" className="mt-7 inline-flex bg-[#e7b75c] px-5 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.13em] text-[#171713] hover:bg-[#f3d18a]">Get started <ArrowRight size={14} className="ml-3" /></a></div></div></section>
      <footer className="border-t border-[#37352d] px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center"><Logo /><div className="flex flex-wrap gap-5 font-mono text-[9px] uppercase tracking-[0.15em] text-[#817d70]"><a href="#platform">Platform</a><a href="#solutions">Solutions</a><a href="#resources">Resources</a><a href="mailto:hello@inventorybase.co">Contact</a></div><p className="font-mono text-[9px] text-[#817d70]">© 2026 Inventory Base</p></div></footer>
    </main>
  )
}
