import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}