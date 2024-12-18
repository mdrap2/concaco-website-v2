const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="prose prose-slate mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
          At Concaco, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Personal identification information (name, email address, professional credentials)</li>
            <li>Professional information related to medical practice</li>
            <li>Communication data within the app</li>
            <li>Usage data and application analytics</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p>We use the collected information for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing and maintaining our services</li>
            <li>Improving user experience</li>
            <li>Communicating with you about updates and changes</li>
            <li>Ensuring compliance with medical privacy regulations</li>
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
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
          If you have questions about this Privacy Policy, please contact us at:
            <br />
            Email: privacy@concaco.com
            
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
          <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          <p className="mt-4">
          Last Updated: 12/10/2024
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;