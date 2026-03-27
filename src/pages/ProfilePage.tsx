import { UserProfile } from '../types';
import Card from '../components/Card';

interface ProfilePageProps {
  profile: UserProfile;
  onReset: () => void;
  onUpdate: (profile: UserProfile) => void;
  onNotify: (message: string) => void;
}

const ProfilePage = ({ profile, onReset, onUpdate, onNotify }: ProfilePageProps) => {
}

const ProfilePage = ({ profile, onReset, onUpdate }: ProfilePageProps) => {
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
            <dt className="font-semibold text-calm-700">Due date / baby age</dt>
            <dd>{profile.dueDateOrBabyAge}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="font-semibold text-calm-700">Emergency contact</dt>
            <dd>{profile.emergencyContact || 'Not set yet'}</dd>
          </div>
        </dl>
      </Card>

      <Card title="Accessibility settings">
        <div className="space-y-2 text-sm text-rose-700">
          <label className="flex items-center justify-between gap-3 rounded-xl bg-rose-50 p-3">
            Large text mode
            <input
              type="checkbox"
              checked={profile.accessibility.largeText}
              onChange={(event) =>
                onUpdate({
                  ...profile,
                  accessibility: {
                    ...profile.accessibility,
                    largeText: event.target.checked
                  }
                })
              }
            />
          </label>
          <label className="flex items-center justify-between gap-3 rounded-xl bg-rose-50 p-3">
            High contrast mode
            <input
              type="checkbox"
              checked={profile.accessibility.highContrast}
              onChange={(event) =>
                onUpdate({
                  ...profile,
                  accessibility: {
                    ...profile.accessibility,
                    highContrast: event.target.checked
                  }
                })
              }
            />
          </label>
          <label className="flex items-center justify-between gap-3 rounded-xl bg-rose-50 p-3">
            Simplified view
            <input
              type="checkbox"
              checked={profile.accessibility.simplifiedView}
              onChange={(event) =>
                onUpdate({
                  ...profile,
                  accessibility: {
                    ...profile.accessibility,
                    simplifiedView: event.target.checked
                  }
                })
              }
            />
          </label>
          <label className="flex items-center justify-between gap-3 rounded-xl bg-rose-50 p-3">
            Voice support
            <input
              type="checkbox"
              checked={profile.accessibility.voiceEnabled}
              onChange={(event) =>
                onUpdate({
                  ...profile,
                  voiceEnabled: event.target.checked,
                  accessibility: {
                    ...profile.accessibility,
                    voiceEnabled: event.target.checked
                  }
                })
              }
            />
          </label>
        </div>

        <button
          className="mt-3 w-full rounded-xl bg-calm-100 p-3 text-sm font-semibold text-calm-700"
          type="button"
          onClick={() => onNotify('Voice demo placeholder: connected to browser text-to-speech in content cards.')}
        >
          Test voice support
        </button>
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
