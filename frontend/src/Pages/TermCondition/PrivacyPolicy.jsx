import React, { useEffect } from 'react';
import './PrivacyPolicy.css';
const PrivacyPolicy = () => {

  useEffect(() => {
  
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
        <div className="container">
        <div className="privacy-policy-container mt-3">
      <h1 className="privacy-policy-title text-center">Privacy Policy</h1>
      <p>
        At <strong>Muslim Malik Rishte</strong> We privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and disclose your information when you use our matrimonial website (the "Service"). By using our Service, you agree to the terms outlined in this Privacy Policy.
      </p>

      <section className="privacy-section">
        <h2>1. Information We Collect</h2>
        <ul>
          <li>
            <strong>Personal Information:</strong> When you register or create a profile on our website, we may collect your personal details such as your name, date of birth, gender, contact information (email, phone number), and other details necessary for matchmaking.
          </li>
          <li>
            <strong>Profile Information:</strong> This may include details about your interests, preferences, background, educational qualifications, occupation, and more, which you voluntarily provide when creating or updating your profile.
          </li>
          <li>
            <strong>Payment Information:</strong> If you choose to purchase any paid services on the website, we may collect payment details such as credit/debit card information or other payment methods.
          </li>
          <li>
            <strong>Log Data:</strong> We collect information automatically when you access our website, including IP addresses, browser type, operating system, device type, and pages visited. This helps us improve our service and monitor usage patterns.
          </li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li><strong>Providing Services:</strong> To create, maintain, and manage your profile on the website and connect you with potential matches.</li>
          <li><strong>Communication:</strong> To send you updates, notifications, and promotional content, if you've opted to receive them.</li>
          <li><strong>Improving Our Website:</strong> To analyze website traffic, troubleshoot problems, and enhance the user experience.</li>
          <li><strong>Security:</strong> To protect the integrity of our platform, prevent fraud, and ensure the safety and security of your account.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>3. How We Protect Your Information</h2>
        <p>
          We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. These include encryption technologies, firewalls, and secure server protocols. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="privacy-section">
        <h2>4. Sharing Your Information</h2>
        <ul>
          <li>
            <strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist in operating our website, processing payments, or improving our service.
          </li>
          <li>
            <strong>Legal Compliance:</strong> We may disclose your information if required by law, in response to legal processes, or to protect our rights, property, or safety, or the safety of others.
          </li>
          <li>
            <strong>With Your Consent:</strong> We may share your information with third parties if you have given us explicit consent to do so.
          </li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>5. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar technologies to enhance your user experience and analyze website traffic. Cookies are small files that are stored on your device when you visit our website. You can manage cookie preferences through your browser settings. By using our website, you consent to the use of cookies in accordance with this Privacy Policy.
        </p>
      </section>

      <section className="privacy-section">
        <h2>6. Your Rights and Choices</h2>
        <ul>
          <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
          <li><strong>Correction:</strong> You can update or correct any inaccurate or incomplete personal information.</li>
          <li><strong>Deletion:</strong> You can request the deletion of your account and personal data, subject to certain legal and contractual obligations.</li>
          <li><strong>Opt-Out:</strong> You can opt out of receiving promotional communications by following the unsubscribe instructions in our emails.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at <strong>[contact email or phone]</strong>.
        </p>
      </section>

      <section className="privacy-section">
        <h2>7. Third-Party Websites</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to read the privacy policies of any third-party sites you visit.
        </p>
      </section>

      <section className="privacy-section">
        <h2>8. Children’s Privacy</h2>
        <p>
          Our website is not intended for use by individuals under the age of 18. We do not knowingly collect or solicit personal information from children. If we learn that we have collected personal information from a child under the age of 18, we will take steps to delete such information.
        </p>
      </section>

      <section className="privacy-section">
        <h2>9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we make changes, we will revise the "Effective Date" at the top of this page. We encourage you to review this policy periodically for any updates.
        </p>
      </section>

      <section className="privacy-section">
        <h2>10. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at:
          <br />
          <strong>[contact email or phone]</strong>
        </p>
      </section>
    </div>
        </div>
    </>
  );
};

export default PrivacyPolicy;