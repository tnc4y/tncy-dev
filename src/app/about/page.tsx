import { Metadata } from 'next';
import AboutView from '@/components/AboutView';

export const metadata: Metadata = {
  title: 'Hakkımda · About',
  description: 'Eğitim geçmişim ve kişisel bilgilerim.',
};

export default function AboutPage() {
  return <AboutView />;
}
