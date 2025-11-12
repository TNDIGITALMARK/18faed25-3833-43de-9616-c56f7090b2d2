import Link from 'next/link';
import { Waveform, StaticWaveform } from '@/components/ui/waveform';
import { Button } from '@/components/ui/button';
import { Mic, Speaker, Target } from 'lucide-react';
import { mockProducers } from '@/lib/mock-data';

export default function HomePage() {
  const featuredProducers = mockProducers.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-purple-blue rounded-lg flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">SoundForge Studio</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="#artists" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                For New Artists
              </Link>
              <Link href="#established" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Established Artists
              </Link>
              <Link href="/producers" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Studio Sessions
              </Link>
              <Link href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Portfolio
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 gradient-hero opacity-90" />

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Waveform animation */}
            <div className="mb-8">
              <Waveform animated color="gradient" className="opacity-80" />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-gradient">Elevate Your Sound</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Connect with world-class producers and engineers to bring your musical vision to life
            </p>

            <Button
              size="lg"
              className="bg-gradient-purple-blue hover:opacity-90 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-glow transition-all hover:scale-105"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Artists</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredProducers.map((producer) => (
              <Link
                href={`/producers/${producer.id}`}
                key={producer.id}
                className="group"
              >
                <div className="glass-card rounded-2xl p-8 text-center hover-lift transition-all shadow-glow">
                  {/* Avatar placeholder with gradient border */}
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-purple-blue p-1">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-bold text-gradient">
                      {producer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{producer.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {producer.specializations[0]}
                  </p>

                  {/* Waveform preview */}
                  <div className="mt-6 opacity-60 group-hover:opacity-100 transition-opacity">
                    <StaticWaveform color="gradient" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Recording & Tracking */}
            <div className="glass-card rounded-2xl p-10 hover-lift transition-all shadow-glow-blue group">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mic className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Recording & Tracking</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Professional studio recording with state-of-the-art equipment and experienced engineers
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full">
                Learn More
              </Button>
            </div>

            {/* Mixing & Mastering */}
            <div className="glass-card rounded-2xl p-10 hover-lift transition-all shadow-glow group">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Speaker className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Mixing & Mastering</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Give your tracks radio-ready quality with expert mixing and mastering services
              </p>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full">
                Explore
              </Button>
            </div>

            {/* Production & Arrangement */}
            <div className="glass-card rounded-2xl p-10 hover-lift transition-all shadow-glow-blue group">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Production & Arrangement</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transform your ideas into polished productions with creative arrangement and production
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Create Your Masterpiece?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of artists who have elevated their sound with SoundForge Studio
            </p>
            <Button
              size="lg"
              className="bg-gradient-purple-blue hover:opacity-90 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-glow"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-purple-blue rounded-lg flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">SoundForge Studio</span>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <Link href="#about" className="hover:text-foreground transition-colors">About Us</Link>
              <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
              <Link href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center">
                  <span className="text-xs">𝕏</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center">
                  <span className="text-xs">IG</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
