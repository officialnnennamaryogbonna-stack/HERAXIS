import Card from '../components/Card';
import VoiceButton from '../components/VoiceButton';
import { dangerSigns, newMumGuidanceTips, nutritionTips, postpartumRecoveryTips, pregnancyHubTips } from '../data/mockData';
import { UserProfile } from '../types';

const CarePage = ({ profile }: { profile: UserProfile }) => {
  const voiceEnabled = profile.accessibility.voiceEnabled;

  return (
    <div className="space-y-4">
      <Card title="Pregnancy support hub">
        <p className="mb-3 text-sm text-rose-700">
          Trimester guidance, antenatal reminders, warning signs, hydration/rest support, and emotional wellness tips.
        </p>
        <div className="space-y-2">
          {pregnancyHubTips.map((tip) => (
            <article key={tip.title} className="rounded-xl bg-rose-50 p-3">
              <div className="mb-1 flex items-center justify-between gap-2">
                <h4 className="text-sm font-semibold text-calm-700">{tip.title}</h4>
                <VoiceButton enabled={voiceEnabled} text={`${tip.title}. ${tip.body}`} />
              </div>
              <p className="text-sm text-rose-700">{tip.body}</p>
            </article>
          ))}
        </div>
      </Card>

      <Card title="New mum guidance">
        <p className="mb-3 text-sm text-rose-700">
          Breastfeeding, baby basics, emotional support after delivery, and practical daily motherhood help.
        </p>
        <div className="space-y-2">
          {newMumGuidanceTips.map((tip) => (
            <article key={tip.title} className="rounded-xl bg-rose-50 p-3">
              <h4 className="text-sm font-semibold text-calm-700">{tip.title}</h4>
              <p className="text-sm text-rose-700">{tip.body}</p>
            </article>
          ))}
        </div>
      </Card>

      <Card title="Postpartum recovery">
        <div className="space-y-2">
          {postpartumRecoveryTips.map((tip) => (
            <article key={tip.title} className="rounded-xl bg-rose-50 p-3">
              <h4 className="text-sm font-semibold text-calm-700">{tip.title}</h4>
              <p className="text-sm text-rose-700">{tip.body}</p>
            </article>
          ))}
        </div>
      </Card>

      <Card title="Daily nutrition for mother and child">
        <div className="space-y-2">
          {nutritionTips.map((tip) => (
            <article key={tip.id} className="rounded-xl bg-rose-50 p-3">
              <p className="text-xs uppercase tracking-wide text-calm-600">{tip.forStage.replace('_', ' ')}</p>
              <h4 className="text-sm font-semibold text-calm-700">{tip.title}</h4>
              <p className="text-sm text-rose-700">{tip.body}</p>
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
      </Card>
    </div>
  );
};

export default CarePage;
