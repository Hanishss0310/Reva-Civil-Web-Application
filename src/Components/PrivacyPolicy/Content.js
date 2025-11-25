import React from 'react'

export default function Content() {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-12 max-w-4xl mx-auto text-gray-800 mt-10">
      <h1 className="text-4xl font-bold mb-8 text-left">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-left">1. Introduction</h2>
        <p className="text-left leading-relaxed">
          <strong>REVA University</strong> respects your privacy and is committed to protecting personal information collected through this website and during service transactions.
          This policy explains how we collect, use, and safeguard your data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-left">2. Information We Collect</h2>
        <p className="text-left leading-relaxed mb-4">
          We may collect personal information such as name, organization, email, phone number, and address when you fill out enquiry forms, request quotations, or communicate with us.
        </p>
        <p className="text-left leading-relaxed">
          Technical information such as IP address, browser type, and access time may also be automatically collected for site analytics.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-left">3. Use of Information</h2>
        <ul className="list-disc ml-6 text-left leading-relaxed mb-4">
          <li>Processing enquiries, quotations, and service requests</li>
          <li>Providing updates or reports related to laboratory or consultancy services</li>
          <li>Improving website functionality and user experience</li>
          <li>Compliance with legal and institutional obligations</li>
        </ul>
        <p className="text-left leading-relaxed">
          We do not sell, rent, or trade personal data to third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-left">4. Data Security</h2>
        <p className="text-left leading-relaxed">
          All collected information is stored securely on University servers with restricted access.
          Reasonable administrative, technical, and physical safeguards are employed to prevent unauthorized access, alteration, or disclosure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-left">5. Information Sharing</h2>
        <p className="text-left leading-relaxed mb-4">
          Personal data may be shared only with:
        </p>
        <ul className="list-disc ml-6 text-left leading-relaxed">
          <li>Authorized University personnel involved in service delivery</li>
          <li>Government or regulatory bodies if legally required</li>
          <li>Subcontracted service providers (if applicable) under confidentiality agreements</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-left">6. Data Retention</h2>
        <p className="text-left leading-relaxed">
          Personal data is retained only for as long as necessary to fulfill the purposes stated above or as required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-left">7. Cookies</h2>
        <p className="text-left leading-relaxed">
          This website may use cookies for analytics and session management.
          Users can control cookie settings through their browser preferences.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-left">8. Your Rights</h2>
        <p className="text-left leading-relaxed">
          Users may request access, correction, or deletion of their personal information by contacting the University at:{" "}
          <a href="mailto:consultancy.civil@reva.edu.in" className="text-blue-600 underline">
            consultancy.civil@reva.edu.in
          </a>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-left">9. Policy Updates</h2>
        <p className="text-left leading-relaxed">
          The University reserves the right to amend this Privacy Policy at any time. Revisions will be posted on this page with an updated effective date.
        </p>
      </section>

      <p className="text-sm text-gray-500 text-left">Last updated: October 2025</p>
    </div>
  );
};
