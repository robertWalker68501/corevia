import {
  BarChart3,
  Boxes,
  ClipboardList,
  Truck,
  Users,
  Warehouse,
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const NAV_LINKS = [
  {
    id: 1,
    label: 'Features',
    href: '/features',
  },
  {
    id: 2,
    label: 'Solutions',
    href: '/solutions',
  },
  {
    id: 3,
    label: 'Pricing',
    href: '/pricing',
  },
  {
    id: 4,
    label: 'Resources',
    href: '/resources',
  },
  {
    id: 5,
    label: 'About',
    href: '/about',
  },
];

export const FEATURES = [
  {
    title: 'Customer management',
    description:
      'Keep customer profiles, contacts, sales activity, orders, and account history organized in one place.',
    icon: Users,
  },
  {
    title: 'Supplier operations',
    description:
      'Track supplier relationships, purchase orders, lead times, pricing, and performance from a single workspace.',
    icon: Truck,
  },
  {
    title: 'Inventory visibility',
    description:
      'See stock levels, movements, reorder points, and inventory value across every warehouse and location.',
    icon: Boxes,
  },
  {
    title: 'Order management',
    description:
      'Manage sales and purchase orders from creation through fulfillment with clear status tracking.',
    icon: ClipboardList,
  },
  {
    title: 'Warehouse control',
    description:
      'Coordinate receiving, storage, picking, packing, and transfers across your warehouse network.',
    icon: Warehouse,
  },
  {
    title: 'Business analytics',
    description:
      'Turn operational data into clear dashboards, trends, forecasts, and actionable business insights.',
    icon: BarChart3,
  },
];

export const BENEFITS = [
  'Connect customers, suppliers, inventory, and orders',
  'Reduce manual work and disconnected spreadsheets',
  'Improve forecasting and purchasing decisions',
  'Give every team a shared source of truth',
];

export const METRICS = [
  { label: 'Open orders', value: '1,284', trend: '+12.5%' },
  { label: 'Inventory value', value: '$842K', trend: '+8.2%' },
  { label: 'On-time delivery', value: '96.4%', trend: '+2.1%' },
];

export const ACTIVITY = [
  {
    title: 'Purchase order approved',
    detail: 'PO-10482 · Apex Components',
    time: '4 min ago',
  },
  {
    title: 'Shipment delivered',
    detail: 'SO-8231 · Northstar Retail',
    time: '18 min ago',
  },
  {
    title: 'Inventory replenished',
    detail: 'West Coast Distribution Center',
    time: '42 min ago',
  },
];

export const FOOTER_LINKS = {
  Product: [
    ['Features', '/features'],
    ['Pricing', '/pricing'],
    ['Roadmap', '/roadmap'],
    ['Security', '/security'],
    ['Integrations', '/integrations'],
  ],
  Solutions: [
    ['Manufacturing', '/solutions/manufacturing'],
    ['Wholesale', '/solutions/wholesale'],
    ['Distribution', '/solutions/distribution'],
    ['Retail', '/solutions/retail'],
    ['Logistics', '/solutions/logistics'],
  ],
  Resources: [
    ['Documentation', '/docs'],
    ['Blog', '/blog'],
    ['API', '/api'],
    ['Help Center', '/help'],
    ['Status', '/status'],
  ],
  Company: [
    ['About', '/about'],
    ['Contact', '/contact'],
    ['Privacy', '/privacy'],
    ['Terms', '/terms'],
    ['Careers', '/careers'],
  ],
};

export const SOCIALS = [
  { icon: FaGithub, href: '#' },
  { icon: FaLinkedin, href: '#' },
  { icon: FaXTwitter, href: '#' },
  { icon: FaYoutube, href: '#' },
  { icon: FaFacebook, href: '#' },
];
