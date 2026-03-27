export type MaternalStage = 'pregnant' | 'teen_mother' | 'new_mother';
export type SupportNeed = 'health' | 'emotional' | 'emergency' | 'community';

export interface UserProfile {
  stage: MaternalStage;
  language: string;
  voiceEnabled: boolean;
  dueDateOrBabyAge: string;
  supportNeeds: SupportNeed[];
  emergencyContact: string;
}

export interface Reminder {
  id: string;
  title: string;
  time: string;
  type: 'medication' | 'clinic' | 'hydration' | 'rest' | 'babycare' | 'mental';
}

export interface CommunityPost {
  id: string;
  author: string;
  category: 'pregnancy journey' | 'new motherhood' | 'emotional support' | 'questions and advice';
  message: string;
  hearts: number;
}

export interface CareTip {
  title: string;
  body: string;
}
