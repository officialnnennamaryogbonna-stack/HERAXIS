import { CareTip, CommunityPost, Reminder } from '../types';

export const todayTip: CareTip = {
  title: 'Small steps matter today',
  body: 'Drink water regularly, rest when your body asks, and ask for support early. You deserve gentle care.'
};

export const reminders: Reminder[] = [
  { id: 'r1', title: 'Take iron supplement', time: '8:00 AM', type: 'medication' },
  { id: 'r2', title: 'Hydration break', time: '10:30 AM', type: 'hydration' },
  { id: 'r3', title: 'Clinic visit prep', time: '3:00 PM', type: 'clinic' },
  { id: 'r4', title: 'Breathing + mood check-in', time: '8:00 PM', type: 'mental' }
];

export const antenatalTips: CareTip[] = [
  { title: 'Trimester guidance', body: 'Track growth milestones and ask questions at each clinic visit.' },
  { title: 'Nutrition reminder', body: 'Add leafy greens, protein, and fruits to daily meals where possible.' },
  { title: 'Warning signs', body: 'Severe headache, bleeding, high fever, or reduced baby movement should be checked urgently.' },
  { title: 'Baby growth', body: 'Your baby develops steadily each week; gentle rest and nutrition support this journey.' }
];

export const postnatalTips: CareTip[] = [
  { title: 'Recovery support', body: 'Rest often and keep follow-up appointments after delivery.' },
  { title: 'Baby care basics', body: 'Skin-to-skin care, feeding support, and safe sleep routines can help.' },
  { title: 'Breastfeeding help', body: 'Try comfortable positions and seek local lactation support when needed.' },
  { title: 'Postpartum warning signs', body: 'Heavy bleeding, chest pain, fever, and deep sadness should be reviewed quickly.' }
];

export const affirmations = [
  'I am learning, growing, and doing my best each day.',
  'It is okay to ask for help. Support is a strength.',
  'My wellbeing matters just as much as my baby’s wellbeing.'
];

export const communityPosts: CommunityPost[] = [
  {
    id: 'c1',
    author: 'Amina',
    category: 'pregnancy journey',
    message: 'Today I reached 28 weeks. I feel hopeful and nervous. Any gentle sleep tips?',
    hearts: 18
  },
  {
    id: 'c2',
    author: 'Anonymous',
    category: 'emotional support',
    message: 'I cried a lot today. Reading everyone’s stories made me feel less alone.',
    hearts: 26
  },
  {
    id: 'c3',
    author: 'Maya',
    category: 'new motherhood',
    message: 'My baby latched better this morning. Small wins are still wins 💛',
    hearts: 34
  }
];

export const dangerSigns = [
  'Heavy bleeding or fluid leakage',
  'Severe abdominal pain or strong persistent contractions',
  'High fever, fainting, chest pain, or trouble breathing',
  'Thoughts of self-harm or hopelessness'
];
