import { Metadata } from 'next';
import ContactView from '@/components/ContactView';

export const metadata: Metadata = {
  title: 'İletişim · Contact',
  description: 'Benimle iletişime geçin.',
};

export default function ContactPage() {
  return <ContactView />;
}
