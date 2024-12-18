const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="prose prose-slate mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Concaco ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our medical team collaboration application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Professional credentials and contact information</li>
            <li>Authentication data</li>
            <li>Case conference details and communications</li>
            <li>Usage data and application analytics</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">HIPAA Compliance</h2>
          <p>
            As a healthcare application, we are fully committed to maintaining HIPAA compliance. We implement all required technical, physical, and administrative safeguards to protect Protected Health Information (PHI).
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>End-to-end encryption of all sensitive data</li>
            <li>Regular security audits and updates</li>
            <li>Strict access controls and authentication measures</li>
            <li>Comprehensive staff training on HIPAA requirements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p>We use the collected information for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Facilitating secure medical team collaboration</li>
            <li>Improving our services and user experience</li>
            <li>Ensuring platform security and preventing fraud</li>
            <li>Complying with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>
            We implement robust security measures to protect your information, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Advanced encryption protocols</li>
            <li>Secure data storage systems</li>
            <li>Regular security assessments</li>
            <li>Incident response procedures</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal information</li>
            <li>Request corrections to your data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of certain data collection</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p>
            For any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            <br />
            Email: privacy@concaco.com
            <br />
            Address: 123 Medical Center Drive, Suite 100, San Francisco, CA 94110
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.
          </p>
          <p className="mt-4">
            Last Updated: March 14, 2024
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;