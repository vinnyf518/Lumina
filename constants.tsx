
import React from 'react';
import { NavItem, FeatureCard, FAQItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
];

export const FEATURES: FeatureCard[] = [
  {
    title: 'Bespoke Engineering',
    description: 'We build tailored digital solutions that solve real business problems. Every line of code is optimized for scale and security.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Strategic UI/UX',
    description: 'User experience is at the heart of what we do. We design interfaces that convert visitors into loyal customers.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Growth Marketing',
    description: 'A website is only as good as its performance. We integrate SEO and analytics to ensure your business continues to grow.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "CEO at FintechFlow",
    content: "Lumina Studio didn't just build us a website; they built us a platform. Our conversion rate increased by 40% in the first month.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Marcus Thorne",
    role: "Founder of Nexus Labs",
    content: "The level of technical depth and design polish is unmatched. They are truly the elite in modern web development.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    content: "Working with them was seamless. They understood our brand vision and executed it with absolute precision.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is your typical project timeline?",
    answer: "High-quality engineering takes time. Most bespoke projects range from 4 to 12 weeks depending on complexity."
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer: "Yes, we offer fully managed, edge-optimized hosting and monthly performance audits to keep your site in peak condition."
  },
  {
    question: "How do you handle branding?",
    answer: "We offer full-service identity design alongside development to ensure your digital presence is cohesive and impactful."
  }
];
