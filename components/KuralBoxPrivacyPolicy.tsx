
import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    id: 'introduction',
    title: 'Privacy Policy – Kural Box',
    lastUpdated: 'November 13, 2026',
    content: 'Techpro Mind LLC built the Kural Box app as a free, offline Thirukkural reader that lets you read, search, and reflect on the 1,330 couplets of the Thirukkural. This policy explains how Kural Box handles your information. In short: Kural Box works entirely on your device and does not collect, store, or share any personal data.',
  },
  {
    id: 'no-data-collection',
    title: 'Information We Do Not Collect',
    content: 'Kural Box is designed to respect your privacy by default. The app does not collect any of the following:',
    items: [
      'Personal information such as your name, email address, or phone number',
      'Account or login details – the app has no sign-up or sign-in',
      'Location data',
      'Contacts, photos, files, or other content on your device',
      'Advertising identifiers or tracking data',
    ],
    listType: 'bullet' as const,
    note: 'Kural Box does not require you to create an account and does not ask for any personal details to use the app.',
  },
  {
    id: 'offline',
    title: 'Offline & On-Device Use',
    content: 'All Thirukkural content is bundled inside the app and is available offline. Everything you do in the app stays on your device:',
    items: [
      'Thirukkural couplets, meanings, and chapters are read directly from the app',
      'Favorites, bookmarks, reading preferences, and settings are stored locally on your device only',
      'No reading history or usage activity is sent to us or to any third party',
    ],
    listType: 'bullet' as const,
  },
  {
    id: 'permissions',
    title: 'Device Permissions',
    content: 'Kural Box requests no sensitive permissions. It does not access your camera, microphone, location, contacts, or storage. The app functions fully without an internet connection.',
  },
  {
    id: 'no-ads-analytics',
    title: 'No Ads, Analytics, or Tracking',
    content: 'Kural Box contains no third-party advertising, no analytics, and no tracking SDKs. We do not profile you or monitor how you use the app.',
  },
  {
    id: 'data-sharing',
    title: 'Data Sharing',
    content: 'Because Kural Box does not collect any personal or usage data, there is nothing to sell, share, or transfer to third parties.',
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: 'Any favorites or settings you create remain on your own device under its built-in security. Uninstalling the app removes this local data. We never have access to it.',
  },
  {
    id: 'childrens',
    title: "Children's Privacy",
    content: 'Kural Box is suitable for all ages. It does not knowingly collect personal data from anyone, including children under 13, and contains no targeted advertising or in-app purchases.',
  },
  {
    id: 'user-rights',
    title: 'Your Control',
    content: 'You remain in full control of the small amount of data stored on your device:',
    items: [
      'Remove favorites and reset preferences at any time from within the app',
      'Clear all local app data through your device settings',
      'Uninstall the app to permanently delete any locally stored information',
    ],
    listType: 'bullet' as const,
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: 'We may update this policy from time to time. Any changes will be posted on this page with a revised "Last updated" date.',
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: 'For any questions about this privacy policy or the Kural Box app, contact us at:',
    items: [
      'Email: support@techpromindus.com',
      'Website: https://techpromindus.com/',
    ],
    listType: 'bullet' as const,
  },
];

const KuralBoxPrivacyPolicy: React.FC = () => {
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
                <span className="material-symbols-outlined text-white text-3xl">menu_book</span>
              </div>
              <div>
                <p className="text-white font-extrabold text-lg">Kural Box</p>
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

export default KuralBoxPrivacyPolicy;
