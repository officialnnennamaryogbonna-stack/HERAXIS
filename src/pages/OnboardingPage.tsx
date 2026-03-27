import { useMemo, useState } from 'react';
import { MaternalStage, SupportNeed, UserProfile } from '../types';
import Card from '../components/Card';

interface OnboardingPageProps {
  onComplete: (profile: UserProfile) => void;
}

const stageOptions: Array<{ value: MaternalStage; label: string }> = [
  { value: 'pregnant', label: 'Pregnant' },
  { value: 'teen_mother', label: 'Teenage mother' },
  { value: 'new_mother', label: 'New mother' }
];

const supportOptions: Array<{ value: SupportNeed; label: string }> = [
  { value: 'health', label: 'Health guidance' },
  { value: 'emotional', label: 'Emotional support' },
  { value: 'emergency', label: 'Emergency help' },
  { value: 'community', label: 'Community support' }
];

const OnboardingPage = ({ onComplete }: OnboardingPageProps) => {
  const [stage, setStage] = useState<MaternalStage>('pregnant');
  const [language, setLanguage] = useState('English');
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [dueDateOrBabyAge, setDueDateOrBabyAge] = useState('');
  const [pregnancyWeek, setPregnancyWeek] = useState(24);
  const [needs, setNeeds] = useState<SupportNeed[]>(['health', 'emotional']);

  const canSubmit = useMemo(() => dueDateOrBabyAge.trim().length > 0, [dueDateOrBabyAge]);

  const toggleNeed = (need: SupportNeed) => {
    setNeeds((current) => (current.includes(need) ? current.filter((item) => item !== need) : [...current, need]));
  };

  return (
    <main className="mx-auto min-h-screen max-w-md bg-calm-50 px-4 pb-6 pt-8">
      <h1 className="mb-2 text-2xl font-bold text-calm-700">Welcome to HERAXIS</h1>
      <p className="mb-6 text-sm text-rose-700">A safe and supportive space for maternal care, guidance, and community.</p>

      <div className="space-y-4">
        <Card title="Your current stage">
          <div className="grid grid-cols-1 gap-2">
            {stageOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setStage(option.value)}
                className={`rounded-xl p-3 text-left text-sm ${
                  stage === option.value ? 'bg-calm-100 font-semibold text-calm-700' : 'bg-rose-50'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </Card>

        <Card title="Preferences">
          <label className="mb-3 block text-sm">
            <span className="mb-1 block font-medium">Language</span>
            <select
              className="w-full rounded-lg border border-rose-200 bg-white p-2"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <option>English</option>
              <option>Swahili</option>
              <option>French</option>
            </select>
          </label>

          <label className="mb-3 flex items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              checked={voiceEnabled}
              onChange={(event) => setVoiceEnabled(event.target.checked)}
            />
            Enable voice support
          </label>

          {stage !== 'new_mother' && (
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Current pregnancy week: {pregnancyWeek}</span>
              <input
                type="range"
                min={4}
                max={40}
                value={pregnancyWeek}
                onChange={(event) => setPregnancyWeek(Number(event.target.value))}
                className="w-full"
              />
            </label>
          )}
        </Card>

        <Card title="Due date or baby age">
          <input
            value={dueDateOrBabyAge}
            onChange={(event) => setDueDateOrBabyAge(event.target.value)}
            className="w-full rounded-lg border border-rose-200 p-2"
            placeholder="Example: 24 weeks pregnant or 3 months baby"
          />
        </Card>

        <Card title="Support needs">
          <div className="grid grid-cols-1 gap-2">
            {supportOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-2 rounded-lg bg-rose-50 p-2 text-sm">
                <input type="checkbox" checked={needs.includes(option.value)} onChange={() => toggleNeed(option.value)} />
                {option.label}
              </label>
            ))}
          </div>
        </Card>

        <button
          type="button"
          disabled={!canSubmit}
          onClick={() =>
            onComplete({
              stage,
              language,
              voiceEnabled,
              dueDateOrBabyAge,
              supportNeeds: needs,
              emergencyContact: '',
              pregnancyWeek,
              accessibility: {
                largeText: false,
                highContrast: false,
                simplifiedView: false,
                voiceEnabled
              }
            })
          }
          className="w-full rounded-xl bg-calm-600 p-3 text-base font-semibold text-white disabled:opacity-60"
        >
          Continue to your support dashboard
        </button>
      </div>
    </main>
  );
};

export default OnboardingPage;
