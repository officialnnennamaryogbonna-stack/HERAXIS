export type MaternalStage = 'pregnant' | 'teen_mother' | 'new_mother';
export type SupportNeed = 'health' | 'emotional' | 'emergency' | 'community';

export interface AccessibilitySettings {
  largeText: boolean;
  highContrast: boolean;
  voiceEnabled: boolean;
}

export interface UserProfile {
  stage: MaternalStage;
  language: string;
  voiceEnabled: boolean;
  dueDateOrBabyAge: string;
  supportNeeds: SupportNeed[];
  emergencyContact: string;
  pregnancyWeek?: number;
  accessibility: AccessibilitySettings;
}

export interface Reminder {
  id: string;
  title: string;
  time: string;
  type: 'medication' | 'clinic' | 'hydration' | 'rest' | 'babycare' | 'mental' | 'recovery';
}

export interface CommunityPost {
  id: string;
  author: string;
  category: 'pregnancy journey' | 'new mum life' | 'postpartum recovery' | 'baby care' | 'emotional support';
  message: string;
  hearts: number;
}

export interface CareTip {
  title: string;
  body: string;
}

export interface BabyWeekUpdate {
  week: number;
  fruit: string;
  sizeText: string;
  developmentNote: string;
  milestone: string;
}

export interface NutritionTip {
  id: string;
  forStage: 'pregnancy' | 'new_mother' | 'baby';
  title: string;
  body: string;
}
