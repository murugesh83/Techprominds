
import { Service, Feature } from './types';

export const SERVICES: Service[] = [
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'From high-performance native iOS and Android apps to versatile cross-platform solutions using Flutter and React Native.',
    icon: 'smartphone',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
    features: [
      'Native iOS (Swift) & Android (Kotlin)',
      'Cross-platform Development',
      'UX/UI Mobile Product Design'
    ]
  },
  {
    id: 'strategy',
    title: 'Software Strategy',
    description: 'Expert digital transformation and architecture planning to modernize your technical infrastructure and roadmap for growth.',
    icon: 'insights',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    features: [
      'Legacy System Modernization',
      'Cloud Infrastructure Planning',
      'CTO-as-a-Service Advisory'
    ]
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'reliability',
    title: 'Unmatched Reliability',
    description: 'With a 99% delivery success rate, we pride ourselves on consistent timelines and robust project management you can trust.',
    icon: 'verified_user'
  },
  {
    id: 'expertise',
    title: 'Technical Expertise',
    description: 'Our core team consists of senior-level developers and architects with years of experience building mission-critical systems.',
    icon: 'developer_mode_tv'
  },
  {
    id: 'growth',
    title: 'Strategic Growth',
    description: 'We don\'t just write code; we build digital strategies that align with your long-term business goals and financial objectives.',
    icon: 'trending_up'
  }
];

import { AppInfo, PolicySection } from './types';

export const APPS: AppInfo[] = [
  { name: 'Smart Weather', description: 'Weather forecasting application' },
  { name: 'Smart Share', description: 'File Transfer application' },
  { name: 'Smart Scanner', description: 'Camera document scanner and share' },
  { name: 'GPS Map Camera', description: 'Preserve and Relive Your Travel Adventures' },
  { name: 'Smart Fluid Particle', description: 'Create Stunning Artworks with Flowing Particles' },
  { name: 'Photo ID Editor', description: 'Professional Photo ID Editing Tool' },
];

export const POLICY_SECTIONS: PolicySection[] = [
  {
    id: 'introduction',
    title: 'Privacy Policy',
    lastUpdated: 'November 29, 2024',
    content: 'We at Techpro Mind LLC value your trust and take the protection of your privacy and personal data seriously. This Privacy Policy outlines how we handle and safeguard the personal information you share while using Techpro Mind LLC\'s applications and services, including:',
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
    content: 'Techpro Mind LLC collects information to improve your experience with our applications and services.',
    items: [
      'We collect and analyze anonymous user activity data for statistical and service improvement purposes.',
      'Techpro Mind LLC does not share your personal data with third parties except as mentioned in this policy.',
      'We do not use your data for advertising purposes.'
    ],
    listType: 'bullet',
  },
  {
    id: 'location-services',
    title: 'Location Services',
    content: 'If enabled, Techpro Mind LLC may collect approximate location information using technologies such as:',
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
    content: 'We prioritize the security of your data and implement industry-standard measures to protect it from unauthorized access, loss, or misuse. Our systems are regularly monitored for vulnerabilities.',
    listType: 'bullet',
  },
  {
    id: 'childrens-policy',
    title: "Children's Usage and Content Policy",
    content: 'Techpro Mind LLC is committed to providing a safe and family-friendly environment:',
    items: [
      'Our applications are designed to be suitable and safe for children to use',
      'We strictly prohibit any form of illegal content on our platforms',
      'Parents and guardians can be confident in allowing their children to use our applications'
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
    content: 'Techpro Mind LLC may disclose user data to public authorities if required by law. System logs and other data may be collected for operational purposes.',
  },
  {
    id: 'changes-policy',
    title: 'Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time. Users will be notified of changes via this page.',
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
