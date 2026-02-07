'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown, HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { CommentSection } from './comment-section';

export interface RumorCardProps {
  id: string;
  content: string;
  trustScore: number;
  timestamp: string;
  proofCount?: number;
  voteWeight?: number;
  userVote?: 'verify' | 'uncertain' | 'dispute' | null;
}

export function RumorCard({
  id,
  content,
  trustScore,
  timestamp,
  proofCount = 0,
  voteWeight = 0.2,
  userVote: initialVote = null,
}: RumorCardProps) {
  const [showProof, setShowProof] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [userVote, setUserVote] = useState<'verify' | 'uncertain' | 'dispute' | null>(initialVote);
  const [voteCounts, setVoteCounts] = useState({ verify: 45, uncertain: 12, dispute: 8 });
  const [commentCount, setCommentCount] = useState(3);

  const trustPercentage = trustScore * 100;
  const trustColor = trustScore > 0.7 ? 'bg-black dark:bg-white' : trustScore > 0.4 ? 'bg-black/60 dark:bg-white/60' : 'bg-black/40 dark:bg-white/40';

  const handleVote = (vote: 'verify' | 'uncertain' | 'dispute') => {
    if (userVote === vote) {
      setUserVote(null);
    } else {
      setUserVote(vote);
    }
  };

  const totalVotes = voteCounts.verify + voteCounts.uncertain + voteCounts.dispute;

  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800 py-4 px-6 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-150">
      {/* Header - Name and Timestamp */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-medium text-black dark:text-white">Anonymous Member</span>
        <span className="text-xs text-black/50 dark:text-white/50">{timestamp}</span>
      </div>

      {/* Rumor Content */}
      <p className="text-base text-black dark:text-white leading-normal mb-4">{content}</p>

      {/* Trust Score Bar - Compact */}
      <div className="mt-3">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-xs font-medium text-black/60 dark:text-white/60">Trust</span>
          <span className="text-xs font-semibold text-black dark:text-white">{trustPercentage.toFixed(0)}%</span>
        </div>
        <div className="w-full bg-neutral-200 dark:bg-neutral-800 rounded-full h-1.5 overflow-hidden">
          <div
            className={`h-full ${trustColor} transition-all duration-500`}
            style={{ width: `${trustPercentage}%` }}
          />
        </div>
      </div>

      {/* Actions Section */}
      <div className="mt-4">
        {/* Row 1 - Voting Actions */}
        <div className="flex items-center gap-8 mb-3">
          {/* Upvote Button */}
          <button
            onClick={() => handleVote('verify')}
            className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-all duration-150"
            title="Verify - This claim is true"
          >
            <ThumbsUp
              className={`w-4 h-4 transition ${
                userVote === 'verify' ? 'fill-black dark:fill-white text-black dark:text-white' : ''
              }`}
            />
            <span className="font-medium">{voteCounts.verify}</span>
          </button>

          {/* Uncertain Button */}
          <button
            onClick={() => handleVote('uncertain')}
            className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-all duration-150"
            title="Uncertain - Need more information"
          >
            <HelpCircle
              className={`w-4 h-4 transition ${
                userVote === 'uncertain' ? 'fill-black dark:fill-white text-black dark:text-white' : ''
              }`}
            />
            <span className="font-medium">{voteCounts.uncertain}</span>
          </button>

          {/* Downvote Button */}
          <button
            onClick={() => handleVote('dispute')}
            className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-all duration-150"
            title="Dispute - This claim is false"
          >
            <ThumbsDown
              className={`w-4 h-4 transition ${
                userVote === 'dispute' ? 'fill-black dark:fill-white text-black dark:text-white' : ''
              }`}
            />
            <span className="font-medium">{voteCounts.dispute}</span>
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-3 mt-2"></div>

        {/* Row 2 - Metadata Actions */}
        <div className="flex items-center gap-6 text-sm text-black/60 dark:text-white/60">
          {/* Proof Items Button */}
          <button
            onClick={() => setShowProof(!showProof)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-150"
          >
            <span>{proofCount} proof items</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${showProof ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Comments Button */}
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-2 hover:text-black dark:hover:text-white transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="font-medium">{commentCount}</span>
          </button>
        </div>
      </div>

      {showProof && (
        <div className="mt-4 space-y-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          {proofCount === 0 ? (
            <p className="text-sm text-foreground/60">No proofs submitted yet. Be the first to add evidence!</p>
          ) : (
            <>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-foreground/60">Proof Status</p>
                  <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 text-foreground rounded">
                    {proofCount > 10 ? 'Mature' : `${10 - proofCount} votes to mature`}
                  </span>
                </div>
                <p className="text-sm text-foreground/70">{proofCount} proof items submitted</p>
              </div>
              <button className="w-full text-sm px-3 py-2 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-foreground rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                View All Proofs
              </button>
            </>
          )}
        </div>
      )}

      {/* Comment Section */}
      {showComments && (
        <div className="mt-6">
          <CommentSection rumorId={id} initialComments={[
            {
              id: '1',
              author: 'Anonymous User',
              content: 'This claim needs more verification. I found conflicting information.',
              timestamp: '4 hours ago',
              likes: 12,
              replies: [],
            },
            {
              id: '2',
              author: 'Anonymous Researcher',
              content: 'I have evidence supporting this. See the attached proof.',
              timestamp: '3 hours ago',
              likes: 8,
              replies: [],
            },
            {
              id: '3',
              author: 'Anonymous Member',
              content: 'Can someone explain the methodology used here?',
              timestamp: '2 hours ago',
              likes: 3,
              replies: [],
            },
          ]} />
        </div>
      )}
    </div>
  );
}
