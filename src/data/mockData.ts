import { BabyWeekUpdate, CareTip, CommunityPost, NutritionTip, Reminder } from '../types';

export const todayTip: CareTip = {
  title: 'Gentle routine, stronger day',
  body: 'Start with water, a light meal, and a short rest pause. Small, steady care builds healthier days.'
};

export const nutritionTipOfDay: NutritionTip = {
  id: 'n-day',
  forStage: 'pregnancy',
  title: 'Add one colorful plate today',
  body: 'Try beans or eggs, leafy greens, and fruit. Sip water often through the day.'
};

export const reminders: Reminder[] = [
  { id: 'r1', title: 'Take iron supplement', time: '8:00 AM', type: 'medication' },
  { id: 'r2', title: 'Hydration break', time: '10:30 AM', type: 'hydration' },
  { id: 'r3', title: 'Clinic visit checklist', time: '2:30 PM', type: 'clinic' },
  { id: 'r4', title: 'Recovery rest moment', time: '4:00 PM', type: 'recovery' },
  { id: 'r5', title: 'Mood check-in and breathing', time: '8:00 PM', type: 'mental' }
];

export const trimesterTips: Record<'first' | 'second' | 'third', CareTip[]> = {
  first: [
    { title: 'Early care visit', body: 'Book your first antenatal visit early and track nausea, rest, and hydration.' },
    { title: 'Energy support', body: 'Small frequent meals and hydration can help when appetite is lower.' }
  ],
  second: [
    { title: 'Growth and movement', body: 'Notice changing body needs and discuss symptoms during checkups.' },
    { title: 'Light activity', body: 'If advised by your provider, gentle movement can support comfort and sleep.' }
  ],
  third: [
    { title: 'Birth planning', body: 'Prepare transport, emergency contact, and birth location in advance.' },
    { title: 'Warning sign review', body: 'Keep danger signs visible and seek urgent help early if symptoms appear.' }
  ]
};

export const pregnancyHubTips: CareTip[] = [
  { title: 'Antenatal care tip', body: 'Attend scheduled antenatal visits, even when you feel okay, to keep care proactive.' },
  { title: 'Common warning signs', body: 'Severe headache, bleeding, swelling, high fever, or reduced baby movement should be checked urgently.' },
  { title: 'Hydration + rest', body: 'Keep a water bottle nearby and pause for short rest periods during busy hours.' },
  { title: 'Pregnancy emotional wellness', body: 'Share your worries with a trusted person and practice one calming breath routine daily.' }
];

export const newMumGuidanceTips: CareTip[] = [
  { title: 'Breastfeeding support', body: 'Try comfortable feeding positions and seek lactation help if latching is painful.' },
  { title: 'Sleep and rest', body: 'Rest when baby rests when possible, and accept practical help from trusted people.' },
  { title: 'Baby care basics', body: 'Focus on feeding, warmth, diaper checks, and safe sleep positioning.' },
  { title: 'Emotional support after delivery', body: 'Your feelings matter. Gentle check-ins and support groups can reduce isolation.' },
  { title: 'Practical day-to-day tips', body: 'Keep essentials nearby and set one or two realistic goals each day.' }
];

export const postpartumRecoveryTips: CareTip[] = [
  { title: 'Healing + rest guidance', body: 'Support healing with fluids, nutrition, and regular rest moments.' },
  { title: 'Danger signs after childbirth', body: 'Heavy bleeding, chest pain, high fever, severe pain, or fainting need urgent care.' },
  { title: 'Emotional wellness support', body: 'If sadness feels intense or persistent, tell a health worker or trusted supporter quickly.' },
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

export const mealSuggestions = [
  { id: 'm1', forStage: 'pregnancy', meal: 'Bean stew + greens + millet porridge', hydration: '2 cups water before noon' },
  { id: 'm2', forStage: 'new_mother', meal: 'Egg wrap + fruit + yogurt', hydration: 'Keep bottle nearby during feeds' },
  { id: 'm3', forStage: 'baby', meal: 'Mashed sweet potato + lentil puree (age-appropriate)', hydration: 'Follow pediatric guidance' }
] as const;

export const babyWeekUpdates: BabyWeekUpdate[] = [
  {
    week: 12,
    fruit: 'Lime',
    sizeText: 'About the size of a lime',
    developmentNote: 'Tiny fingers and toes are becoming more defined.',
    milestone: 'Nervous system connections continue growing.'
  },
  {
    week: 16,
    fruit: 'Avocado',
    sizeText: 'About the size of an avocado',
    developmentNote: 'Baby’s movements may begin to feel noticeable for some mothers.',
    milestone: 'Facial muscles and reflexes continue developing.'
  },
  {
    week: 24,
    fruit: 'Corn',
    sizeText: 'About the size of an ear of corn',
    developmentNote: 'Baby responds more to sounds and familiar routines.',
    milestone: 'Lung development continues steadily.'
  },
  {
    week: 32,
    fruit: 'Coconut',
    sizeText: 'About the size of a small coconut',
    developmentNote: 'Baby gains weight and prepares for birth.',
    milestone: 'Sleep and wake cycles become clearer.'
  },
  {
    week: 36,
    fruit: 'Papaya',
    sizeText: 'About the size of a small papaya',
    developmentNote: 'Body systems are maturing for delivery.',
    milestone: 'Final growth and position changes occur.'
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
    hearts: 31,
    comments: 5
  },
  {
    id: 'c2',
    author: 'Anonymous',
    category: 'new mum life',
    message: 'I am learning to rest in short moments. Thank you for encouragement here.',
    hearts: 19,
    comments: 4
  },
  {
    id: 'c3',
    author: 'Maya',
    category: 'postpartum recovery',
    message: 'Small progress today: I ate well and took my recovery walk.',
    hearts: 23,
    comments: 3
  },
  {
    id: 'c4',
    author: 'Lina',
    category: 'baby care',
    message: 'Any tips for soothing evening fussiness? Soft singing helps us a little.',
    hearts: 15,
    comments: 8
  }
];

export const dangerSigns = [
  'Heavy bleeding, leaking fluid, or severe abdominal pain',
  'High fever, chest pain, fainting, or breathing difficulty',
  'Sudden swelling with severe headache or vision changes',
  'Feeling hopeless, unsafe, or having thoughts of self-harm'
];
