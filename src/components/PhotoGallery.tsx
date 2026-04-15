import { motion } from 'motion/react';

const PHOTOS = [
  {
    url: 'https://images.unsplash.com/photo-1558537348-c0f8e733989d?auto=format&fit=crop&q=80&w=800',
    title: 'Vintage Zenith Trans-Oceanic',
    desc: 'My favorite shortwave receiver from the 1950s.'
  },
  {
    url: 'https://images.unsplash.com/photo-1593078166039-c9878df5c520?auto=format&fit=crop&q=80&w=800',
    title: 'The Workbench',
    desc: 'Where the magic happens. Restoring a 1940s tube radio.'
  },
  {
    url: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800',
    title: 'Antenna Setup',
    desc: 'Long wire antenna for better shortwave reception.'
  },
  {
    url: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800',
    title: 'Tube Collection',
    desc: 'Spare vacuum tubes for various vintage models.'
  }
];

export default function PhotoGallery() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {PHOTOS.map((photo, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="group relative aspect-square bg-surface border border-border overflow-hidden"
        >
          <img 
            src={photo.url} 
            alt={photo.title}
            className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[10px] text-text-dim uppercase tracking-tighter opacity-40 group-hover:opacity-0 transition-opacity">{photo.title.split(' ')[0]}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
