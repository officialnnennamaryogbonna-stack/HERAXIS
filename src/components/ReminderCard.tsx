import { Reminder } from '../types';

const iconByType: Record<Reminder['type'], string> = {
  medication: '💊',
  clinic: '🏥',
  hydration: '💧',
  rest: '🛌',
  babycare: '🍼',
  mental: '🌼',
  recovery: '❤️'
};

const ReminderCard = ({ reminder }: { reminder: Reminder }) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-rose-50 p-3">
      <p className="text-sm text-calm-700">
        <span className="mr-2">{iconByType[reminder.type]}</span>
        {reminder.title}
      </p>
      <p className="text-xs font-semibold text-calm-600">{reminder.time}</p>
    </div>
  );
};

export default ReminderCard;
