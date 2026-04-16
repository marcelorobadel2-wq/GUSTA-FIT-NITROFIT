import React from 'react';

export interface Problem {
  icon: React.ReactNode;
  text: string;
}

export interface Pillar {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Bonus {
  title: string;
  value: number;
}

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  rating: number;
  text: string;
  avatar: string;
}

export interface ComparisonRow {
  feature: string;
  studio: string | boolean;
  online: string | boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}