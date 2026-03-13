import React, { FC } from "react";

export type PageTermsProps = Record<string, never>;

const PageTerms: FC<PageTermsProps> = ({}) => {
  return (
    <div className="nc-PageTerms overflow-hidden">
      <div className="container max-w-4xl mx-auto py-16 lg:py-24">
        <div className="space-y-10">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-wider text-neutral-500">
              Terms & Conditions
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900 dark:text-neutral-100">
              Terms of Service
            </h1>
            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300">
              These terms govern your use of Travel Lounge services and
              communications, including booking requests made through WhatsApp.
            </p>
            <p className="text-sm text-neutral-500">Last updated: 2025-03-08</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Services
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              We provide travel information, booking assistance, and related
              customer support. Availability and pricing are subject to change
              until confirmed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Bookings and payments
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>Bookings are confirmed only after payment and confirmation.</li>
              <li>You are responsible for providing accurate traveler details.</li>
              <li>
                Third-party provider terms (airlines, hotels, etc.) may apply.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Cancellations and changes
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Cancellation and change fees vary by provider and fare rules. We
              will communicate applicable fees before processing your request.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              WhatsApp communications
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              By messaging us on WhatsApp, you consent to receive messages about
              your requests and service updates. Standard messaging rates may
              apply.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Limitation of liability
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              We are not liable for delays, cancellations, or issues caused by
              third-party providers, force majeure events, or factors outside
              our control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Contact
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              For questions about these terms, contact us at
              support@travellounge.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PageTerms;
