'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mic, Star, MapPin, Search, Filter } from 'lucide-react';
import { mockProducers } from '@/lib/mock-data';
import { useState } from 'react';

export default function ProducersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const allGenres = Array.from(new Set(mockProducers.flatMap(p => p.genres)));

  const filteredProducers = mockProducers.filter(producer => {
    const matchesSearch = producer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      producer.specializations.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesGenre = !selectedGenre || producer.genres.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-purple-blue rounded-lg flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">SoundForge Studio</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Home
              </Link>
              <Link href="/producers" className="text-foreground font-semibold">
                Producers
              </Link>
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Dashboard
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect <span className="text-gradient">Producer</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Browse our curated directory of world-class music producers and engineers
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-6 shadow-glow">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search by name or specialization..."
                    className="pl-12 py-6 bg-background/50 border-border rounded-xl"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white rounded-xl px-6 py-6"
                >
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </Button>
              </div>

              {/* Genre Filter */}
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge
                  variant={selectedGenre === null ? 'default' : 'outline'}
                  className="cursor-pointer px-4 py-2 rounded-full"
                  onClick={() => setSelectedGenre(null)}
                >
                  All Genres
                </Badge>
                {allGenres.map(genre => (
                  <Badge
                    key={genre}
                    variant={selectedGenre === genre ? 'default' : 'outline'}
                    className="cursor-pointer px-4 py-2 rounded-full"
                    onClick={() => setSelectedGenre(genre)}
                  >
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Producers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProducers.length} of {mockProducers.length} producers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducers.map((producer) => (
              <Link
                href={`/producers/${producer.id}`}
                key={producer.id}
                className="group"
              >
                <Card className="glass-card p-6 hover-lift transition-all shadow-glow h-full">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-gradient-purple-blue p-0.5 flex-shrink-0">
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-2xl font-bold text-gradient">
                        {producer.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                        {producer.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-semibold">{producer.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({producer.totalReviews} reviews)
                        </span>
                      </div>
                      {producer.available ? (
                        <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                          Available
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="border-muted text-muted-foreground">
                          Busy
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {producer.bio}
                  </p>

                  {/* Specializations */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {producer.specializations.slice(0, 2).map(spec => (
                        <Badge key={spec} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Genres */}
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Genres:</p>
                    <div className="flex flex-wrap gap-2">
                      {producer.genres.slice(0, 3).map(genre => (
                        <Badge key={genre} variant="outline" className="text-xs">
                          {genre}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">Starting at</p>
                      <p className="text-lg font-bold text-gradient">${producer.pricePerTrack}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Completed</p>
                      <p className="text-lg font-semibold">{producer.completedProjects}</p>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-gradient-purple-blue hover:opacity-90 text-white rounded-xl">
                    View Profile
                  </Button>
                </Card>
              </Link>
            ))}
          </div>

          {filteredProducers.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No producers found matching your criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedGenre(null);
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-purple-blue rounded-lg flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">SoundForge Studio</span>
            </div>

            <div className="text-sm text-muted-foreground">
              © 2025 SoundForge Studio. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
