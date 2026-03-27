export type TabKey = 'home' | 'care' | 'community' | 'tracker' | 'profile';

const tabs: Array<{ key: TabKey; label: string; icon: string }> = [
  { key: 'home', label: 'Home', icon: '🏠' },
  { key: 'care', label: 'Care Hub', icon: '🩺' },
  { key: 'community', label: 'Community', icon: '🤝' },
  { key: 'tracker', label: 'Baby Tracker', icon: '🍼' },
  { key: 'profile', label: 'Profile', icon: '👤' }
];

interface BottomNavProps {
  active: TabKey;
  onChange: (tab: TabKey) => void;
}

const BottomNav = ({ active, onChange }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 mx-auto w-full max-w-md border-t border-rose-100 bg-white/95 px-2 py-2 backdrop-blur">
      <ul className="grid grid-cols-5 gap-1">
        {tabs.map((tab) => (
          <li key={tab.key}>
            <button
              type="button"
              onClick={() => onChange(tab.key)}
              className={`w-full rounded-xl p-2 text-center text-xs ${
                tab.key === active ? 'bg-calm-100 font-semibold text-calm-700' : 'text-rose-500'
              }`}
            >
              <div className="text-base">{tab.icon}</div>
              <div>{tab.label}</div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
