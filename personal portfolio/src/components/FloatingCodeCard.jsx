import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check } from 'lucide-react';

export default function FloatingCodeCard({ className = '' }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('react');

  const snippets = {
    react: `// ExpenseManager.jsx - State & Analytics
export const useExpenseMetrics = (transactions) => {
  return useMemo(() => {
    const total = transactions.reduce((sum, item) => sum + item.amount, 0);
    const byCategory = transactions.reduce((acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
      return acc;
    }, {});
    return { total, byCategory };
  }, [transactions]);
};`,
    django: `# views.py - Django REST Framework
class TransactionViewSet(viewsets.ModelViewSet):
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Transaction.objects.filter(owner=user).order_by('-date')`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={`glass-panel rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 max-w-lg w-full ${className}`}
    >
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0A1024]/90 border-b border-slate-800/80">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <div className="flex items-center ml-2 text-xs text-slate-400 font-mono">
            <Terminal className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
            <span>priyansh@dev:~/projects</span>
          </div>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center space-x-1 bg-slate-900/60 p-1 rounded-md border border-slate-800">
          <button
            onClick={() => setActiveTab('react')}
            className={`px-2.5 py-0.5 text-xs font-mono rounded transition-colors ${
              activeTab === 'react'
                ? 'bg-blue-600/30 text-blue-300 font-medium border border-blue-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            React
          </button>
          <button
            onClick={() => setActiveTab('django')}
            className={`px-2.5 py-0.5 text-xs font-mono rounded transition-colors ${
              activeTab === 'django'
                ? 'bg-violet-600/30 text-violet-300 font-medium border border-violet-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Django
          </button>
        </div>
      </div>

      {/* Code Body */}
      <div className="p-4 bg-[#070D1E]/95 text-xs md:text-sm font-mono overflow-x-auto relative">
        <button
          onClick={handleCopy}
          aria-label="Copy snippet"
          className="absolute top-3 right-3 p-1.5 rounded bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>

        <pre className="text-slate-300 leading-relaxed">
          {activeTab === 'react' ? (
            <code>
              <span className="text-slate-500">// ExpenseManager.jsx - State & Analytics</span>
              {'\n'}
              <span className="text-violet-400">export const </span>
              <span className="text-blue-400">useExpenseMetrics</span> = (
              <span className="text-amber-300">transactions</span>) =&gt; &#123;{'\n'}
              {'  '}
              <span className="text-violet-400">return </span>
              <span className="text-cyan-400">useMemo</span>(() =&gt; &#123;{'\n'}
              {'    '}
              <span className="text-violet-400">const </span>total = transactions.
              <span className="text-blue-400">reduce</span>((sum, item) =&gt; sum + item.amount, 0);{'\n'}
              {'    '}
              <span className="text-violet-400">const </span>byCategory = transactions.
              <span className="text-blue-400">reduce</span>((acc, curr) =&gt; &#123;{'\n'}
              {'      '}acc[curr.category] = (acc[curr.category] || 0) + curr.amount;{'\n'}
              {'      '}
              <span className="text-violet-400">return </span>acc;{'\n'}
              {'    '}&#125;, &#123;&#125;);{'\n'}
              {'    '}
              <span className="text-violet-400">return </span>&#123; total, byCategory &#125;;{'\n'}
              {'  '}&#125;, [transactions]);{'\n'}
              &#125;;
            </code>
          ) : (
            <code>
              <span className="text-slate-500"># views.py - Django REST Framework</span>
              {'\n'}
              <span className="text-violet-400">class </span>
              <span className="text-blue-400">TransactionViewSet</span>(viewsets.ModelViewSet):{'\n'}
              {'    '}serializer_class = TransactionSerializer{'\n'}
              {'    '}permission_classes = [permissions.IsAuthenticated]{'\n'}
              {'\n'}
              {'    '}
              <span className="text-violet-400">def </span>
              <span className="text-cyan-400">get_queryset</span>(self):{'\n'}
              {'        '}user = self.request.user{'\n'}
              {'        '}
              <span className="text-violet-400">return </span>Transaction.objects.
              <span className="text-blue-400">filter</span>
              (owner=user).
              <span className="text-blue-400">order_by</span>(
              <span className="text-emerald-300">'-date'</span>)
            </code>
          )}
        </pre>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#050915] border-t border-slate-800 text-[11px] text-slate-400 font-mono">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Full-Stack Architecture</span>
        </div>
        <span className="text-slate-500">UTF-8 • JavaScript / Python</span>
      </div>
    </motion.div>
  );
}
