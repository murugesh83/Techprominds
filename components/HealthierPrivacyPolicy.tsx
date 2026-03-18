
import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    id: 'introduction',
    title: 'Privacy Policy – Healthier: Food Scanner',
    lastUpdated: 'March 18, 2026',
    content: 'Techpro Mind LLC built the Healthier – Food Scanner app to help users track nutrition and make healthier food choices. This policy explains how we handle your data when you use the app.',
  },
  {
    id: 'health-data',
    title: 'Health & Nutrition Data',
    content: 'Healthier – Food Scanner may access and process the following health-related information:',
    items: [
      'Food items scanned or searched by the user',
      'Nutritional information (calories, macros, vitamins, minerals)',
      'Dietary preferences and restrictions you set in the app',
      'Meal logs and food history you create within the app',
    ],
    listType: 'bullet' as const,
    note: 'This data is stored locally on your device and is not transmitted to our servers unless you explicitly enable cloud sync.',
  },
  {
    id: 'camera',
    title: 'Camera Access',
    content: 'The app uses your device camera solely to scan food barcodes and recognize food items. Camera data is:',
    items: [
      'Processed in real time on your device only',
      'Never stored, recorded, or transmitted to external servers',
      'Only accessed when you actively open the scanner in the app',
    ],
    listType: 'bullet' as const,
  },
  {
    id: 'data-collection',
    title: 'Data We Collect',
    content: 'We collect minimal, anonymous data to improve the app:',
    items: [
      'Anonymous usage statistics (e.g., features used, crash reports)',
      'App performance and diagnostic data',
      'No personally identifiable information is collected without your consent',
    ],
    listType: 'bullet' as const,
  },
  {
    id: 'data-sharing',
    title: 'Data Sharing',
    content: 'We do not sell or share your personal or health data with third parties, except:',
    items: [
      'Nutritional database lookups via third-party food APIs (anonymous queries only)',
      'When required by law or legal process',
    ],
    listType: 'bullet' as const,
  },
  {
    id: 'third-party',
    title: 'Third-Party Services',
    content: 'The app may use the following third-party services for food data lookup:',
    items: [
      'Open Food Facts – open-source food product database (anonymous queries)',
      'USDA FoodData Central – nutritional reference database (anonymous queries)',
    ],
    listType: 'bullet' as const,
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: 'We apply industry-standard security practices to protect your data. All food logs and health information you store in the app remain on your device and are not accessible to us.',
  },
  {
    id: 'childrens',
    title: "Children's Privacy",
    content: 'Healthier – Food Scanner is designed to be safe for all ages. We do not knowingly collect personal data from children under 13. The app contains no ads or in-app purchases targeting minors.',
  },
  {
    id: 'user-rights',
    title: 'Your Rights',
    content: 'You have full control over your data:',
    items: [
      'Delete your food logs and history at any time from within the app',
      'Revoke camera permission at any time via your device settings',
      'Request data deletion by contacting us at lead@techpromind.com',
    ],
    listType: 'bullet' as const,
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: 'We may update this policy periodically. Changes will be posted on this page with an updated date.',
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: 'For privacy questions or data requests related to Healthier – Food Scanner, contact us at:',
    items: [
      'Email: lead@techpromind.com',
      'Website: https://techprominds.netlify.app/',
    ],
    listType: 'bullet' as const,
  },
];

const HealthierPrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300 py-20 font-['Inter']">
      <style>{`
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #475569; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #475569; border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #64748b; }
      `}</style>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link
          to="/privacypolicy"
          className="mb-8 flex items-center gap-2 text-primary hover:text-white transition-colors font-bold uppercase tracking-widest text-sm"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Privacy Policy
        </Link>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-8 space-y-1">
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contents</h3>
              <div className="bg-slate-900/50 rounded-lg p-2 border border-slate-800 backdrop-blur-sm max-h-[80vh] overflow-y-auto custom-scrollbar">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors truncate"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 space-y-16">
            {/* App badge */}
            <div className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-2xl w-fit">
              <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined text-white text-3xl">nutrition</span>
              </div>
              <div>
                <p className="text-white font-extrabold text-lg">Healthier – Food Scanner</p>
                <p className="text-slate-400 text-sm">by Techpro Mind LLC</p>
              </div>
            </div>

            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-8">
                {index === 0 ? (
                  <div className="mb-4">
                    <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">{section.title}</h1>
                    <div className="text-slate-500 font-medium mb-8 text-sm">
                      Last updated: {section.lastUpdated}
                    </div>
                    <p className="text-base font-medium text-slate-300">{section.content}</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-tight border-b border-slate-700 pb-2">
                      {section.title}
                    </h2>
                    {section.content && (
                      <p className="text-sm font-medium text-slate-300 mb-4">{section.content}</p>
                    )}
                    {section.items && (
                      <ul className="space-y-3 mb-4">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {'note' in section && section.note && (
                      <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-xl text-sm text-primary font-medium">
                        {section.note}
                      </div>
                    )}
                  </>
                )}
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default HealthierPrivacyPolicy;
