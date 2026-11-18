export type RestaurantProduct = { id: string; name: string; icon: string; status: string; description: string };
export const PRODUCT_GROUPS: { title: string; products: RestaurantProduct[] }[] = [
  { title: 'Restaurant services', products: [
    { id: 'restaurant-website', name: 'Website Design & Management', icon: 'language', status: 'Available', description: 'A professional restaurant website with a digital menu, local SEO basics and ongoing updates. We keep your hours, prices and content current.' },
    { id: 'pos', name: 'Clover POS Installation', icon: 'point_of_sale', status: 'Setup review', description: 'Help setting up your Clover POS, configuring your restaurant menu and preparing your team for everyday use. We confirm hardware, account access and installation scope before we begin.' },
    { id: 'clover-printing', name: 'Clover Order Printing', icon: 'print', status: 'Setup review', description: 'Configure and test supported Clover order printing so your team can receive clear tickets. Printer models, network connections and ordering workflows are checked first.' },
    { id: 'pos-integrations', name: 'Website & POS Integration', icon: 'sync_alt', status: 'Setup review', description: 'Connect your new restaurant website to a supported POS workflow for direct ordering. We review your system, agree on what can connect and test the complete order journey before launch.' },
  ]},
];
