import React, { FC } from "react";

export type PagePrivacyProps = Record<string, never>;

const PagePrivacy: FC<PagePrivacyProps> = ({}) => {
  return (
    <div className="nc-PagePrivacy overflow-hidden">
      <div className="container max-w-4xl mx-auto py-16 lg:py-24">
        <div className="space-y-10">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-wider text-neutral-500">
              Privacy Policy
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900 dark:text-neutral-100">
              WhatsApp Integration Privacy Policy
            </h1>
            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300">
              This policy explains how Travel Lounge collects, uses, and protects
              information when you contact us or receive messages through
              WhatsApp.
            </p>
            <p className="text-sm text-neutral-500">Last updated: 2025-03-08</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Information we collect
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>Your name, phone number, and WhatsApp profile information.</li>
              <li>Message content and any files you send to us.</li>
              <li>
                Booking details you share (dates, destinations, preferences).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              How we use your information
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>Respond to inquiries and provide customer support.</li>
              <li>Process and manage bookings or service requests.</li>
              <li>
                Send trip updates, confirmations, and relevant service notices.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Sharing and disclosure
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              We do not sell your data. We only share information with service
              providers needed to fulfill your request (for example, booking
              partners) or when required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Data retention
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              We keep WhatsApp communications only as long as necessary to
              provide services, meet legal obligations, and resolve disputes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Security
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              We use reasonable administrative and technical measures to protect
              your data, but no method of transmission or storage is completely
              secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Your choices and rights
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>
                You can request access, correction, or deletion of your data.
              </li>
              <li>You can opt out by messaging “STOP” on WhatsApp.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Contact us
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              If you have questions about this policy, contact us at
              support@travellounge.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PagePrivacy;
