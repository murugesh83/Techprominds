export type RestaurantProduct = { id: string; name: string; icon: string; status: string; description: string };
export const PRODUCT_GROUPS: { title: string; products: RestaurantProduct[] }[] = [
  { title: 'Get discovered', products: [
    { id: 'restaurant-website', name: 'Restaurant Website', icon: 'language', status: 'Available', description: 'A mobile-friendly home for your restaurant, with photos, hours, directions and a clear path to ordering.' },
    { id: 'restaurant-seo', name: 'Restaurant SEO', icon: 'search', status: 'Planned', description: 'Search-friendly pages and local content to help people find your restaurant. Search rankings are never guaranteed.' },
    { id: 'online-menu', name: 'Online Menu', icon: 'format_list_bulleted', status: 'Available', description: 'Easy-to-browse categories, prices, item availability and staff updates.' },
    { id: 'reviews', name: 'Review Tools', icon: 'star', status: 'Planned', description: 'Review links, QR codes and owner-approved reply drafts to encourage honest customer feedback.' },
    { id: 'listings', name: 'Listings Management', icon: 'location_on', status: 'Planned', description: 'Keep business hours, contact details and location information consistent across supported business listings.' },
  ]},
  { title: 'Grow direct orders', products: [
    { id: 'online-ordering', name: 'Online Ordering', icon: 'shopping_bag', status: 'Available', description: 'Direct pickup ordering, checkout, online payments and order tracking, configured for your restaurant.' },
    { id: 'upsells', name: 'Smart Upsells', icon: 'trending_up', status: 'Planned', description: 'Relevant add-ons, meal combinations and item suggestions during checkout.' },
    { id: 'catering', name: 'Catering', icon: 'room_service', status: 'Planned', description: 'Catering inquiries, party-tray menus and scheduled orders for larger gatherings.' },
  ]},
  { title: 'Bring customers back', products: [
    { id: 'pos', name: 'Point of Sale', icon: 'point_of_sale', status: 'Exploring', description: 'A potential full POS offering. Our current service does not replace your restaurant’s point-of-sale system.' },
    { id: 'branded-app', name: 'Branded Restaurant App', icon: 'smartphone', status: 'Exploring', description: 'A dedicated restaurant app for repeat customers, ordering and brand engagement.' },
    { id: 'campaigns', name: 'Marketing Campaigns', icon: 'campaign', status: 'Planned', description: 'Permission-based email campaigns, promotions and offers with customer opt-out controls.' },
    { id: 'loyalty', name: 'Loyalty & Rewards', icon: 'workspace_premium', status: 'Planned', description: 'A future rewards program with clear earning rules, redemption options and restaurant controls.' },
  ]},
  { title: 'Run your restaurant', products: [
    { id: 'ai-assistant', name: 'Restaurant AI Assistant', icon: 'auto_awesome', status: 'Exploring', description: 'An assistant concept for summaries and suggested actions, with restaurant approval before operational changes.' },
    { id: 'dashboard', name: 'Management Dashboard', icon: 'dashboard', status: 'Available', description: 'A staff workspace to manage orders and review daily activity.' },
    { id: 'analytics', name: 'Reporting & Analytics', icon: 'monitoring', status: 'Available', description: 'Order reports, sales summaries and Excel downloads to help you review your business.' },
    { id: 'pos-integrations', name: 'POS Integrations', icon: 'print', status: 'Setup review', description: 'Supported Clover order printing after a compatibility check. Other POS systems require a separate assessment.' },
    { id: 'maintenance', name: 'Website Maintenance', icon: 'handyman', status: 'Available', description: 'Monthly menu changes, promotions, backups and monitoring within agreed support hours and update allowances.' },
  ]},
];
