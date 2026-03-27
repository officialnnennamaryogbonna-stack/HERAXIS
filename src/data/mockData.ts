import { BabyWeekUpdate, CareTip, CommunityPost, NutritionTip, Reminder } from '../types';

export const todayTip: CareTip = {
  title: 'Gentle routine, stronger day',
  body: 'Start with water, a light meal, and a short rest pause. Small, steady care builds healthier days.'
};

export const nutritionTipOfDay: NutritionTip = {
  id: 'n-day',
  forStage: 'pregnancy',
  title: 'Add one colorful plate today',
  body: 'Try a simple plate with beans or eggs, leafy greens, and fruit. Sip water often through the day.'
};

export const reminders: Reminder[] = [
  { id: 'r1', title: 'Take iron supplement', time: '8:00 AM', type: 'medication' },
  { id: 'r2', title: 'Hydration break', time: '10:30 AM', type: 'hydration' },
  { id: 'r3', title: 'Clinic visit checklist', time: '2:30 PM', type: 'clinic' },
  { id: 'r4', title: 'Recovery rest moment', time: '4:00 PM', type: 'recovery' },
  { id: 'r5', title: 'Mood check-in and breathing', time: '8:00 PM', type: 'mental' }
];

export const pregnancyHubTips: CareTip[] = [
  { title: 'Trimester guidance', body: 'Track your trimester and note symptoms before clinic visits for better support conversations.' },
  { title: 'Antenatal care tip', body: 'Attend scheduled antenatal visits, even when you feel okay, to keep care proactive.' },
  { title: 'Common warning signs', body: 'Severe headache, bleeding, swelling, high fever, or reduced baby movement should be checked urgently.' },
  { title: 'Hydration + rest', body: 'Keep a water bottle nearby and pause for short rest periods during busy hours.' },
  { title: 'Pregnancy emotional wellness', body: 'Share your worries with a trusted person and practice one calming breath routine daily.' }
];

export const newMumGuidanceTips: CareTip[] = [
  { title: 'Breastfeeding support', body: 'Try comfortable feeding positions and seek local lactation help when latching is painful.' },
  { title: 'Sleep and rest', body: 'Rest when baby rests when possible, and accept practical help from trusted family/friends.' },
  { title: 'Baby care basics', body: 'Focus on feeding, warmth, diaper checks, and safe sleep positioning.' },
  { title: 'Emotional support after delivery', body: 'Your feelings matter. Gentle check-ins and support groups can reduce isolation.' },
  { title: 'Practical day-to-day tips', body: 'Prepare small meal batches, keep essentials in one basket, and set realistic daily goals.' }
];

export const postpartumRecoveryTips: CareTip[] = [
  { title: 'Healing + rest guidance', body: 'Support healing with fluids, nutrition, and regular rest moments throughout the day.' },
  { title: 'Danger signs after childbirth', body: 'Heavy bleeding, chest pain, high fever, severe pain, or fainting need urgent care.' },
  { title: 'Emotional wellness support', body: 'If sadness feels intense or persistent, tell a health worker or trusted supporter quickly.' },
  { title: 'Recovery reminders', body: 'Take medications as advised and attend your follow-up appointments.' },
  { title: 'When to seek medical help', body: 'Seek help early whenever symptoms worsen suddenly or feel unsafe.' }
];

export const nutritionTips: NutritionTip[] = [
  {
    id: 'n1',
    forStage: 'pregnancy',
    title: 'Pregnancy daily nutrition',
    body: 'Choose whole grains, protein, vegetables, and fruits. Add calcium-rich foods where available.'
  },
  {
    id: 'n2',
    forStage: 'new_mother',
    title: 'New mother nourishment',
    body: 'Eat regular meals, hydrate often, and include iron/protein foods to support recovery and breastfeeding.'
  },
  {
    id: 'n3',
    forStage: 'baby',
    title: 'Baby and young child nutrition',
    body: 'Follow age-appropriate feeding advice and continue clinic growth checks for confidence.'
  }
];

export const babyWeekUpdates: BabyWeekUpdate[] = [
  {
    week: 16,
    fruit: 'Avocado',
    sizeText: 'About the size of an avocado',
    developmentNote: 'Baby’s movements begin to feel more noticeable for some mothers.',
    milestone: 'Facial muscles and reflexes continue developing.'
  },
  {
    week: 24,
    fruit: 'Corn',
    sizeText: 'About the size of an ear of corn',
    developmentNote: 'Baby responds more to sounds and routines around you.',
    milestone: 'Lung development continues steadily.'
  },
  {
    week: 32,
    fruit: 'Coconut',
    sizeText: 'About the size of a small coconut',
    developmentNote: 'Baby is gaining weight and preparing for birth.',
    milestone: 'Sleep and wake cycles become clearer.'
  }
];

export const affirmations = [
  'I am worthy of care, kindness, and rest.',
  'Asking for support is a brave and healthy step.',
  'I can take this journey one calm moment at a time.'
];

export const communityPosts: CommunityPost[] = [
  {
    id: 'c1',
    author: 'Amina',
    category: 'pregnancy journey',
    message: 'I felt baby kicks more this week. It made me smile all day.',
    hearts: 31
  },
  {
    id: 'c2',
    author: 'Anonymous',
    category: 'new mum life',
    message: 'I am learning to rest in short moments. Thank you for the encouragement here.',
    hearts: 19
  },
  {
    id: 'c3',
    author: 'Maya',
    category: 'postpartum recovery',
    message: 'Small progress today: I ate well and took my recovery walk.',
    hearts: 23
  },
  {
    id: 'c4',
    author: 'Lina',
    category: 'baby care',
    message: 'Any tips for soothing evening fussiness? Soft singing helps us a little.',
    hearts: 15
  }
];

export const dangerSigns = [
  'Heavy bleeding, leaking fluid, or severe abdominal pain',
  'High fever, chest pain, fainting, or breathing difficulty',
  'Sudden swelling with severe headache or vision changes',
  'Feeling hopeless, unsafe, or having thoughts of self-harm'
];
