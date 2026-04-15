import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, Radio, ExternalLink, Clock } from 'lucide-react';

interface Station {
  id: string;
  name: string;
  frequency: string;
  description: string;
  schedule: string;
  website?: string;
  category: 'Local' | 'International' | 'Shortwave';
}

const STATIONS: Station[] = [
  {
    id: '1',
    name: 'Radio Pakistan (FM 101)',
    frequency: '101.0 MHz',
    description: 'National public radio service of Pakistan, offering news, music, and cultural programs.',
    schedule: '24/7 - News every hour, Cultural music in evenings.',
    website: 'http://www.radio.gov.pk/',
    category: 'Local',
  },
  {
    id: '2',
    name: 'BBC World Service',
    frequency: '9.410 MHz (Shortwave)',
    description: 'International news and current affairs from the UK, broadcasting globally.',
    schedule: 'Global News Podcast at 00:00 GMT, Newshour at 13:00 GMT.',
    website: 'https://www.bbc.co.uk/worldserviceradio',
    category: 'International',
  },
  {
    id: '3',
    name: 'Voice of America',
    frequency: '15.580 MHz (Shortwave)',
    description: 'US government-funded international broadcaster providing news and information.',
    schedule: 'Learning English programs at 14:00 GMT.',
    website: 'https://www.voanews.com/',
    category: 'International',
  },
  {
    id: '4',
    name: 'FM 91 Pakistan',
    frequency: '91.0 MHz',
    description: 'Popular music station playing the latest hits and classic Pakistani pop.',
    schedule: 'Morning Show: 07:00 - 10:00, Drive Time: 17:00 - 20:00.',
    website: 'https://fm91.com.pk/',
    category: 'Local',
  },
  {
    id: '5',
    name: 'Radio Kuwait',
    frequency: '15.540 MHz (Shortwave)',
    description: 'State-run radio station of Kuwait, broadcasting in multiple languages.',
    schedule: 'English Service: 18:00 - 21:00 GMT.',
    website: 'https://www.media.gov.kw/',
    category: 'Shortwave',
  },
];

export default function RadioStations() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<string | null>(null);

  const filteredStations = STATIONS.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || 
                         s.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter ? s.category === filter : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search stations..." 
            className="pl-9 bg-muted/50 border-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Badge 
            variant={filter === null ? 'default' : 'outline'} 
            className="cursor-pointer"
            onClick={() => setFilter(null)}
          >
            All
          </Badge>
          {['Local', 'International', 'Shortwave'].map((cat) => (
            <Badge 
              key={cat}
              variant={filter === cat ? 'default' : 'outline'} 
              className="cursor-pointer"
              onClick={() => setFilter(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      <ScrollArea className="h-[400px] pr-4">
        <div className="flex flex-col gap-1">
          {filteredStations.map((station) => (
            <div 
              key={station.id} 
              className="bg-surface p-3 grid grid-cols-[100px_1fr_120px] items-center border border-transparent hover:border-accent transition-colors group cursor-pointer"
            >
              <span className="font-mono text-accent text-sm">{station.frequency}</span>
              <div className="flex flex-col">
                <span className="font-semibold text-sm">{station.name}</span>
                <span className="text-[10px] text-text-dim uppercase tracking-tight">{station.category} • {station.description.substring(0, 40)}...</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-text-dim font-mono">{station.schedule.split(' - ')[0] || '24 Hours'}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
