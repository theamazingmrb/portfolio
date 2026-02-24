import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Billie Heidelberg',
  description: 'Privacy policy for Billie Heidelberg\'s portfolio website.',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 max-w-4xl">
      <div className="prose prose-slate max-w-none prose-sm sm:prose-base md:prose-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Privacy Policy</h1>
        
        <p className="text-muted-foreground mb-6">
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <p className="mb-6">
          This Privacy Policy describes how Billie P Heidelberg ("I", "me", or "my") collects, uses, and protects your information when you visit my portfolio website at billieheidelberg.com (the "Site").
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information I Collect</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Information You Provide</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Contact form submissions (name, email, message)</li>
          <li>Communication via email</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Website usage analytics (pages visited, time spent, etc.)</li>
          <li>Technical information (browser type, IP address, device type)</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How I Use Your Information</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>To respond to your inquiries and messages</li>
          <li>To improve my website and user experience</li>
          <li>To analyze website traffic and usage patterns</li>
          <li>To protect against fraudulent or illegal activities</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
        <p className="mb-4">
          I do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>With your explicit consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect my rights, privacy, safety, or property</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
        <p className="mb-4">
          My website may use third-party services that have their own privacy policies:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Google Analytics:</strong> For website analytics</li>
          <li><strong>Vercel:</strong> For website hosting</li>
          <li><strong>Email Service Providers:</strong> For communication</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
        <p className="mb-4">
          I take reasonable measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access the personal information I hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of future communications</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
        <p className="mb-4">
          My website uses cookies to enhance user experience. You can control cookie settings through your browser preferences.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
        <p className="mb-4">
          My website is not intended for children under 13. I do not knowingly collect personal information from children under 13.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
        <p className="mb-4">
          I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new policy on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
        <p className="mb-4">
          If you have questions about this Privacy Policy or want to exercise your rights, please contact me:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Email: billie@houseofheidelberg.com</li>
          <li>Website: billieheidelberg.com</li>
        </ul>

        <div className="mt-12 pt-8 border-t">
          <Link href="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
