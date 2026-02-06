
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface AppInfo {
  name: string;
  description: string;
}

export interface SubSection {
  title: string;
  content: string;
}

export interface PolicySection {
  id: string;
  title: string;
  lastUpdated?: string;
  content?: string;
  items?: string[];
  subSections?: SubSection[];
  listType?: 'checkmark' | 'bullet';
}
