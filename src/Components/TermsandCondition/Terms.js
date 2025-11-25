import React from 'react';

const Terms = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-12 max-w-4xl mx-auto text-gray-800 mt-11">
      <h1 className="text-4xl font-bold mb-8 text-left">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-left">1. Scope of Services</h2>
        <p className="text-left leading-relaxed">
          The <strong>School of Civil Engineering, REVA University</strong> (“the University”) provides consultancy, testing, and design services as described on this website. 
          All services are carried out in accordance with applicable Indian Standards (IS), IRC, ASTM, and AASHTO codes, subject to laboratory and field conditions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-left">2. Acceptance of Terms</h2>
        <p className="text-left leading-relaxed">
          By accessing or using this website or availing any service, the client agrees to these Terms and Conditions. 
          If you do not agree, you may not use the site or its services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-left">3. Service Requests and Quotations</h2>
        <p className="text-left leading-relaxed">
          All service quotations are indicative and subject to confirmation. Pricing, timelines, and sample requirements will be confirmed in writing before commencement. 
          Express or priority testing is available upon written request and subject to resource availability.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-left">4. Sample Handling and Retention</h2>
        <p className="text-left leading-relaxed">
          Samples received become the property of the University unless otherwise agreed in writing. 
          Unless retained for legal or audit purposes, samples will be disposed of 30 days after report issuance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-left">5. Test Reports</h2>
        <p className="text-left leading-relaxed">
          Test reports are issued solely for the submitted samples and conditions tested. 
          Reports shall not be reproduced, except in full, without prior written approval. 
          The University shall not be liable for any misinterpretation or misuse of results by third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-left">6. Confidentiality</h2>
        <p className="text-left leading-relaxed">
          All data, results, and client information are treated as confidential and used only for the purpose of testing and reporting, 
          in line with <strong>ISO/IEC 17025:2017</strong> principles of impartiality and confidentiality.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-left">7. Intellectual Property</h2>
        <p className="text-left leading-relaxed">
          All content, logos, images, and materials on this site are the intellectual property of <strong>REVA University</strong> 
          and may not be copied, reproduced, or distributed without written permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-left">8. Limitation of Liability</h2>
        <p className="text-left leading-relaxed">
          The University shall not be liable for indirect, incidental, or consequential damages arising from the use or reliance on test results or consultancy services. 
          Liability, if any, shall not exceed the total fee paid for the specific service rendered.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-left">9. Payment and Taxes</h2>
        <p className="text-left leading-relaxed">
          All payments are subject to applicable GST and must be made as per the invoice terms. 
          Reports may be withheld until full payment is received.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-left">10. Jurisdiction</h2>
        <p className="text-left leading-relaxed">
          These Terms are governed by the laws of India. 
          Any disputes shall be subject to the exclusive jurisdiction of the courts at Bengaluru, Karnataka.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-left">Contact</h2>
        <p className="text-left leading-relaxed">
          For any inquiries regarding these Terms and Conditions, please contact us at:{" "}
          <a href="mailto:consultancy.civil@reva.edu.in" className="text-blue-600 underline">
            consultancy.civil@reva.edu.in
          </a>
        </p>
      </section>

      <p className="text-sm text-gray-500 text-left">Last updated: October 2025</p>
    </div>
  );
};

export default Terms;
