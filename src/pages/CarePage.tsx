import Card from '../components/Card';
import VoiceButton from '../components/VoiceButton';
import { antenatalTips, postnatalTips } from '../data/mockData';
import { UserProfile } from '../types';

const CarePage = ({ profile }: { profile: UserProfile }) => {
  return (
    <div className="space-y-4">
      <Card title="Antenatal care">
        <p className="mb-3 text-sm text-rose-700">Trimester tips, nutrition reminders, and warning signs.</p>
        <div className="space-y-2">
          {antenatalTips.map((tip) => (
            <article key={tip.title} className="rounded-xl bg-rose-50 p-3">
              <div className="mb-1 flex items-center justify-between gap-2">
                <h4 className="text-sm font-semibold text-calm-700">{tip.title}</h4>
                <VoiceButton enabled={profile.voiceEnabled} text={`${tip.title}. ${tip.body}`} />
              </div>
              <p className="text-sm text-rose-700">{tip.body}</p>
            </article>
          ))}
        </div>
      </Card>

      <Card title="Postnatal care">
        <p className="mb-3 text-sm text-rose-700">Recovery care, breastfeeding support, and follow-up reminders.</p>
        <div className="space-y-2">
          {postnatalTips.map((tip) => (
            <article key={tip.title} className="rounded-xl bg-rose-50 p-3">
              <h4 className="text-sm font-semibold text-calm-700">{tip.title}</h4>
              <p className="text-sm text-rose-700">{tip.body}</p>
            </article>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CarePage;
