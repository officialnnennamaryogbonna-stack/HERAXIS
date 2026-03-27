import Card from '../components/Card';
import ReminderCard from '../components/ReminderCard';
import VoiceButton from '../components/VoiceButton';
import { babyWeekUpdates, communityPosts, nutritionTipOfDay, reminders, todayTip } from '../data/mockData';
import { UserProfile } from '../types';

const HomePage = ({ profile }: { profile: UserProfile }) => {
  const week = profile.pregnancyWeek ?? 24;
  const babySummary =
    babyWeekUpdates.find((item) => Math.abs(item.week - week) < 4) ?? babyWeekUpdates[Math.floor(babyWeekUpdates.length / 2)];

  return (
    <div className="space-y-4">
      <Card title="Today’s maternal care tip" action={<VoiceButton enabled={profile.accessibility.voiceEnabled} text={todayTip.body} />}>
        <p className="text-sm font-semibold text-calm-700">{todayTip.title}</p>
        <p className="mt-1 text-sm text-rose-700">{todayTip.body}</p>
      </Card>

      <Card title="Mood and support check-in">
        <p className="text-sm text-rose-700">How are you feeling right now? Pick one and share later in community if you want.</p>
        <div className="mt-3 grid grid-cols-4 gap-2 text-lg">
          {['😌', '🙂', '😟', '😢'].map((mood) => (
            <button key={mood} className="rounded-xl bg-rose-50 p-3" type="button">
              {mood}
            </button>
          ))}
        </div>
      </Card>

      <Card title="Baby tracker summary">
        <p className="text-sm font-semibold text-calm-700">Week {babySummary.week}</p>
        <p className="text-sm text-rose-700">{babySummary.sizeText} ({babySummary.fruit}).</p>
        <p className="mt-1 text-xs text-rose-500">{babySummary.milestone}</p>
      </Card>

      <Card title="Nutrition tip of the day">
        <p className="text-sm font-semibold text-calm-700">{nutritionTipOfDay.title}</p>
        <p className="mt-1 text-sm text-rose-700">{nutritionTipOfDay.body}</p>
      </Card>

      <Card title="Emergency quick access">
        <button className="w-full rounded-xl bg-red-600 p-4 text-base font-semibold text-white" type="button">
          🚨 Tap for emergency help
        </button>
      </Card>

      <Card title="Latest community preview">
        <p className="text-xs uppercase tracking-wide text-calm-600">{communityPosts[0].category}</p>
        <p className="mt-1 text-sm text-rose-700">“{communityPosts[0].message}”</p>
      </Card>

      <Card title="Care routine reminders">
        <div className="space-y-2">
          {reminders.slice(0, 4).map((reminder) => (
            <ReminderCard key={reminder.id} reminder={reminder} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HomePage;
