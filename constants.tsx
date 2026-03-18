
import { Service, Feature } from './types';

export const SERVICES: Service[] = [
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'iOS, Android, and cross-platform apps with Flutter and React Native.',
    icon: 'smartphone',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
    features: [
      'iOS & Android Native',
      'Cross-Platform',
      'UX/UI Design'
    ]
  },
  {
    id: 'strategy',
    title: 'Software Strategy',
    description: 'Modernize your tech stack with expert architecture planning.',
    icon: 'insights',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    features: [
      'Legacy Modernization',
      'Cloud Planning',
      'CTO Advisory'
    ]
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'reliability',
    title: 'Unmatched Reliability',
    description: '99% on-time delivery. Consistent timelines you can count on.',
    icon: 'verified_user'
  },
  {
    id: 'expertise',
    title: 'Technical Expertise',
    description: 'Senior engineers who build systems that don\'t break.',
    icon: 'developer_mode_tv'
  },
  {
    id: 'growth',
    title: 'Strategic Growth',
    description: 'Technology decisions tied to real business outcomes.',
    icon: 'trending_up'
  }
];

import { AppInfo, PolicySection } from './types';

export const APPS: AppInfo[] = [
  { name: 'Smart Weather', description: 'Weather forecasting application' },
  { name: 'Wifi Smart Chat', description: 'File Transfer application' },
  { name: 'Smart Scanner', description: 'Camera document scanner and share' },
  { name: 'GPS Map Camera', description: 'Preserve and Relive Your Travel Adventures' },
  { name: 'Smart Fluid Particle', description: 'Create Stunning Artworks with Flowing Particles' },
  { name: 'Photo ID Editor', description: 'Professional Photo ID Editing Tool' },
  { name: 'NotifyVault', description: 'Smart Notification Manager and Backup' },
  { name: 'ScreenShotVault', description: 'Secure Screenshot Organizer and Storage' },
  { name: 'Girivalam Guide', description: 'Temple Pilgrimage Route Navigator' },
  { name: 'Healthier - Food Scanner', description: 'Food Nutrition Scanner and Health Tracker' },
];

export const POLICY_SECTIONS: PolicySection[] = [
  {
    id: 'introduction',
    title: 'Privacy Policy',
    lastUpdated: 'November 29, 2024',
    content: 'Techpro Mind LLC values your privacy. This policy explains how we handle your personal data across our applications and services, including:',
    listType: 'checkmark',
  },
  {
    id: 'types-of-data',
    title: 'Types of Data Collected',
    items: [
      'General Activity Data',
      'Cookies',
      'Location Data',
      'Usage Data'
    ],
    listType: 'checkmark',
  },
  {
    id: 'use-of-data',
    title: 'Use of Data and Sharing',
    content: 'We collect information to improve your experience with our apps and services.',
    items: [
      'Anonymous activity data is collected for statistical and service improvement purposes.',
      'Personal data is not shared with third parties except as stated in this policy.',
      'Your data is never used for advertising.'
    ],
    listType: 'bullet',
  },
  {
    id: 'location-services',
    title: 'Location Services',
    content: 'If enabled, approximate location may be collected using:',
    items: [
      'Cell ID',
      'GPS',
      'Wi-Fi'
    ],
    listType: 'bullet',
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    subSections: [
      {
        title: 'OpenWeather Ltd',
        content: 'Used for weather information. Anonymous, low-accuracy location data may be shared.'
      }
    ]
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: 'We use industry-standard security measures to protect your data from unauthorized access, loss, or misuse.',
    listType: 'bullet',
  },
  {
    id: 'childrens-policy',
    title: "Children's Usage and Content Policy",
    content: 'We are committed to a safe, family-friendly environment:',
    items: [
      'Our apps are designed to be safe for children',
      'Illegal content is strictly prohibited on our platforms',
      'Parents can confidently allow their children to use our apps'
    ],
    listType: 'bullet',
  },
  {
    id: 'gdpr-compliance',
    title: 'GDPR Compliance',
    content: 'In accordance with GDPR, we ensure:',
    items: [
      'Transparency and user control over personal data processing',
      'Secure data storage on servers in the U.S. or other regions',
      'Data retention only as necessary for service delivery'
    ],
    listType: 'bullet',
  },
  {
    id: 'retention-rights',
    title: 'Retention and User Rights',
    content: 'Users can request:',
    items: [
      'Data access',
      'Corrections or updates',
      'Data deletion or anonymization',
      'Objections to data processing'
    ],
    listType: 'bullet',
  },
  {
    id: 'legal-action',
    title: 'Legal Action and System Logs',
    content: 'User data may be disclosed to authorities if required by law. System logs may be collected for operational purposes.',
  },
  {
    id: 'changes-policy',
    title: 'Changes to This Policy',
    content: 'This policy may be updated periodically. Changes will be posted on this page.',
  },
  {
    id: 'contact-info',
    title: 'Contact Information',
    content: 'Techpro Mind LLC',
    subSections: [
      {
        title: 'Email',
        content: 'lead@techpromind.com'
      },
      {
        title: 'Website',
        content: 'https://techprominds.netlify.app/'
      }
    ]
  },
];
