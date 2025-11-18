import React from 'react';

export interface Specialist {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
}

export interface ServicePillar {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

export enum AiStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}