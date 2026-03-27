import Card from '../components/Card';
import VoiceButton from '../components/VoiceButton';
import { dangerSigns } from '../data/mockData';
import { UserProfile } from '../types';

const EmergencyPage = ({ profile }: { profile: UserProfile }) => {
  return (
    <div className="space-y-4">
      <Card title="Emergency support" action={<VoiceButton enabled={profile.voiceEnabled} text="If you are in danger, tap emergency help and call your closest clinic now." />}>
        <button className="mb-2 w-full rounded-xl bg-red-600 p-4 text-base font-bold text-white" type="button">
          🚨 One-tap emergency help
        </button>
        <div className="grid grid-cols-2 gap-2">
          <button className="rounded-xl bg-rose-100 p-3 text-sm font-semibold text-calm-700" type="button">
            Call emergency contact
          </button>
          <button className="rounded-xl bg-rose-100 p-3 text-sm font-semibold text-calm-700" type="button">
            Nearby clinic
          </button>
        </div>
      </Card>

      <Card title="Danger signs checklist">
        <ul className="space-y-2">
          {dangerSigns.map((sign) => (
            <li key={sign} className="rounded-xl bg-rose-50 p-3 text-sm text-rose-700">
              • {sign}
            </li>
          ))}
        </ul>
      </Card>

      <Card title="When to seek urgent help">
        <p className="text-sm text-rose-700">
          Seek urgent care if symptoms are severe, sudden, or do not improve quickly. Trust your instincts and ask for help early.
        </p>
      </Card>
    </div>
  );
};

export default EmergencyPage;
