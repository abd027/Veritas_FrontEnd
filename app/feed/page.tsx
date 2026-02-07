'use client';

import { Sidebar } from "@/components/ui/sidebar"
import { Navbar } from '@/components/navbar';
import { RumorCard } from '@/components/rumor-card';
import { LeftSidebar } from '@/components/left-sidebar';
import { RightSidebar } from '@/components/right-sidebar';
import { useState } from 'react';
import FilterPanel from '@/components/filter-panel'; // Import FilterPanel
import Footer from '@/components/footer'; // Import Footer

export default function FeedPage() {
  const [rumors] = useState([
    {
      id: '1',
      content: 'Technology company announces breakthrough in quantum computing research',
      trustScore: 0.78,
      timestamp: '2 hours ago',
      proofCount: 12,
    },
    {
      id: '2',
      content: 'New climate initiative commits to net-zero emissions by 2035',
      trustScore: 0.65,
      timestamp: '4 hours ago',
      proofCount: 8,
    },
    {
      id: '3',
      content: 'Healthcare reform bill passes initial committee review',
      trustScore: 0.42,
      timestamp: '6 hours ago',
      proofCount: 5,
    },
    {
      id: '4',
      content: 'International trade agreement reaches preliminary consensus',
      trustScore: 0.85,
      timestamp: '8 hours ago',
      proofCount: 15,
    },
    {
      id: '5',
      content: 'Space agency plans unprecedented lunar research mission',
      trustScore: 0.72,
      timestamp: '10 hours ago',
      proofCount: 9,
    },
  ]);

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      <div className="flex pt-16 max-w-6xl mx-auto gap-6">
        {/* Left Sidebar - Navigation */}
        <LeftSidebar />

        {/* Center Column - Feed */}
        <div className="flex-1 border-l border-r border-neutral-200 dark:border-neutral-800 max-w-2xl">
          {/* Rumors List */}
          <div>
            {rumors.map((rumor) => (
              <RumorCard key={rumor.id} {...rumor} />
            ))}
          </div>
        </div>

        {/* Right Sidebar - Filters */}
        <RightSidebar />
      </div>
    </main>
  );
}
