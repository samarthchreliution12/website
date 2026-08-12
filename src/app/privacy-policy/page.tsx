import React from "react";
import Metadata from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./PrivacyPolicy.module.css";

export const metadata = {
  title: "Privacy Policy | Reliution Enterprise Technologies",
  description:
    "Read Reliution's Privacy Policy to learn how we collect, protect, and handle your data across our enterprise solutions.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* 1. BLUE HERO SECTION WITH ROUNDED BOTTOM-RIGHT CORNER */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.heroEyebrow}>LEGAL & COMPLIANCE</span>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <p className={styles.heroDesc}>
            Learn how Reliution collects, uses, and safeguards your personal data when you use our services and website.
          </p>
        </div>
      </section>

      {/* 2. MAIN READABLE CONTENT AREA */}
      <article className={styles.contentArea}>
        <div className={styles.contentContainer}>
          
          {/* SECTION 1: CONSENT */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Consent & Overview</h2>
            <p className={styles.paragraph}>
              At Reliution, accessible from www.reliution.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Reliution and how we use it.
            </p>
            <p className={styles.paragraph}>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>
            <p className={styles.paragraph}>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Reliution. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>
          </section>

          {/* SECTION 2: INFORMATION WE COLLECT */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
            <p className={styles.paragraph}>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p className={styles.paragraph}>
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>
            <p className={styles.paragraph}>
              When you register for an Account or schedule a technical consultation, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
            </p>
          </section>

          {/* SECTION 3: HOW WE USE YOUR INFORMATION */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
            <p className={styles.paragraph}>
              We use the information we collect in various ways, including to:
            </p>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <CheckCircle2 className={styles.listIcon} />
                <span className={styles.itemText}>Provide, operate, and maintain our website</span>
              </li>
              <li className={styles.listItem}>
                <CheckCircle2 className={styles.listIcon} />
                <span className={styles.itemText}>Improve, personalize, and expand our website</span>
              </li>
              <li className={styles.listItem}>
                <CheckCircle2 className={styles.listIcon} />
                <span className={styles.itemText}>Understand and analyze how you use our website</span>
              </li>
              <li className={styles.listItem}>
                <CheckCircle2 className={styles.listIcon} />
                <span className={styles.itemText}>Develop new products, services, features, and functionality</span>
              </li>
              <li className={styles.listItem}>
                <CheckCircle2 className={styles.listIcon} />
                <span className={styles.itemText}>
                  Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
                </span>
              </li>
              <li className={styles.listItem}>
                <CheckCircle2 className={styles.listIcon} />
                <span className={styles.itemText}>Send you emails regarding service updates or enterprise consultations</span>
              </li>
              <li className={styles.listItem}>
                <CheckCircle2 className={styles.listIcon} />
                <span className={styles.itemText}>Find and prevent fraud and security threats</span>
              </li>
            </ul>
          </section>

          {/* SECTION 4: LOG FILES */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Log Files</h2>
            <p className={styles.paragraph}>
              Reliution follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics.
            </p>
            <p className={styles.paragraph}>
              The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
            </p>
          </section>

          {/* SECTION 5: COOKIES AND WEB BEACONS */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Cookies and Web Beacons</h2>
            <p className={styles.paragraph}>
              Like any other website, Reliution uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited.
            </p>
            <p className={styles.paragraph}>
              The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
            </p>
          </section>

          {/* SECTION 6: THIRD PARTY PRIVACY POLICIES */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Third Party Privacy Policies</h2>
            <p className={styles.paragraph}>
              Reliution&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
            <p className={styles.paragraph}>
              You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.
            </p>
          </section>

          {/* SECTION 7: CCPA PRIVACY RIGHTS */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
            <p className={styles.paragraph}>
              Under the CCPA, among other rights, California consumers have the right to:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <CheckCircle2 className={styles.listIcon} />
                <span className={styles.itemText}>
                  <strong>Request Disclosure:</strong> Request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
                </span>
              </li>
              <li className={styles.listItem}>
                <CheckCircle2 className={styles.listIcon} />
                <span className={styles.itemText}>
                  <strong>Request Deletion:</strong> Request that a business delete any personal data about the consumer that a business has collected.
                </span>
              </li>
              <li className={styles.listItem}>
                <CheckCircle2 className={styles.listIcon} />
                <span className={styles.itemText}>
                  <strong>Opt-Out of Sale:</strong> Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.
                </span>
              </li>
            </ul>
            <p className={styles.paragraph}>
              If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at{" "}
              <a href="mailto:info@reliution.com" className={styles.link}>
                info@reliution.com
              </a>.
            </p>
          </section>

          {/* SECTION 8: GDPR DATA PROTECTION RIGHTS */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. GDPR Data Protection Rights</h2>
            <p className={styles.paragraph}>
              We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <CheckCircle2 className={styles.listIcon} />
                <span className={styles.itemText}>
                  <strong>The right to access</strong> – You have the right to request copies of your personal data. We may charge you a small fee for this service.
                </span>
              </li>
              <li className={styles.listItem}>
                <CheckCircle2 className={styles.listIcon} />
                <span className={styles.itemText}>
                  <strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
                </span>
              </li>
              <li className={styles.listItem}>
                <CheckCircle2 className={styles.listIcon} />
                <span className={styles.itemText}>
                  <strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.
                </span>
              </li>
              <li className={styles.listItem}>
                <CheckCircle2 className={styles.listIcon} />
                <span className={styles.itemText}>
                  <strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.
                </span>
              </li>
              <li className={styles.listItem}>
                <CheckCircle2 className={styles.listIcon} />
                <span className={styles.itemText}>
                  <strong>The right to object to processing</strong> – You have the right to request that we object to our processing of your personal data, under certain conditions.
                </span>
              </li>
              <li className={styles.listItem}>
                <CheckCircle2 className={styles.listIcon} />
                <span className={styles.itemText}>
                  <strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                </span>
              </li>
            </ul>
            <p className={styles.paragraph}>
              If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
            </p>
          </section>

          {/* SECTION 9: CHILDREN'S INFORMATION */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Children&apos;s Information</h2>
            <p className={styles.paragraph}>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            <p className={styles.paragraph}>
              Reliution does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>
          </section>

          {/* SECTION 10: CONTACT US */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Contact Us</h2>
            <p className={styles.paragraph}>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact our legal and compliance team:
            </p>
            
            <div className={styles.contactCard}>
              <h3 className={styles.contactTitle}>Reliution Enterprise Legal Team</h3>
              <p className={styles.paragraph}>
                Email:{" "}
                <a href="mailto:info@reliution.com" className={styles.link}>
                  info@reliution.com
                </a>{" "}
                /{" "}
                <a href="mailto:contact@reliution.com" className={styles.link}>
                  contact@reliution.com
                </a>
              </p>
              <p className={styles.paragraph}>
                Website:{" "}
                <a href="https://www.reliution.com" className={styles.link} target="_blank" rel="noopener noreferrer">
                  www.reliution.com
                </a>
              </p>
            </div>
          </section>

        </div>
      </article>

      <Footer />
    </main>
  );
}
