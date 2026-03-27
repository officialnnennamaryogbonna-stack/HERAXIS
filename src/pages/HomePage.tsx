import Card from '../components/Card';
import ReminderCard from '../components/ReminderCard';
import VoiceButton from '../components/VoiceButton';
import { communityPosts, reminders, todayTip } from '../data/mockData';
import { UserProfile } from '../types';

const HomePage = ({ profile }: { profile: UserProfile }) => {
  return (
    <div className="space-y-4">
      <Card title="Today’s maternal tip" action={<VoiceButton enabled={profile.voiceEnabled} text={todayTip.body} />}>
        <p className="text-sm font-semibold text-calm-700">{todayTip.title}</p>
        <p className="mt-1 text-sm text-rose-700">{todayTip.body}</p>
      </Card>

      <Card title="Care reminders">
        <div className="space-y-2">
          {reminders.slice(0, 3).map((reminder) => (
            <ReminderCard key={reminder.id} reminder={reminder} />
          ))}
        </div>
      </Card>

      <Card title="Mood check-in">
        <p className="text-sm text-rose-700">How are you feeling right now?</p>
        <div className="mt-3 grid grid-cols-4 gap-2 text-lg">
          {['😌', '🙂', '😟', '😢'].map((mood) => (
            <button key={mood} className="rounded-xl bg-rose-50 p-2" type="button">
              {mood}
            </button>
          ))}
        </div>
      </Card>

      <Card title="Quick actions">
        <div className="grid grid-cols-2 gap-2">
          <button className="rounded-xl bg-red-500 p-3 text-sm font-semibold text-white" type="button">
            Emergency help
          </button>
          <button className="rounded-xl bg-calm-100 p-3 text-sm font-semibold text-calm-700" type="button">
            Next care task
          </button>
        </div>
      </Card>

      <Card title="Community highlights">
        <p className="text-sm text-rose-700">“{communityPosts[0].message}”</p>
      </Card>
    </div>
  );
};

export default HomePage;
