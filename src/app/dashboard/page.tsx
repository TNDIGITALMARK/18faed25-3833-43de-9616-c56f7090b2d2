'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Mic, Music, Clock, MessageSquare, Users, Plus, TrendingUp } from 'lucide-react';
import { mockProjects, mockMessages, mockArtistProfile } from '@/lib/mock-data';
import { StaticWaveform } from '@/components/ui/waveform';

export default function DashboardPage() {
  const statusColors = {
    pending: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30',
    recording: 'bg-blue-500/20 text-blue-500 border-blue-500/30',
    mixing: 'bg-purple-500/20 text-purple-500 border-purple-500/30',
    mastering: 'bg-pink-500/20 text-pink-500 border-pink-500/30',
    completed: 'bg-green-500/20 text-green-500 border-green-500/30'
  };

  const statusProgress = {
    pending: 0,
    recording: 25,
    mixing: 50,
    mastering: 75,
    completed: 100
  };

  const recentMessages = mockMessages.slice(0, 3);

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
              <Link href="/producers" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Producers
              </Link>
              <Link href="/dashboard" className="text-foreground font-semibold">
                Dashboard
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-purple-blue p-0.5">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-sm font-bold">
                  {mockArtistProfile.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Welcome back, <span className="text-gradient">{mockArtistProfile.name}</span>
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your music projects
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card p-6 shadow-glow">
              <div className="flex items-center justify-between mb-2">
                <Music className="w-8 h-8 text-primary" />
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-3xl font-bold mb-1">{mockArtistProfile.activeProjects}</p>
              <p className="text-sm text-muted-foreground">Active Projects</p>
            </Card>

            <Card className="glass-card p-6 shadow-glow">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-3xl font-bold mb-1">{mockArtistProfile.completedProjects}</p>
              <p className="text-sm text-muted-foreground">Completed Projects</p>
            </Card>

            <Card className="glass-card p-6 shadow-glow">
              <div className="flex items-center justify-between mb-2">
                <MessageSquare className="w-8 h-8 text-primary" />
                <Badge className="bg-red-500/20 text-red-500 border-red-500/30">
                  {recentMessages.filter(m => !m.read).length}
                </Badge>
              </div>
              <p className="text-3xl font-bold mb-1">{recentMessages.length}</p>
              <p className="text-sm text-muted-foreground">New Messages</p>
            </Card>

            <Card className="glass-card p-6 shadow-glow">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-3xl font-bold mb-1">6</p>
              <p className="text-sm text-muted-foreground">Collaborators</p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Active Projects */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Active Projects</h2>
                <Button className="bg-gradient-purple-blue hover:opacity-90 text-white rounded-xl">
                  <Plus className="w-4 h-4 mr-2" />
                  New Project
                </Button>
              </div>

              <div className="space-y-4">
                {mockProjects.map((project) => (
                  <Card key={project.id} className="glass-card p-6 hover-lift transition-all shadow-glow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{project.songTitle}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          with {project.producerName}
                        </p>

                        <Badge className={statusColors[project.status]}>
                          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                        </Badge>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-muted-foreground mb-1">Budget</p>
                        <p className="text-lg font-bold text-gradient">${project.budget}</p>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-muted-foreground">Progress</p>
                        <p className="text-sm font-semibold">{statusProgress[project.status]}%</p>
                      </div>
                      <Progress value={statusProgress[project.status]} className="h-2" />
                    </div>

                    {/* Deadline */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>Due: {new Date(project.deadline).toLocaleDateString()}</span>
                      </div>

                      <Button variant="outline" size="sm" className="rounded-lg">
                        View Details
                      </Button>
                    </div>

                    {/* Waveform decoration */}
                    <div className="mt-4 opacity-30">
                      <StaticWaveform color="gradient" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Messages */}
              <Card className="glass-card p-6 shadow-glow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Recent Messages</h3>
                  <Link href="/messages" className="text-sm text-primary hover:underline">
                    View All
                  </Link>
                </div>

                <div className="space-y-4">
                  {recentMessages.map((message) => (
                    <div key={message.id} className="pb-4 border-b border-border last:border-0">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-purple-blue p-0.5 flex-shrink-0">
                          <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-xs font-bold">
                            {message.senderName.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold text-sm">{message.senderName}</p>
                            {!message.read && (
                              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-1">
                            {message.message}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(message.timestamp).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="glass-card p-6 shadow-glow">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start rounded-xl">
                    <Users className="w-4 h-4 mr-3" />
                    Browse Producers
                  </Button>

                  <Button variant="outline" className="w-full justify-start rounded-xl">
                    <Plus className="w-4 h-4 mr-3" />
                    Start New Project
                  </Button>

                  <Button variant="outline" className="w-full justify-start rounded-xl">
                    <MessageSquare className="w-4 h-4 mr-3" />
                    Send Message
                  </Button>
                </div>
              </Card>

              {/* Profile Summary */}
              <Card className="glass-card p-6 shadow-glow">
                <h3 className="text-lg font-semibold mb-4">Your Profile</h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Budget Range</span>
                    <span className="text-sm font-semibold">
                      ${mockArtistProfile.budgetRangeMin} - ${mockArtistProfile.budgetRangeMax}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Preferred Genres</span>
                    <div className="flex gap-1">
                      {mockArtistProfile.genrePreferences.slice(0, 2).map(genre => (
                        <Badge key={genre} variant="secondary" className="text-xs">
                          {genre}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-4 rounded-xl">
                    Edit Profile
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

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

            <div className="text-sm text-muted-foreground">
              © 2025 SoundForge Studio. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
