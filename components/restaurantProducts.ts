export type RestaurantProduct = { id: string; name: string; icon: string; status: string; description: string };
export const PRODUCT_GROUPS: { title: string; products: RestaurantProduct[] }[] = [
  { title: 'Our services', products: [
    { id: 'restaurant-website', name: 'Website Design & Management', icon: 'language', status: 'Available', description: 'A professional restaurant website with a digital menu, local SEO basics and ongoing updates. We keep your hours, prices and content current.' },
    { id: 'pos', name: 'Clover POS Installation', icon: 'point_of_sale', status: 'Setup review', description: 'Help setting up your Clover POS, configuring your restaurant menu and preparing your team for everyday use. We confirm hardware, account access and installation scope before we begin.' },
    { id: 'clover-printing', name: 'Clover Order Printing', icon: 'print', status: 'Setup review', description: 'Configure and test supported Clover order printing so your team can receive clear tickets. Printer models, network connections and ordering workflows are checked first.' },
    { id: 'pos-integrations', name: 'Website & POS Integration', icon: 'sync_alt', status: 'Setup review', description: 'Connect your new restaurant website to a supported POS workflow for direct ordering. We review your system, agree on what can connect and test the complete order journey before launch.' },
    { id: 'software-it-consulting', name: 'Software & IT Consulting', icon: 'support_agent', status: 'Available', description: 'Practical guidance for your software and business systems. We review your needs, recommend the right approach and help plan improvements, integrations and ongoing support.' },
    { id: 'mobile-app-development', name: 'Mobile App Development', icon: 'smartphone', status: 'Available', description: 'Turn your idea into a mobile app built around your users. From planning and interface design to development, testing and release support, we help you move from concept to launch.' },
    { id: 'ai-agents-automation', name: 'AI Agents & Business Automation', icon: 'auto_awesome', status: 'Setup review', description: 'Save time on everyday tasks with AI assistants tailored to your business. We help automate customer inquiries, organize information and connect workflows—with your team in control.' },
  ]},
];
