import { useEffect, useMemo, useState } from 'react';
import BottomNav, { TabKey } from './components/BottomNav';
import Card from './components/Card';
import ReminderCard from './components/ReminderCard';
import { affirmations, reminders } from './data/mockData';
import BabyTrackerPage from './pages/BabyTrackerPage';
import CommunityPage from './pages/CommunityPage';
import CarePage from './pages/CarePage';
import HomePage from './pages/HomePage';
import OnboardingPage from './pages/OnboardingPage';
import ProfilePage from './pages/ProfilePage';
import { UserProfile } from './types';

const STORAGE_KEY = 'heraxis-profile';

const App = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [activeTab, setActiveTab] = useState<TabKey>('home');

  useEffect(() => {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (!cached) return;

    const parsed = JSON.parse(cached) as UserProfile;
    if (!parsed.accessibility) {
      parsed.accessibility = {
        largeText: false,
        highContrast: false,
        voiceEnabled: parsed.voiceEnabled
      };
    }
    if (typeof parsed.pregnancyWeek !== 'number') {
      parsed.pregnancyWeek = 24;
    }
    setProfile(parsed);
  }, []);

  const persistProfile = (nextProfile: UserProfile) => {
    setProfile(nextProfile);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProfile));
  };

  const handleReset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProfile(null);
    setActiveTab('home');
  };

  const affirmation = useMemo(() => affirmations[new Date().getDate() % affirmations.length], []);

  if (!profile) {
    return <OnboardingPage onComplete={persistProfile} />;
  }

  return (
    <main
      className={`mx-auto min-h-screen max-w-md px-4 pb-24 pt-5 ${
        profile.accessibility.highContrast ? 'bg-white text-slate-900' : 'bg-calm-50'
      } ${profile.accessibility.largeText ? 'text-lg' : 'text-base'}`}
    >
      <header className="mb-4">
        <p className="text-xs uppercase tracking-wide text-rose-500">HERAXIS</p>
        <h1 className="text-xl font-bold text-calm-700">Compassionate maternal support</h1>
        <p className="text-sm text-rose-700">A safe mobile-first companion for maternal care, baby tracking, and support.</p>
      </header>

      <Card title="Daily affirmation">
        <p className="text-sm text-rose-700">{affirmation}</p>
      </Card>

      <button className="mt-4 w-full rounded-xl bg-red-600 p-3 text-sm font-semibold text-white" type="button">
        🚨 Emergency help
      </button>

      <section className="mt-4 space-y-4">
        {activeTab === 'home' && <HomePage profile={profile} />}
        {activeTab === 'care' && <CarePage profile={profile} />}
        {activeTab === 'community' && <CommunityPage />}
        {activeTab === 'tracker' && <BabyTrackerPage profile={profile} />}
        {activeTab === 'profile' && <ProfilePage profile={profile} onReset={handleReset} onUpdate={persistProfile} />}
      </section>

      {activeTab !== 'home' && (
        <section className="mt-4">
          <Card title="Today’s reminders">
            <div className="space-y-2">
              {reminders.map((reminder) => (
                <ReminderCard key={reminder.id} reminder={reminder} />
              ))}
            </div>
          </Card>
        </section>
      )}

      <BottomNav active={activeTab} onChange={setActiveTab} />
    </main>
  );
};

export default App;
