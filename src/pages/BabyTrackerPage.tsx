import { useMemo, useState } from 'react';
import Card from '../components/Card';
import { babyWeekUpdates } from '../data/mockData';
import { UserProfile } from '../types';
import { TabKey } from '../components/BottomNav';

interface BabyTrackerProps {
  profile: UserProfile;
  onNotify: (message: string) => void;
  onNavigate: (tab: TabKey) => void;
}

const BabyTrackerPage = ({ profile, onNotify, onNavigate }: BabyTrackerProps) => {
  const [selectedWeek, setSelectedWeek] = useState(profile.pregnancyWeek ?? 24);

  const nearestWeek = useMemo(
    () => babyWeekUpdates.reduce((best, current) => (Math.abs(current.week - selectedWeek) < Math.abs(best.week - selectedWeek) ? current : best)),
    [selectedWeek]
  );

  const progress = Math.round((selectedWeek / 40) * 100);

  return (
    <div className="space-y-4">
      <Card title="Week selector">
        <p className="text-sm text-rose-700">Select your current pregnancy week for personalized growth details.</p>
        <div className="mt-3 rounded-xl bg-rose-50 p-3">
          <p className="text-sm font-semibold text-calm-700">Week {selectedWeek}</p>
          <input
            type="range"
            min={4}
            max={40}
            value={selectedWeek}
            onChange={(event) => setSelectedWeek(Number(event.target.value))}
            className="mt-2 w-full"
          />
          <div className="mt-2 h-2 rounded-full bg-rose-100">
            <div className="h-2 rounded-full bg-calm-600" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-1 text-xs text-calm-600">{progress}% of pregnancy timeline</p>
        </div>
      </Card>

      <Card title="Fruit-size growth card">
        <div className="rounded-xl bg-calm-100 p-4">
          <p className="text-xs uppercase tracking-wide text-calm-600">This week’s growth</p>
          <p className="text-lg font-semibold text-calm-700">{nearestWeek.fruit}</p>
          <p className="text-sm text-rose-700">{nearestWeek.sizeText}</p>
          <p className="mt-1 text-sm text-rose-700">{nearestWeek.developmentNote}</p>
        </div>
      </Card>

      <Card title="Milestone cards">
        <div className="space-y-2">
          {babyWeekUpdates.map((update) => (
            <button
              key={update.week}
              type="button"
              className={`w-full rounded-xl p-3 text-left ${update.week === nearestWeek.week ? 'bg-calm-100' : 'bg-rose-50'}`}
              onClick={() => {
                setSelectedWeek(update.week);
                onNotify(`Loaded week ${update.week} details`);
              }}
            >
              <p className="text-sm font-semibold text-calm-700">Week {update.week} • {update.fruit}</p>
              <p className="text-sm text-rose-700">{update.milestone}</p>
            </button>
          ))}
        </div>
      </Card>

      <button className="w-full rounded-xl bg-calm-600 p-3 text-sm font-semibold text-white" onClick={() => onNavigate('care')} type="button">
        Open Care Hub for next tasks
      </button>
    </div>
  );
};

export default BabyTrackerPage;
