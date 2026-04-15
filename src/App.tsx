import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Radio, 
  Mail, 
  Phone, 
  Wrench, 
  ShoppingBag, 
  MessageSquare, 
  User,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Clock from './components/Clock';
import RadioStations from './components/RadioStations';
import PhotoGallery from './components/PhotoGallery';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text-main font-sans flex flex-col">
      {/* Header Section */}
      <header className="h-20 px-6 border-b border-border flex justify-between items-center bg-surface">
        <div className="brand">
          <h1 className="text-2xl font-bold tracking-tight text-accent uppercase">EJAZKAREEM</h1>
          <p className="text-xs text-text-dim">Vintage Wireless Collector & Radio Historian</p>
        </div>
        <Clock />
      </header>

      {/* Main Grid Layout */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] gap-px bg-border overflow-hidden">
        {/* Left Pane: Profile & Hobbies */}
        <section className="bg-background p-5 flex flex-col gap-4 overflow-y-auto">
          <div className="section-title">Personal Profile</div>
          <div className="high-density-card">
            <p className="text-sm leading-relaxed mb-3">
              Welcome to my digital workshop. I have been collecting and restoring vintage valve radios for over 20 years. My passion lies in shortwave frequencies and the golden age of broadcasting.
            </p>
            <div className="text-xs space-y-1">
              <div className="text-accent">Email: Radiolover@yahoo.com</div>
              <div className="text-text-dim">PH: +92 300 4100000</div>
            </div>
          </div>

          <div className="section-title">Hobbies</div>
          <ul className="text-[13px] space-y-0.5">
            {[
              "Valve Restoration",
              "Shortwave Listening (DXing)",
              "Antique Electronics Photography",
              "Audio Circuit Design",
              "DX Expedition Planning"
            ].map((hobby, i) => (
              <li key={i} className="py-2 border-b border-border flex items-center gap-2 text-text-main/80">
                <span className="text-accent">•</span> {hobby}
              </li>
            ))}
          </ul>
        </section>

        {/* Center Pane: Stations & Schedules */}
        <section className="bg-background p-5 flex flex-col gap-4 overflow-y-auto">
          <div className="section-title">Favorite Stations & Schedules</div>
          <RadioStations />
        </section>

        {/* Right Pane: Gallery & Shop */}
        <section className="bg-background p-5 flex flex-col gap-4 overflow-y-auto">
          <div className="section-title">Radio Setup Gallery</div>
          <PhotoGallery />

          <div className="section-title mt-4">Collectors Marketplace</div>
          <p className="text-[11px] text-text-dim leading-tight">
            Trusted sources for purchasing verified vintage equipment and spare valves.
          </p>
          <div className="space-y-2">
            <a href="#" className="block bg-accent text-background text-center py-3 no-underline font-bold text-xs uppercase hover:opacity-90 transition-opacity">
              Buy Vintage Radios Online
            </a>
            <a href="#" className="block bg-surface text-text-main text-center py-3 no-underline font-bold text-xs uppercase border border-accent hover:bg-accent/10 transition-colors">
              Spare Parts Store
            </a>
          </div>
        </section>
      </main>

      {/* Bottom Area: Guestbook */}
      <div className="bg-surface p-5 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="section-title">Visitor Guestbook</div>
          <div className="flex gap-3 mb-4">
            <input 
              type="text" 
              placeholder="Leave a note for Ejaz..." 
              className="flex-1 bg-background border border-border text-white px-3 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <button className="bg-border text-white px-6 text-sm font-bold hover:bg-accent hover:text-background transition-colors">
              Submit Comment
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Ahmed Khan", time: "2 hours ago", text: "Your Grundig collection is magnificent! Glad to see another enthusiast in Pakistan." },
              { name: "Sarah M.", time: "Yesterday", text: "Beautiful website. Do you offer restoration services for 1950s Philips models?" }
            ].map((entry, i) => (
              <div key={i} className="text-xs py-2 border-b border-border last:border-0">
                <div className="text-[10px] text-accent mb-1 uppercase tracking-tighter">{entry.name} • {entry.time}</div>
                <div className="text-text-main/90">{entry.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
