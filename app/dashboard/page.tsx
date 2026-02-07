'use client';

import Link from 'next/link';
import { BarChart3, TrendingUp, Target, MessageSquare } from 'lucide-react';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Navigation Bar */}
      <nav className="border-b border-neutral-200 dark:border-neutral-800 sticky top-0 bg-white dark:bg-black/95 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-bold text-xl text-black dark:text-white">
              Veritas
            </Link>
            <div className="hidden sm:flex gap-6">
              <Link href="/feed" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-all duration-150 text-sm">
                Feed
              </Link>
              <Link href="/dashboard" className="text-black dark:text-white text-sm font-medium border-b-2 border-black dark:border-white">
                Dashboard
              </Link>
            </div>
          </div>
          <button className="px-4 py-2 border-2 border-neutral-200 dark:border-neutral-800 rounded-full text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-150 text-black dark:text-white">
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Profile Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-neutral-200 dark:bg-neutral-800" />
            <div>
              <h1 className="text-3xl font-bold text-black dark:text-white">Anonymous Member</h1>
              <p className="text-black/60 dark:text-white/60 text-sm">Account created 45 days ago</p>
            </div>
          </div>
          <p className="text-black/70 dark:text-white/70 max-w-2xl">Your anonymous identity is securely verified. All your activities are tracked for reputation scoring and accountability.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <p className="text-black/60 dark:text-white/60 text-sm">Reputation Score</p>
            <p className="text-3xl font-bold text-black dark:text-white">78%</p>
            <div className="w-full bg-neutral-200 dark:bg-neutral-800 rounded-full h-2">
              <div className="bg-black dark:bg-white rounded-full h-2" style={{ width: '78%' }} />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-black/60 dark:text-white/60 text-sm">Total Votes</p>
            <p className="text-3xl font-bold text-black dark:text-white">157</p>
            <p className="text-xs text-black/60 dark:text-white/60">across 89 rumors</p>
          </div>
          <div className="space-y-2">
            <p className="text-black/60 dark:text-white/60 text-sm">Accuracy</p>
            <p className="text-3xl font-bold text-black dark:text-white">84%</p>
            <p className="text-xs text-black/60 dark:text-white/60">correct predictions</p>
          </div>
          <div className="space-y-2">
            <p className="text-black/60 dark:text-white/60 text-sm">Comments</p>
            <p className="text-3xl font-bold text-black dark:text-white">42</p>
            <p className="text-xs text-black/60 dark:text-white/60">community contributions</p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {/* Voting Accuracy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-black dark:text-white" />
              <h2 className="text-2xl font-bold text-black dark:text-white">Voting Accuracy</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 space-y-2">
                <p className="text-black/60 dark:text-white/60 text-sm">Correct Votes</p>
                <p className="text-2xl font-bold text-black dark:text-white">84 / 100</p>
                <div className="text-xs text-black/60 dark:text-white/60">Last 100 votes analyzed</div>
              </div>
              <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 space-y-2">
                <p className="text-black/60 dark:text-white/60 text-sm">Best Performing Category</p>
                <p className="text-2xl font-bold text-black dark:text-white">Tech News</p>
                <div className="text-xs text-black/60 dark:text-white/60">89% accuracy</div>
              </div>
              <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 space-y-2">
                <p className="text-black/60 dark:text-white/60 text-sm">Vote Weight</p>
                <p className="text-2xl font-bold text-black dark:text-white">0.82</p>
                <div className="text-xs text-black/60 dark:text-white/60">Based on reputation</div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-black dark:text-white" />
              <h2 className="text-2xl font-bold text-black dark:text-white">Recent Activity</h2>
            </div>
            <div className="space-y-3">
              {[
                { type: 'vote', text: 'You voted "Verify" on "Tech company announces breakthrough"', time: '2 hours ago' },
                { type: 'vote', text: 'You voted "Uncertain" on "Celebrity rumor spreads"', time: '5 hours ago' },
                { type: 'comment', text: 'You commented on "Government policy debate"', time: '1 day ago' },
                { type: 'vote', text: 'You voted "Dispute" on "Health claim surfaces"', time: '2 days ago' },
              ].map((activity, idx) => (
                <div key={idx} className="border-b border-neutral-200 dark:border-neutral-800 pb-3 flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-black dark:bg-white mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-black dark:text-white text-sm">{activity.text}</p>
                    <p className="text-xs text-black/60 dark:text-white/60 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-black dark:text-white" />
              <h2 className="text-2xl font-bold text-black dark:text-white">Notifications</h2>
            </div>
            <div className="space-y-3">
              {[
                { title: 'Vote result', desc: 'A rumor you voted on has been frozen at 72% trust' },
                { title: 'Reputation change', desc: 'Your reputation increased by 3% due to accurate voting' },
                { title: 'Proof maturity', desc: 'A rumor you submitted proof for has reached maturity' },
              ].map((notif, idx) => (
                <div key={idx} className="border-l-2 border-black dark:border-white pl-4 py-2 space-y-1">
                  <p className="font-medium text-black dark:text-white text-sm">{notif.title}</p>
                  <p className="text-xs text-black/60 dark:text-white/60">{notif.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
