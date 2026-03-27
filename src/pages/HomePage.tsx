import { useMemo, useState } from 'react';
import Card from '../components/Card';
import ReminderCard from '../components/ReminderCard';
import VoiceButton from '../components/VoiceButton';
import { babyWeekUpdates, communityPosts, nutritionTipOfDay, reminders, todayTip } from '../data/mockData';
import { UserProfile } from '../types';
import { TabKey } from '../components/BottomNav';

interface HomePageProps {
  profile: UserProfile;
  onNotify: (message: string) => void;
  onNavigate: (tab: TabKey) => void;
}

const HomePage = ({ profile, onNotify, onNavigate }: HomePageProps) => {
  const week = profile.pregnancyWeek ?? 24;
  const babySummary = useMemo(
    () => babyWeekUpdates.reduce((best, current) => (Math.abs(current.week - week) < Math.abs(best.week - week) ? current : best)),
    [week]
  );
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [doneReminders, setDoneReminders] = useState<string[]>([]);

  const toggleDone = (id: string) => {
    const updated = doneReminders.includes(id) ? doneReminders.filter((item) => item !== id) : [...doneReminders, id];
    setDoneReminders(updated);
    onNotify(updated.includes(id) ? 'Reminder marked complete ✅' : 'Reminder marked pending');
  };

  return (
    <div className="space-y-4">
      <Card title="Today’s maternal care tip" action={<VoiceButton enabled={profile.accessibility.voiceEnabled} text={todayTip.body} />}>
        <p className="text-sm font-semibold text-calm-700">{todayTip.title}</p>
        <p className="mt-1 text-sm text-rose-700">{todayTip.body}</p>
      </Card>

      <Card title="Mood and support check-in">
        <p className="text-sm text-rose-700">How are you feeling now?</p>
        <div className="mt-3 grid grid-cols-4 gap-2 text-lg">
          {['😌', '🙂', '😟', '😢'].map((mood) => (
            <button
              key={mood}
              className={`rounded-xl p-3 ${selectedMood === mood ? 'bg-calm-600 text-white' : 'bg-rose-50'}`}
              type="button"
              onClick={() => {
                setSelectedMood(mood);
                onNotify('Mood check-in saved');
              }}
            >
              {mood}
            </button>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <Card title="Baby tracker summary">
          <p className="text-sm font-semibold text-calm-700">Week {babySummary.week}</p>
          <p className="mt-1 text-xs text-rose-700">{babySummary.fruit}: {babySummary.sizeText}</p>
          <button className="mt-3 rounded-lg bg-calm-100 px-3 py-2 text-xs font-semibold" onClick={() => onNavigate('tracker')} type="button">
            Open tracker
          </button>
        </Card>

        <Card title="Nutrition today">
          <p className="text-sm font-semibold text-calm-700">{nutritionTipOfDay.title}</p>
          <button className="mt-3 rounded-lg bg-calm-100 px-3 py-2 text-xs font-semibold" onClick={() => onNavigate('care')} type="button">
            View meal tips
          </button>
        </Card>
      </div>

      <Card title="Latest community preview">
        <p className="text-xs uppercase tracking-wide text-calm-600">{communityPosts[0].category}</p>
        <p className="mt-1 text-sm text-rose-700">“{communityPosts[0].message}”</p>
        <button className="mt-3 w-full rounded-xl bg-calm-100 p-2 text-sm font-semibold text-calm-700" onClick={() => onNavigate('community')} type="button">
          Join conversation
        </button>
      </Card>

      <Card title="Care routine reminders">
        <div className="space-y-2">
          {reminders.slice(0, 4).map((reminder) => (
            <button key={reminder.id} type="button" className="w-full text-left" onClick={() => toggleDone(reminder.id)}>
              <div className={doneReminders.includes(reminder.id) ? 'opacity-60' : ''}>
                <ReminderCard reminder={{ ...reminder, title: `${doneReminders.includes(reminder.id) ? '✅ ' : ''}${reminder.title}` }} />
              </div>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HomePage;
