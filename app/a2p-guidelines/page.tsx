import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A2P Guidelines | Kova AI",
  description: "A2P 10DLC compliance guidelines for SMS messaging with Kova AI.",
};

export default function A2PGuidelinesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">
          A2P Compliance Guidelines
        </h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: February 2026</p>

        {/* Intro */}
        <p className="text-gray-700 leading-relaxed mb-10">
          A2P 10DLC registration is a process used by U.S. cellular carriers (e.g. Verizon, AT&T,
          T-Mobile) to verify who is sending SMS messages and what is being sent to their customers.
          This helps ensure your contacts receive messages they actually want to receive. Follow these
          guidelines to avoid A2P rejections, save time, and stay compliant when using Kova AI's
          messaging features.
        </p>

        {/* TOC */}
        <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
            Table of Contents
          </h2>
          <ol className="space-y-2 text-sm">
            {[
              ["#overview", "Overview of A2P Registration"],
              ["#opt-in", "Opt-In Form Requirements"],
              ["#campaign-use-case", "Campaign Use Case Descriptions"],
              ["#footer", "Universal Footer Requirements"],
              ["#privacy", "Privacy Policy Essentials"],
              ["#tos", "Terms of Service Clauses"],
              ["#samples", "Sample Privacy Policy & Terms of Service"],
              ["#dba", "Doing Business As (DBA) Requirements"],
              ["#subdomain", "Using a Subdomain for A2P Registration"],
              ["#support", "How to Get Support"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-blue-600 hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <Section id="overview" title="Overview of A2P Registration">
          <p>
            A2P 10DLC registration is a mandatory carrier requirement for businesses sending
            application-to-person (A2P) SMS traffic in the United States. Registration is enforced
            by U.S. cellular carriers to verify sender legitimacy, consent integrity, and message
            transparency. Follow the guidelines below to get approved and stay approved.
          </p>
        </Section>

        <Section id="opt-in" title="Opt-In Form Requirements">
          <p className="mb-4">
            Whether a phone number field is mandatory or optional in a form, survey, quiz, web chat
            widget, or calendar booking — users cannot be forced to agree to SMS messaging in order
            to submit. The phone field and consent choices are separate decisions.
          </p>

          <SubHeading>Strict Separation: Marketing vs. Non-Marketing Messages</SubHeading>
          <p className="mb-4">
            Consent checkboxes must be distinct for marketing and non-marketing messages so
            subscribers can opt into one, both, or neither. Your forms must include two separate
            checkboxes with the following exact language:
          </p>
          <QuoteBox>
            "I consent to receive marketing text messages, about special offers, discounts, and
            service updates, from [BUSINESS NAME] at the phone number provided. Message frequency
            may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to
            opt out."
          </QuoteBox>
          <QuoteBox>
            "I consent to receive non-marketing text messages from [BUSINESS NAME] about
            [USE_CASE_FROM_CAMPAIGN_DESCRIPTION]. Message frequency may vary, message &amp; data
            rates may apply. Text HELP for assistance, reply STOP to opt out."
          </QuoteBox>
          <p className="text-sm text-gray-500 mb-6">
            [BUSINESS NAME] should match what's on your CP 575/147C document.
          </p>

          <SubHeading>No Pre-Selection of Checkboxes</SubHeading>
          <p className="mb-4">
            Consent checkboxes cannot be pre-selected by default. Users must manually select each
            checkbox they wish to agree to.
          </p>
          <Alert>Never default a checkbox to "Checked." The user must take affirmative action.</Alert>

          <SubHeading>Consent Checkboxes Are Always Optional</SubHeading>
          <p className="mb-4">
            Even if the phone number field is required, checking the consent box must remain
            optional for form submission. Submitting a form cannot be conditional on marketing
            consent. After submission, only execute communication based on the user's actual
            checkbox selections.
          </p>

          <SubHeading>Footer Links</SubHeading>
          <p>
            Privacy Policy and Terms &amp; Conditions links are mandatory in the footer of all
            forms. See the sections below for what must be included in each document.
          </p>
        </Section>

        <Section id="campaign-use-case" title="Campaign Use Case Descriptions">
          <p className="mb-4">
            Campaign descriptions must directly align with the consent checkbox language. The
            message use cases described in the campaign must be explicitly reflected in the opt-in
            checkbox wording.
          </p>
          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            <li>
              <strong>Non-marketing example:</strong> If a campaign includes appointment reminders,
              order updates, or service notifications, the checkbox must reference those same
              message types — not generic language like "non-marketing messages."
            </li>
            <li>
              <strong>Promotional example:</strong> If a campaign includes special offers or
              discounts, the checkbox must reference those same message types — not generic language
              like "marketing messages."
            </li>
            <li>
              <strong>Business alignment:</strong> The campaign description must match your business
              niche. Carriers review whether the website supports the stated use case.
            </li>
          </ul>
        </Section>

        <Section id="footer" title="Universal Footer Requirements">
          <p className="mb-4">
            The footer of all forms must include all of the following elements for an A2P
            submission to be approved:
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Privacy Policy</strong> — A clear, direct link must appear in the footer of
              every form.
            </li>
            <li>
              <strong>Terms &amp; Conditions (T&amp;C)</strong> — A visible link to your Terms
              &amp; Conditions must be in the footer.
            </li>
            <li>
              <strong>Accessibility</strong> — Legal links must not be obscured by other design
              elements or pop-ups. They must be clear and visible.
            </li>
            <li>
              <strong>Transparency</strong> — Users must be able to review how their data will be
              handled before submitting the form. Ensure your Privacy Policy and T&amp;C are
              accessible without extra steps.
            </li>
          </ul>
        </Section>

        <Section id="privacy" title="Privacy Policy Essentials">
          <p className="mb-4">
            Your Privacy Policy must be linked in the footer of every form and must never mention
            affiliation, selling, or buying of leads.
          </p>
          <Alert>
            Ensure all contact information in your Privacy Policy and Terms &amp; Conditions
            matches what was submitted in your Brand Registration.
          </Alert>

          <SubHeading>Strict Prohibition</SubHeading>
          <p className="mb-4">
            The policy must never mention affiliation, selling, or buying of leads.
          </p>

          <SubHeading>Required Non-Sharing Clause</SubHeading>
          <p className="mb-2">
            Your Privacy Policy must include the following exact language regarding third-party
            data sharing:
          </p>
          <QuoteBox>
            "No mobile information will be shared with third parties/affiliates for
            marketing/promotional purposes. Information sharing to subcontractors in support
            services, such as customer service, is permitted. All other use case categories exclude
            text messaging originator opt-in data and consent; this information will not be shared
            with any third parties."
          </QuoteBox>
        </Section>

        <Section id="tos" title="Terms of Service Clauses">
          <p className="mb-6">
            Your Terms of Service must identify the sender, provide opt-out and support
            instructions, disclose message frequency, and reference your Privacy Policy. The
            following clauses are required:
          </p>

          <SubHeading>Business Identity Clause</SubHeading>
          <p className="mb-6">
            Clearly state your business name and a brief description of the messages users can
            expect. This gives users an understanding of who is contacting them and why.
          </p>

          <SubHeading>Opt-Out &amp; Support Mechanisms</SubHeading>
          <QuoteBox>
            "You can cancel the SMS service at any time. Just text "STOP" to the [Phone Number].
            After you send the SMS message "STOP" to us, we will send you an SMS message to confirm
            that you have been unsubscribed. After this, you will no longer receive SMS messages
            from us. If you want to join again, just sign up as you did the first time and we will
            start sending SMS messages to you again. If you are experiencing issues with the
            messaging program you can reply with the keyword HELP for more assistance, or you can
            get help directly at [support email address or toll-free number]."
          </QuoteBox>

          <SubHeading>Carrier Liability Clause</SubHeading>
          <QuoteBox>"Carriers are not liable for delayed or undelivered messages."</QuoteBox>

          <SubHeading>Message Frequency Clause</SubHeading>
          <QuoteBox>
            "As always, message and data rates may apply for any messages sent to you from us and
            to us from you. You will receive [message frequency]. If you have any questions about
            your text plan or data plan, it is best to contact your wireless provider."
          </QuoteBox>

          <SubHeading>Privacy Policy Link Clause</SubHeading>
          <QuoteBox>
            "If you have any questions regarding privacy, please read our privacy policy: [link to
            privacy policy]"
          </QuoteBox>
        </Section>

        <Section id="samples" title="Sample Privacy Policy & Terms of Service">
          <p className="mb-4">
            Kova AI recommends building a Privacy Policy and Terms &amp; Conditions page that
            includes all of the required language outlined above. The following serves as a
            reference — always consult with your own legal counsel before publishing to ensure it
            meets the needs of your business and jurisdiction.
          </p>
          <p>
            At a minimum, your pages must include the non-sharing clause from the Privacy Policy
            section and all four clauses listed in the Terms of Service section above, with your
            business name, phone number, support email, and website filled in where indicated.
          </p>
        </Section>

        <Section id="dba" title="Doing Business As (DBA) Requirements">
          <p className="mb-4">
            If you have an EIN for your company but want to use a different brand name for your
            messages, add this sentence to the Campaign Use Case Description:{" "}
            <em>"We are doing DBA as [Business_Name]."</em>
          </p>
          <p className="mb-4">
            The rest of your submission — including the website, Privacy Policy, T&amp;C, and the
            business name shown in opt-in form checkboxes — must match the declared{" "}
            <em>[Legal Business Name] DBA [DBA Name]</em>.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              The DBA relationship must be clearly stated on the website — in the footer and/or
              header. If it cannot be found, the campaign can be rejected.
            </li>
            <li>Logos on the website can represent the DBA branding.</li>
          </ul>
        </Section>

        <Section id="subdomain" title="Using a Subdomain for A2P Registration">
          <p className="mb-4">
            Phone carriers allow subdomains (e.g. <code>form.yourdomain.com</code>) for A2P
            registration, but they need to understand two things:
          </p>
          <ul className="list-disc pl-5 space-y-3 text-gray-700 mb-6">
            <li>
              <strong>How the subdomain relates to the primary brand.</strong> If the subdomain and
              main domain present very different brands, campaigns will be blocked unless the
              relationship is made very clear.
            </li>
            <li>
              <strong>How users get to the opt-in page.</strong> Simply stating that a subdomain is
              where opt-in happens — without showing how people find that page — creates a risk of
              rejection. If the path is clearly shown (email, social posts, paid ads, or navigation
              from the main site), subdomains are fine.
            </li>
          </ul>

          <SubHeading>Subdomain Readiness Checklist</SubHeading>
          <ul className="space-y-3">
            {[
              ["Brand Match", "Does the subdomain generally match your overall brand (name, logo, look, feel)?"],
              ["Discovery Path", "Is it obvious how users get to the subdomain (email, social, ads, or navigation)?"],
              ["CTIA & Use-Case", "Does the page have all the required CTIA disclosures and an appropriate use case?"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">✓</span>
                <span><strong>{label}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-gray-700">
            If all three answers are Yes, you're good to proceed with A2P registration using the
            subdomain.
          </p>
        </Section>

        <Section id="support" title="How to Get Support">
          <p>
            If you have questions about A2P compliance or need help getting your number registered,
            reach out to the Kova AI support team. Our team is on standby to review your setup and
            help guide you through the registration process.
          </p>
        </Section>
      </div>
    </main>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-12 scroll-mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-semibold text-gray-900 mt-6 mb-2">{children}</h3>;
}

function QuoteBox({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="bg-gray-50 border-l-4 border-blue-400 rounded-r-lg px-5 py-4 my-4 text-sm text-gray-700 italic">
      {children}
    </blockquote>
  );
}

function Alert({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-4 my-4 text-sm text-amber-800">
      <strong>Important:</strong> {children}
    </div>
  );
}
