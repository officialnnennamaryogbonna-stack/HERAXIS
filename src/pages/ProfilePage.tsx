import { UserProfile } from '../types';
import Card from '../components/Card';

interface ProfilePageProps {
  profile: UserProfile;
  onReset: () => void;
}

const ProfilePage = ({ profile, onReset }: ProfilePageProps) => {
  return (
    <div className="space-y-4">
      <Card title="My profile">
        <dl className="space-y-2 text-sm text-rose-700">
          <div className="flex justify-between gap-3">
            <dt className="font-semibold text-calm-700">Maternal stage</dt>
            <dd>{profile.stage.replace('_', ' ')}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="font-semibold text-calm-700">Language</dt>
            <dd>{profile.language}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="font-semibold text-calm-700">Voice support</dt>
            <dd>{profile.voiceEnabled ? 'Enabled' : 'Disabled'}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="font-semibold text-calm-700">Due date / baby age</dt>
            <dd>{profile.dueDateOrBabyAge}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="font-semibold text-calm-700">Emergency contact</dt>
            <dd>{profile.emergencyContact || 'Not set yet'}</dd>
          </div>
        </dl>
      </Card>

      <Card title="Support preferences">
        <ul className="list-inside list-disc text-sm text-rose-700">
          {profile.supportNeeds.map((need) => (
            <li key={need}>{need}</li>
          ))}
        </ul>
      </Card>

      <button className="w-full rounded-xl bg-rose-100 p-3 text-sm font-semibold text-calm-700" onClick={onReset} type="button">
        Restart onboarding
      </button>
    </div>
  );
};

export default ProfilePage;
