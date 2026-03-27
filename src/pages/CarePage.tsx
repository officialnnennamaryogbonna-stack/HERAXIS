import { useMemo, useState } from 'react';
import Card from '../components/Card';
import VoiceButton from '../components/VoiceButton';
import {
  dangerSigns,
  mealSuggestions,
  newMumGuidanceTips,
  nutritionTips,
  postpartumRecoveryTips,
  pregnancyHubTips,
  trimesterTips
} from '../data/mockData';
import { UserProfile } from '../types';
import { TabKey } from '../components/BottomNav';

interface CarePageProps {
  profile: UserProfile;
  onNotify: (message: string) => void;
  onNavigate: (tab: TabKey) => void;
}

const CarePage = ({ profile, onNotify, onNavigate }: CarePageProps) => {
  const voiceEnabled = profile.accessibility.voiceEnabled;
  const [trimester, setTrimester] = useState<'first' | 'second' | 'third'>('second');
  const [openTip, setOpenTip] = useState<string | null>(pregnancyHubTips[0].title);
  const [activeNewMumCategory, setActiveNewMumCategory] = useState<'care' | 'wellness' | 'routine'>('care');
  const [savedGuides, setSavedGuides] = useState<string[]>([]);
  const [recoveryDone, setRecoveryDone] = useState<string[]>([]);
  const [nutritionFilter, setNutritionFilter] = useState<'all' | 'pregnancy' | 'new_mother' | 'baby'>('all');

  const filteredNutrition = useMemo(
    () => (nutritionFilter === 'all' ? nutritionTips : nutritionTips.filter((tip) => tip.forStage === nutritionFilter)),
    [nutritionFilter]
  );

  const filteredNewMum = useMemo(
    () =>
      newMumGuidanceTips.filter((tip) => {
        if (activeNewMumCategory === 'care') return /Breastfeeding|Baby care/.test(tip.title);
        if (activeNewMumCategory === 'wellness') return /Emotional|Sleep/.test(tip.title);
        return /Practical/.test(tip.title);
      }),
    [activeNewMumCategory]
  );

  const toggleSaved = (title: string) => {
    const next = savedGuides.includes(title) ? savedGuides.filter((item) => item !== title) : [...savedGuides, title];
    setSavedGuides(next);
    onNotify(next.includes(title) ? 'Guide bookmarked ⭐' : 'Guide removed from bookmarks');
  };

  const toggleRecovery = (title: string) => {
    const next = recoveryDone.includes(title) ? recoveryDone.filter((item) => item !== title) : [...recoveryDone, title];
    setRecoveryDone(next);
  };

  return (
    <div className="space-y-4">
      <Card title="Pregnancy support hub">
        <p className="mb-3 text-sm text-rose-700">Click trimester tabs and expand sections for practical support.</p>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {([
            ['first', '1st'],
            ['second', '2nd'],
            ['third', '3rd']
          ] as const).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setTrimester(key)}
              className={`rounded-lg p-2 text-sm font-semibold ${trimester === key ? 'bg-calm-600 text-white' : 'bg-calm-100 text-calm-700'}`}
            >
              {label} trimester
            </button>
          ))}
        </div>

        <div className="mb-3 space-y-2">
          {trimesterTips[trimester].map((tip) => (
            <article key={tip.title} className="rounded-xl bg-calm-100 p-3">
              <h4 className="text-sm font-semibold text-calm-700">{tip.title}</h4>
              <p className="text-sm text-rose-700">{tip.body}</p>
            </article>
          ))}
        </div>

        <div className="space-y-2">
          {pregnancyHubTips.map((tip) => {
            const isOpen = openTip === tip.title;
            return (
              <article key={tip.title} className="rounded-xl bg-rose-50 p-3">
                <button
                  type="button"
                  onClick={() => setOpenTip(isOpen ? null : tip.title)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <h4 className="text-sm font-semibold text-calm-700">{tip.title}</h4>
                  <span className="text-xs text-calm-600">{isOpen ? 'Hide' : 'Open'}</span>
                </button>
                {isOpen && (
                  <div className="mt-2">
                    <p className="text-sm text-rose-700">{tip.body}</p>
                    <div className="mt-2">
                      <VoiceButton enabled={voiceEnabled} text={`${tip.title}. ${tip.body}`} />
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </Card>

      <Card title="New mum guidance">
        <div className="mb-3 flex gap-2 text-xs">
          {([
            ['care', 'Care'],
            ['wellness', 'Wellness'],
            ['routine', 'Routine']
          ] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveNewMumCategory(key)}
              className={`rounded-full px-3 py-1 ${activeNewMumCategory === key ? 'bg-calm-600 text-white' : 'bg-calm-100 text-calm-700'}`}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {filteredNewMum.map((tip) => (
            <article key={tip.title} className="rounded-xl bg-rose-50 p-3">
              <h4 className="text-sm font-semibold text-calm-700">{tip.title}</h4>
              <p className="text-sm text-rose-700">{tip.body}</p>
              <button className="mt-2 rounded-lg bg-calm-100 px-3 py-1 text-xs font-semibold text-calm-700" onClick={() => toggleSaved(tip.title)} type="button">
                {savedGuides.includes(tip.title) ? 'Saved' : 'Bookmark'}
              </button>
            </article>
          ))}
        </div>
      </Card>

      <Card title="Postpartum recovery checklist">
        <div className="space-y-2">
          {postpartumRecoveryTips.map((tip) => (
            <label key={tip.title} className="flex items-start gap-3 rounded-xl bg-rose-50 p-3 text-sm text-rose-700">
              <input type="checkbox" checked={recoveryDone.includes(tip.title)} onChange={() => toggleRecovery(tip.title)} />
              <span>
                <span className="font-semibold text-calm-700">{tip.title}</span>
                <span className="block">{tip.body}</span>
              </span>
            </label>
          ))}
        </div>
        <p className="mt-2 text-xs text-calm-600">{recoveryDone.length}/{postpartumRecoveryTips.length} steps completed.</p>
      </Card>

      <Card title="Nutrition hub">
        <div className="mb-3 flex flex-wrap gap-2 text-xs">
          {([
            ['all', 'All'],
            ['pregnancy', 'Pregnancy'],
            ['new_mother', 'New Mum'],
            ['baby', 'Baby']
          ] as const).map(([key, label]) => (
            <button
              key={key}
              type="button"
              className={`rounded-full px-3 py-1 ${nutritionFilter === key ? 'bg-calm-600 text-white' : 'bg-calm-100 text-calm-700'}`}
              onClick={() => setNutritionFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {filteredNutrition.map((tip) => (
            <article key={tip.id} className="rounded-xl bg-rose-50 p-3">
              <p className="text-xs uppercase tracking-wide text-calm-600">{tip.forStage.replace('_', ' ')}</p>
              <h4 className="text-sm font-semibold text-calm-700">{tip.title}</h4>
              <p className="text-sm text-rose-700">{tip.body}</p>
            </article>
          ))}
          {mealSuggestions
            .filter((item) => nutritionFilter === 'all' || item.forStage === nutritionFilter)
            .map((meal) => (
              <article key={meal.id} className="rounded-xl border border-rose-100 bg-white p-3">
                <p className="text-xs uppercase tracking-wide text-calm-600">Meal suggestion</p>
                <p className="text-sm font-semibold text-calm-700">{meal.meal}</p>
                <p className="text-sm text-rose-700">Hydration: {meal.hydration}</p>
              </article>
            ))}
        </div>
      </Card>

      <Card title="When to seek urgent medical help">
        <ul className="space-y-2">
          {dangerSigns.map((sign) => (
            <li key={sign} className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
              • {sign}
            </li>
          ))}
        </ul>
        <button className="mt-3 w-full rounded-xl bg-red-600 p-3 text-sm font-semibold text-white" onClick={() => onNavigate('home')} type="button">
          Back to emergency quick action
        </button>
      </Card>
    </div>
  );
};

export default CarePage;
