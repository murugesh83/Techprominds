
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { POLICY_SECTIONS, APPS } from '../constants';

const PrivacyPolicy: React.FC = () => {
  const { pathname } = useLocation();
  const slug = pathname.split('/')[2]?.toLowerCase() || '';
  const aliases: Record<string, string> = { smartscanner: 'smartdocscanner', 'smart-scanner': 'smartdocscanner', 'gps-map-camera': 'gpscamera', girivalam: 'tiruvannamalai', 'girivalam-guide': 'tiruvannamalai', 'wifi-smart-chat': 'smartshare', app: 'smartshare', 'photo-id-editor': 'passporteditor', 'smart-weather': 'smartweather', 'smart-fluid-particle': 'smartfluid', screenshotvault: 'screenvault' };
  const app = APPS.find(item => item.privacyPolicyPath === `/privacypolicy/${aliases[slug] || slug}`);

  const icons: Record<string, string> = { smartdocscanner: 'document_scanner', gpscamera: 'photo_camera', tiruvannamalai: 'temple_hindu', smartshare: 'wifi', passporteditor: 'badge', smartweather: 'partly_cloudy_day', smartfluid: 'water', notifyvault: 'notifications', screenvault: 'screenshot' };

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
          to={app ? "/privacypolicy" : "/"}
          className="mb-8 flex items-center gap-2 text-primary hover:text-white transition-colors font-bold uppercase tracking-widest text-sm"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          {app ? "Back to Privacy Policy" : "Back"}
        </Link>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Sidebar Navigation - Hidden on mobile, sticky on desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-28 space-y-4">
              <div>
                <h3 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Contents</h3>
                <div className="bg-slate-900/50 rounded-lg p-2 border border-slate-800 backdrop-blur-sm max-h-[40vh] overflow-y-auto custom-scrollbar">
                  {POLICY_SECTIONS.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors truncate"
                    >
                      {app && section.id === 'introduction' ? `Privacy Policy – ${app.name}` : section.title}
                    </a>
                  ))}
                </div>
              </div>

              {!app && <div>
                <h3 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Our Apps</h3>
                <div className="bg-slate-900/50 rounded-lg p-2 border border-slate-800 backdrop-blur-sm max-h-[40vh] overflow-y-auto custom-scrollbar">
                  {APPS.map((app) => {
                    return app.privacyPolicyPath ? (
                      <Link
                        key={app.name}
                        to={app.privacyPolicyPath}
                        className="flex items-center justify-between gap-2 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors group"
                      >
                        <span className="truncate">{app.name}</span>
                        <span className="material-symbols-outlined text-primary text-sm flex-shrink-0">open_in_new</span>
                      </Link>
                    ) : (
                      <div key={app.name} className="flex items-center gap-2 px-3 py-2 text-sm text-slate-400 rounded-md truncate">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-600 flex-shrink-0"></span>
                        <span className="truncate">{app.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 space-y-16">
            <div className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-2xl w-fit">
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30"><span className="material-symbols-outlined text-white text-3xl" aria-hidden="true">{app ? icons[aliases[slug] || slug] || 'apps' : 'privacy_tip'}</span></div>
              <div><p className="text-white font-extrabold text-lg">{app?.name || "Privacy Center"}</p><p className="text-slate-400 text-sm">by Techpro Minds LLC</p></div>
            </div>
            {POLICY_SECTIONS.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                {index === 0 ? (
                  <div className="mb-12">
                    <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">{app ? `Privacy Policy – ${app.name}` : section.title}</h1>
                    {section.lastUpdated && (
                      <div className="text-slate-500 font-medium mb-8 text-sm">
                        Last updated: {section.lastUpdated}
                      </div>
                    )}
                    {section.content && (
                      <p className="text-base font-medium text-slate-300 mb-6">
                        {app ? section.content.replace('across our applications and services, including:', `for ${app.name}.`) : section.content}
                      </p>
                    )}
                    {/* Render apps list for introduction if needed */}
                    {!app && section.id === 'introduction' && APPS.length > 0 && (
                      <div className="grid gap-3 mt-6 sm:grid-cols-2">
                        {APPS.map((app) => {
                          const hasPolicy = Boolean(app.privacyPolicyPath);
                          const card = (
                            <div key={app.name} className={`flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg border transition-colors ${hasPolicy ? 'border-primary/50 hover:border-primary cursor-pointer hover:bg-slate-800/80' : 'border-slate-800'}`}>
                              <span className="material-symbols-outlined text-white bg-primary rounded-xl p-3 text-2xl" aria-hidden="true">{icons[app.privacyPolicyPath?.split("/").pop() || ""] || (app.name === "Kural Box" ? "menu_book" : "nutrition")}</span>
                              <div className="flex-1">
                                <h4 className="font-bold text-white text-sm">{app.name}</h4>
                                <p className="text-xs text-slate-400">{app.description}</p><span className="block mt-2 text-xs font-semibold text-slate-200">View privacy policy →</span>
                              </div>
                              {hasPolicy && (
                                <span className="material-symbols-outlined text-primary text-sm mt-0.5">open_in_new</span>
                              )}
                            </div>
                          );
                          return hasPolicy ? (
                            <Link key={app.name} to={app.privacyPolicyPath!}>{card}</Link>
                          ) : card;
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-tight border-b border-slate-700 pb-2">
                      {section.title}
                    </h2>

                    {section.content && (
                      <p className="text-sm font-medium text-slate-300 mb-4">
                        {section.content}
                      </p>
                    )}

                    {section.items && (
                      <ul className="space-y-3 mb-6">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm">
                            {section.listType === 'checkmark' ? (
                              <span className="material-symbols-outlined text-primary mt-0.5 text-base">check</span>
                            ) : (
                              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                            )}
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.subSections && (
                      <div className="space-y-4 mt-4 pl-4 border-l-2 border-slate-800">
                        {section.subSections.map((sub, idx) => (
                          <div key={idx}>
                            <h3 className="text-lg font-bold text-white mb-1">{sub.title}</h3>
                            {sub.title === 'Email' ? (
                              <a href={`mailto:${sub.content}`} className="text-primary hover:text-white transition-colors text-sm font-medium">
                                {sub.content}
                              </a>
                            ) : sub.title === 'Website' ? (
                              <a href={sub.content} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors text-sm font-medium">
                                {sub.content}
                              </a>
                            ) : (
                              <p className="text-slate-400 text-sm">{sub.content}</p>
                            )}
                          </div>
                        ))}
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

export default PrivacyPolicy;
