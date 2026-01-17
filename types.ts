export type AgeGroup = 'baby' | '3-5' | '6-10';
export type LessonLevel = 'adaptation' | 'initiation' | 'improvement';
export type ActivityType = 'warmup' | 'main' | 'fun';

export interface Activity {
  id: string;
  title: string;
  description: string;
  materials: string[];
  type: ActivityType;
  age: AgeGroup[];
  level: LessonLevel[];
  durationMin: number;
  tip?: string;
}

export interface LessonPlan {
  id: string;
  date: string;
  ageGroup: AgeGroup;
  level: LessonLevel;
  studentCount: number;
  activities: {
    warmup: Activity;
    main: Activity;
    fun: Activity;
  };
  completed: boolean;
  feedback?: 'happy' | 'neutral' | 'sad';
}

export interface User {
  name: string;
  email: string;
}

export interface FilterCriteria {
  studentCount: number;
  ageGroup: AgeGroup;
  level: LessonLevel;
}