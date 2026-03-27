import Card from '../components/Card';
import { babyWeekUpdates } from '../data/mockData';
import { UserProfile } from '../types';

const BabyTrackerPage = ({ profile }: { profile: UserProfile }) => {
  const currentWeek = profile.pregnancyWeek ?? 24;
  const nearestWeek = babyWeekUpdates.reduce((best, current) =>
    Math.abs(current.week - currentWeek) < Math.abs(best.week - currentWeek) ? current : best
  );

  return (
    <div className="space-y-4">
      <Card title="Your pregnancy week tracker">
        <p className="text-sm text-rose-700">Current week: {currentWeek}</p>
        <div className="mt-3 rounded-xl bg-calm-100 p-3">
          <p className="text-xs uppercase tracking-wide text-calm-600">This week’s baby growth</p>
          <p className="text-lg font-semibold text-calm-700">{nearestWeek.fruit} week ({nearestWeek.week})</p>
          <p className="text-sm text-rose-700">{nearestWeek.sizeText}</p>
          <p className="mt-1 text-sm text-rose-700">{nearestWeek.developmentNote}</p>
          <p className="mt-1 text-xs text-rose-500">Milestone: {nearestWeek.milestone}</p>
        </div>
      </Card>

      <Card title="Weekly growth timeline">
        <div className="space-y-2">
          {babyWeekUpdates.map((update) => (
            <article
              key={update.week}
              className={`rounded-xl p-3 ${update.week === nearestWeek.week ? 'bg-calm-100' : 'bg-rose-50'}`}
            >
              <p className="text-sm font-semibold text-calm-700">Week {update.week} • {update.fruit}</p>
              <p className="text-sm text-rose-700">{update.developmentNote}</p>
              <p className="text-xs text-rose-500">{update.milestone}</p>
            </article>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default BabyTrackerPage;
