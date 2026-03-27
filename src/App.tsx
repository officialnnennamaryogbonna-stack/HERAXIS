import { useEffect, useMemo, useState } from 'react';
import BottomNav, { TabKey } from './components/BottomNav';
import Card from './components/Card';
import ReminderCard from './components/ReminderCard';
import { affirmations, reminders } from './data/mockData';
import CommunityPage from './pages/CommunityPage';
import CarePage from './pages/CarePage';
import EmergencyPage from './pages/EmergencyPage';
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
    if (cached) {
      setProfile(JSON.parse(cached) as UserProfile);
    }
  }, []);

  const handleComplete = (nextProfile: UserProfile) => {
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
    return <OnboardingPage onComplete={handleComplete} />;
  }

  return (
    <main className="mx-auto min-h-screen max-w-md bg-calm-50 px-4 pb-24 pt-5">
      <header className="mb-4">
        <p className="text-xs uppercase tracking-wide text-rose-500">HERAXIS</p>
        <h1 className="text-xl font-bold text-calm-700">Compassionate maternal support</h1>
        <p className="text-sm text-rose-700">SDG 3 + SDG 5 aligned wellbeing companion</p>
      </header>

      <Card title="Calming affirmation">
        <p className="text-sm text-rose-700">{affirmation}</p>
      </Card>

      <section className="mt-4 space-y-4">
        {activeTab === 'home' && <HomePage profile={profile} />}
        {activeTab === 'care' && <CarePage profile={profile} />}
        {activeTab === 'community' && <CommunityPage />}
        {activeTab === 'emergency' && <EmergencyPage profile={profile} />}
        {activeTab === 'profile' && <ProfilePage profile={profile} onReset={handleReset} />}
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
