import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - Billie Heidelberg',
  description: 'Terms of service for Billie Heidelberg\'s portfolio website.',
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 max-w-4xl">
      <div className="prose prose-slate max-w-none prose-sm sm:prose-base md:prose-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Terms of Service</h1>
        
        <p className="text-muted-foreground mb-6">
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <p className="mb-6">
          Welcome to Billie Heidelberg's portfolio website. These Terms of Service ("Terms") govern your use of billieheidelberg.com (the "Site") and any services provided by Billie P Heidelberg ("I", "me", or "my").
        </p>

        <p className="mb-6">
          By accessing or using this Site, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Use of the Site</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Permitted Use</h3>
        <p className="mb-4">
          You may use this Site for legitimate purposes, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Viewing my portfolio and work samples</li>
          <li>Contacting me for business inquiries</li>
          <li>Learning about my services and expertise</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Prohibited Use</h3>
        <p className="mb-4">You may not:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Use the Site for any illegal or unauthorized purpose</li>
          <li>Attempt to gain unauthorized access to any part of the Site</li>
          <li>Use automated systems to access the Site without permission</li>
          <li>Reproduce, duplicate, or copy any content without my permission</li>
          <li>Use the Site to harass, abuse, or harm others</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">My Content</h3>
        <p className="mb-4">
          All content on this Site, including but not limited to text, graphics, logos, images, and software, is the property of Billie P Heidelberg and is protected by copyright, trademark, and other intellectual property laws.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Your Content</h3>
        <p className="mb-4">
          By submitting content (such as contact form messages), you grant me a non-exclusive, royalty-free license to use, reproduce, and respond to your content for the purpose of providing my services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Services and Projects</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Portfolio Representation</h3>
        <p className="mb-4">
          The projects and work samples displayed on this Site are for demonstration purposes only. Actual project outcomes may vary based on specific client requirements and circumstances.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">No Guarantee</h3>
        <p className="mb-4">
          While I strive to provide accurate information, I make no warranties or guarantees about the completeness, reliability, or accuracy of the information on this Site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
        <p className="mb-4">
          To the fullest extent permitted by law, I shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this Site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Indemnification</h2>
        <p className="mb-4">
          You agree to indemnify and hold harmless Billie P Heidelberg from any claims, damages, or expenses arising from your use of this Site or violation of these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Links</h2>
        <p className="mb-4">
          My Site may contain links to third-party websites. I am not responsible for the content, privacy policies, or practices of any third-party sites.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy</h2>
        <p className="mb-4">
          Your privacy is important to me. Please review my <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> to understand how I collect, use, and protect your information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
        <p className="mb-4">
          I reserve the right to terminate or suspend access to this Site at any time, without notice, for any reason.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
        <p className="mb-4">
          I may modify these Terms at any time. Changes will be effective immediately upon posting on this Site. Your continued use of the Site constitutes acceptance of any changes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed by and construed in accordance with the laws of the state where I am located, without regard to its conflict of law provisions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
        <p className="mb-4">
          If you have questions about these Terms of Service, please contact me:
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
