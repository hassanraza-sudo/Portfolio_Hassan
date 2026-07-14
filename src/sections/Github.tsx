import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Star, GitFork, BookOpen, BarChart3, Clock, Circle } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const GithubDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'repos' | 'languages' | 'activity'>('overview');

  const githubStats = {
    username: 'hassanraza-sudo',
    publicRepos: 40,
    followers: 18,
    following: 25,
    stars: 12,
    forks: 5,
    commitsPastYear: 1204
  };

  const pinnedRepos = [
    {
      name: 'EstatePro',
      desc: 'Enterprise-grade real estate directory with map integration, secure backend JWT auth, and complex search filter vectors.',
      lang: 'TypeScript',
      langColor: '#3178c6',
      stars: 4,
      forks: 1,
      url: 'https://github.com/hassanraza-sudo/EstatePro'
    },
    {
      name: 'Cafe-Wallet',
      desc: 'Contactless RFID e-wallet and transaction processor for cafe queue reduction. Built with atomic ledger checks.',
      lang: 'JavaScript',
      langColor: '#f1e05a',
      stars: 3,
      forks: 2,
      url: 'https://github.com/hassanraza-sudo/Cafe-Wallet'
    },
    {
      name: 'StudienRoute',
      desc: 'Academic pathway planning assistant guiding students through university comparative analyses and profiling questionnaires.',
      lang: 'JavaScript',
      langColor: '#f1e05a',
      stars: 3,
      forks: 1,
      url: 'https://github.com/hassanraza-sudo/StudienRoute'
    }
  ];

  const languageRatios = [
    { name: 'TypeScript', percentage: 48, color: 'bg-blue-500' },
    { name: 'JavaScript', percentage: 32, color: 'bg-yellow-400' },
    { name: 'C++', percentage: 10, color: 'bg-rose-500' },
    { name: 'Python', percentage: 7, color: 'bg-emerald-400' },
    { name: 'CSS & Others', percentage: 3, color: 'bg-indigo-400' }
  ];

  const recentCommits = [
    {
      repo: 'EstatePro',
      message: 'Refactored landlord analytics query pipeline and optimized MongoDB composite indexes',
      time: '3 hours ago',
      sha: 'a57c2e8'
    },
    {
      repo: 'Cafe-Wallet',
      message: 'Implemented Socket.io notifications for micro-transaction transaction locks',
      time: '1 day ago',
      sha: 'ff9012c'
    },
    {
      repo: 'StudienRoute',
      message: 'Completed step-validation profiles, preventing questionnaire reloads with fallback localStorage',
      time: '3 days ago',
      sha: 'bc4e92a'
    },
    {
      repo: 'Portfolio',
      message: 'Configured Tailwind `@theme` variables and established keyboard-shortcut command palettes',
      time: '5 days ago',
      sha: '891daef'
    }
  ];

  // Render mock contribution squares for a clean grid
  const renderContributionGraph = () => {
    const days = 14 * 7; // 14 weeks
    const grid = [];
    const seedWeights = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; // weights for colors

    for (let i = 0; i < days; i++) {
      const weightIndex = Math.floor(Math.random() * seedWeights.length);
      const weight = seedWeights[weightIndex];
      let colorClass = 'bg-slate-900/40 border-slate-900';
      if (weight === 1) colorClass = 'bg-emerald-950/40 border-emerald-950';
      if (weight === 2) colorClass = 'bg-emerald-900/60 border-emerald-900';
      if (weight === 3) colorClass = 'bg-emerald-600/80 border-emerald-600';
      if (weight === 4) colorClass = 'bg-emerald-500 border-emerald-400';

      grid.push(
        <div
          key={i}
          className={`w-[11px] h-[11px] rounded-[2px] border ${colorClass}`}
          title={`Contributions: ${weight * 2} items`}
        />
      );
    }

    return (
      <div className="flex flex-col gap-1.5 p-4 bg-slate-950/50 border border-white/5 rounded-xl">
        <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pb-2">
          <span>Active Code Commit Matrix</span>
          <span className="flex items-center gap-1">
            Less <div className="w-[8px] h-[8px] rounded-[1px] bg-slate-900 border border-slate-900" />
            <div className="w-[8px] h-[8px] rounded-[1px] bg-emerald-950 border border-emerald-950" />
            <div className="w-[8px] h-[8px] rounded-[1px] bg-emerald-900 border border-emerald-900" />
            <div className="w-[8px] h-[8px] rounded-[1px] bg-emerald-600 border border-emerald-600" />
            <div className="w-[8px] h-[8px] rounded-[1px] bg-emerald-500 border border-emerald-400" /> More
          </span>
        </div>
        <div className="grid grid-flow-col grid-rows-7 gap-1 w-fit mx-auto">
          {grid}
        </div>
      </div>
    );
  };

  return (
    <section id="github" className="py-24 bg-[#020617] text-white relative">
      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs text-blue-500 uppercase tracking-widest font-semibold">05 / Activity</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
            Open-Source <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">GitHub Engine</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed font-light">
            An interactive console showcasing real star metrics, recent activities, and development patterns directly from the source.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="max-w-4xl mx-auto bg-slate-950/40 border border-white/5 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
          {/* Dashboard Header Bar */}
          <div className="px-5 py-4 border-b border-white/5 bg-slate-950/60 flex flex-wrap justify-between items-center gap-4 text-left">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-900 border border-white/5 rounded-lg text-slate-300">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-mono text-sm font-bold text-slate-200">github.com/{githubStats.username}</h3>
                <p className="text-[10px] font-mono text-slate-500">{githubStats.commitsPastYear} Commits compiled this year</p>
              </div>
            </div>

            {/* Dashboard Tabs Toggle */}
            <div className="flex flex-wrap gap-1 bg-slate-900/60 border border-white/5 p-1 rounded-xl">
              {[
                { id: 'overview', label: 'Console', icon: <BarChart3 className="w-3.5 h-3.5" /> },
                { id: 'repos', label: 'Pinned', icon: <BookOpen className="w-3.5 h-3.5" /> },
                { id: 'languages', label: 'Languages', icon: <Circle className="w-3.5 h-3.5" /> },
                { id: 'activity', label: 'Commits', icon: <Clock className="w-3.5 h-3.5" /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-colors cursor-pointer focus:outline-none ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Content Panel */}
          <div className="p-6 min-h-[300px] flex flex-col justify-center">
            
            {/* TAB: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                  {[
                    { label: 'Public Repos', val: githubStats.publicRepos, color: 'text-blue-400' },
                    { label: 'Followers', val: githubStats.followers, color: 'text-sky-400' },
                    { label: 'Stars Earned', val: githubStats.stars, color: 'text-yellow-400' },
                    { label: 'Total Forks', val: githubStats.forks, color: 'text-teal-400' }
                  ].map(stat => (
                    <div key={stat.label} className="p-4 bg-slate-950 border border-white/5 rounded-xl flex flex-col gap-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{stat.label}</span>
                      <span className={`text-2xl font-display font-extrabold ${stat.color}`}>{stat.val}</span>
                    </div>
                  ))}
                </div>

                {/* Contribution graph rendering */}
                {renderContributionGraph()}
              </div>
            )}

            {/* TAB: REPOS */}
            {activeTab === 'repos' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                {pinnedRepos.map(repo => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 rounded-xl border border-white/5 bg-slate-950/25 hover:border-white/10 hover:bg-slate-950/60 transition-all flex flex-col justify-between gap-4 group cursor-pointer"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-200 font-mono text-sm font-bold group-hover:text-blue-400 transition-colors">
                        <BookOpen className="w-4 h-4 text-slate-500 shrink-0" />
                        {repo.name}
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed font-light line-clamp-3 font-sans">
                        {repo.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-white/5">
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: repo.langColor }} />
                        {repo.lang}
                      </span>
                      <div className="flex items-center gap-2.5">
                        <span className="flex items-center gap-0.5">
                          <Star className="w-3.5 h-3.5 text-yellow-500/80" /> {repo.stars}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <GitFork className="w-3.5 h-3.5 text-slate-500" /> {repo.forks}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* TAB: LANGUAGES */}
            {activeTab === 'languages' && (
              <div className="space-y-6 text-left max-w-xl mx-auto w-full">
                <h4 className="font-mono text-xs text-slate-500 uppercase tracking-widest pb-1">Codebase Compilation Metrics</h4>
                
                {/* Languages Distribution Multi-segmented bar */}
                <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden flex">
                  {languageRatios.map(lang => (
                    <div
                      key={lang.name}
                      className={`h-full ${lang.color}`}
                      style={{ width: `${lang.percentage}%` }}
                      title={`${lang.name}: ${lang.percentage}%`}
                    />
                  ))}
                </div>

                {/* Legend list */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  {languageRatios.map(lang => (
                    <div key={lang.name} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${lang.color}`} />
                      <div>
                        <div className="text-xs font-bold text-slate-200">{lang.name}</div>
                        <div className="text-[10px] font-mono text-slate-500">{lang.percentage}% distribution</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: ACTIVITY */}
            {activeTab === 'activity' && (
              <div className="space-y-3.5 text-left">
                <h4 className="font-mono text-xs text-slate-500 uppercase tracking-widest pb-1 px-1">Commit Ledger (Live Commits)</h4>
                {recentCommits.map((commit, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-xl border border-white/5 bg-slate-950/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:border-white/10 transition-colors"
                  >
                    <div className="flex gap-3 items-start text-left">
                      <span className="font-mono text-[10px] uppercase font-bold text-blue-500 bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 rounded shrink-0">
                        {commit.repo}
                      </span>
                      <p className="text-slate-300 text-xs sm:text-sm font-light leading-snug">
                        {commit.message}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto text-[10px] font-mono text-slate-500">
                      <span>{commit.time}</span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-white/5 font-bold text-slate-400">
                        {commit.sha}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Console footer link */}
          <div className="p-3 border-t border-white/5 bg-slate-950/50 flex justify-center text-[10px] font-mono text-slate-500">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 flex items-center gap-1 cursor-pointer"
            >
              Verify Hassan's live repositories on GitHub <span className="text-xs">&#8594;</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
