import { ModalType } from "../types/ModalType";

const PrivacyPolicyModal = (props: ModalType) => {
  return (
    <div
      id="extralarge-modal"
      tabIndex={-1}
      className={`fixed left-0 right-0 top-0 z-50 flex h-[calc(100%-1rem)] max-h-screen w-full justify-center overflow-y-auto overflow-x-hidden  p-4 md:inset-0 ${
        props.isOpen ? "block" : "hidden"
      }`}
    >
      <div className="relative max-h-full w-full max-w-7xl">
        {/* Modal content */}
        <div className="relative rounded-lg bg-spotify-black shadow">
          {/* Modal header */}
          <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5">
            <h1 className="text-xl font-medium text-spotify-white">
              Privacy Policy
            </h1>
            <button
              type="button"
              className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-spotify-grey hover:bg-spotify-light-grey hover:text-spotify-dark-grey"
              data-modal-hide="extralarge-modal"
              onClick={props.onClose}
            >
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="overflow-x-hidden">
            {/* Modal body */}
            <div className="max-h-content max-h-[80vh] space-y-4 overflow-y-scroll p-4 md:p-5 ">
              <p className="text-base leading-relaxed text-spotify-light-grey">
                Last updated: December 12, 2023
              </p>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You.
              </p>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                We use Your Personal data to provide and improve the Service. By
                using the Service, You agree to the collection and use of
                information in accordance with this Privacy Policy.
              </p>
              <h2 className="text-l font-medium text-spotify-white">
                Interpretation and Definitions
              </h2>
              <h3 className="font-medium text-spotify-white">Interpretation</h3>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>
              <h3 className="font-medium text-spotify-white">Definitions</h3>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                For the purposes of this Privacy Policy:
              </p>
              <ul>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>Account</strong> means a unique account created for
                    You to access our Service or parts of our Service.
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>Affiliate</strong> means an entity that controls, is
                    controlled by or is under common control with a party, where
                    &quot;control&quot; means ownership of 50% or more of the
                    shares, equity interest or other securities entitled to vote
                    for election of directors or other managing authority.
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>Application</strong> refers to FestiSounds, the
                    software program provided by the Company.
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>Company</strong> (referred to as either &quot;the
                    Company&quot;, &quot;We&quot;, &quot;Us&quot; or
                    &quot;Our&quot; in this Agreement) refers to FestiSounds.
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>Country</strong> refers to: Netherlands
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>Device</strong> means any device that can access the
                    Service such as a computer, a cellphone or a digital tablet.
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>Personal Data</strong> is any information that
                    relates to an identified or identifiable individual.
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>Service</strong> refers to the Application.
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>Service Provider</strong> means any natural or legal
                    person who processes the data on behalf of the Company. It
                    refers to third-party companies or individuals employed by
                    the Company to facilitate the Service, to provide the
                    Service on behalf of the Company, to perform services
                    related to the Service or to assist the Company in analyzing
                    how the Service is used.
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>Third-party Social Media Service</strong> refers to
                    any website or any social network website through which a
                    User can log in or create an account to use the Service.
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>Usage Data</strong> refers to data collected
                    automatically, either generated by the use of the Service or
                    from the Service infrastructure itself (for example, the
                    duration of a page visit).
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>You</strong> means the individual accessing or using
                    the Service, or the company, or other legal entity on behalf
                    of which such individual is accessing or using the Service,
                    as applicable.
                  </p>
                </li>
              </ul>
              <h2 className="text-l font-medium text-spotify-white">
                Collecting and Using Your Personal Data
              </h2>
              <h3 className="font-medium text-spotify-white">
                Types of Data Collected
              </h3>
              <h4 className="text-l font-medium text-spotify-white">
                Personal Data
              </h4>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                While using Our Service, We may ask You to provide Us with
                certain personally identifiable information that can be used to
                contact or identify You. Personally identifiable information may
                include, but is not limited to:
              </p>
              <h4 className="text-l font-medium text-spotify-white">
                Usage Data
              </h4>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                Usage Data is collected automatically when using the Service.
              </p>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                Usage Data may include information such as Your Device's
                Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that You visit, the
                time and date of Your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data.
              </p>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                When You access the Service by or through a mobile device, We
                may collect certain information automatically, including, but
                not limited to, the type of mobile device You use, Your mobile
                device unique ID, the IP address of Your mobile device, Your
                mobile operating system, the type of mobile Internet browser You
                use, unique device identifiers and other diagnostic data.
              </p>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                We may also collect information that Your browser sends whenever
                You visit our Service or when You access the Service by or
                through a mobile device.
              </p>
              <h4 className="text-l font-medium text-spotify-white">
                Information from Third-Party Social Media Services
              </h4>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                The Company allows You to create an account and log in to use
                the Service through the following Third-party Social Media
                Services:
                <ul>
                  <li>
                    <strong>Spotify</strong>
                  </li>
                </ul>
              </p>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                If You decide to register through or otherwise grant us access
                to a Third-Party Social Media Service, We may collect Personal
                data that is already associated with Your Third-Party Social
                Media Service's account, such as Your name, Your email address,
                Your activities or Your contact list associated with that
                account.
              </p>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                You may also have the option of sharing additional information
                with the Company through Your Third-Party Social Media Service's
                account. If You choose to provide such information and Personal
                Data, during registration or otherwise, You are giving the
                Company permission to use, share, and store it in a manner
                consistent with this Privacy Policy.
              </p>
              <h3 className="font-medium text-spotify-white">
                Use of Your Personal Data
              </h3>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                The Company may use Personal Data for the following purposes:
              </p>
              <ul>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>To provide and maintain our Service</strong>,
                    including to monitor the usage of our Service.
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>To manage Your Account:</strong> to manage Your
                    registration as a user of the Service. The Personal Data You
                    provide can give You access to different functionalities of
                    the Service that are available to You as a registered user.
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>For the performance of a contract:</strong> the
                    development, compliance and undertaking of the purchase
                    contract for the products, items or services You have
                    purchased or of any other contract with Us through the
                    Service.
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>To contact You:</strong> To contact You by email,
                    telephone calls, SMS, or other equivalent forms of
                    electronic communication, such as a mobile application's
                    push notifications regarding updates or informative
                    communications related to the functionalities, products or
                    contracted services, including the security updates, when
                    necessary or reasonable for their implementation.
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>To provide You</strong> with news, special offers
                    and general information about other goods, services and
                    events which we offer that are similar to those that you
                    have already purchased or enquired about unless You have
                    opted not to receive such information.
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>To manage Your requests:</strong> To attend and
                    manage Your requests to Us.
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>For business transfers:</strong> We may use Your
                    information to evaluate or conduct a merger, divestiture,
                    restructuring, reorganization, dissolution, or other sale or
                    transfer of some or all of Our assets, whether as a going
                    concern or as part of bankruptcy, liquidation, or similar
                    proceeding, in which Personal Data held by Us about our
                    Service users is among the assets transferred.
                  </p>
                </li>
                <li>
                  <p className="text-base leading-relaxed text-spotify-light-grey">
                    <strong>For other purposes</strong>: We may use Your
                    information for other purposes, such as data analysis,
                    identifying usage trends, determining the effectiveness of
                    our promotional campaigns and to evaluate and improve our
                    Service, products, services, marketing and your experience.
                  </p>
                </li>
              </ul>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                We may share Your personal information in the following
                situations:
                <ul>
                  <li>
                    <strong>With Service Providers:</strong> We may share Your
                    personal information with Service Providers to monitor and
                    analyze the use of our Service, to contact You.
                  </li>
                  <li>
                    <strong>For business transfers:</strong> We may share or
                    transfer Your personal information in connection with, or
                    during negotiations of, any merger, sale of Company assets,
                    financing, or acquisition of all or a portion of Our
                    business to another company.
                  </li>
                  <li>
                    <strong>With Affiliates:</strong> We may share Your
                    information with Our affiliates, in which case we will
                    require those affiliates to honor this Privacy Policy.
                    Affiliates include Our parent company and any other
                    subsidiaries, joint venture partners or other companies that
                    We control or that are under common control with Us.
                  </li>
                  <li>
                    <strong>With business partners:</strong> We may share Your
                    information with Our business partners to offer You certain
                    products, services or promotions.
                  </li>
                  <li>
                    <strong>With other users:</strong> when You share personal
                    information or otherwise interact in the public areas with
                    other users, such information may be viewed by all users and
                    may be publicly distributed outside. If You interact with
                    other users or register through a Third-Party Social Media
                    Service, Your contacts on the Third-Party Social Media
                    Service may see Your name, profile, pictures and description
                    of Your activity. Similarly, other users will be able to
                    view descriptions of Your activity, communicate with You and
                    view Your profile.
                  </li>
                  <li>
                    <strong>With Your consent</strong>: We may disclose Your
                    personal information for any other purpose with Your
                    consent.
                  </li>
                </ul>
              </p>
              <h3 className="font-medium text-spotify-white">
                Retention of Your Personal Data
              </h3>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                The Company will retain Your Personal Data only for as long as
                is necessary for the purposes set out in this Privacy Policy. We
                will retain and use Your Personal Data to the extent necessary
                to comply with our legal obligations (for example, if we are
                required to retain your data to comply with applicable laws),
                resolve disputes, and enforce our legal agreements and policies.
              </p>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                The Company will also retain Usage Data for internal analysis
                purposes. Usage Data is generally retained for a shorter period
                of time, except when this data is used to strengthen the
                security or to improve the functionality of Our Service, or We
                are legally obligated to retain this data for longer time
                periods.
              </p>
              <h3 className="font-medium text-spotify-white">
                Transfer of Your Personal Data
              </h3>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                Your information, including Personal Data, is processed at the
                Company's operating offices and in any other places where the
                parties involved in the processing are located. It means that
                this information may be transferred to — and maintained on —
                computers located outside of Your state, province, country or
                other governmental jurisdiction where the data protection laws
                may differ than those from Your jurisdiction.
              </p>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                Your consent to this Privacy Policy followed by Your submission
                of such information represents Your agreement to that transfer.
              </p>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                The Company will take all steps reasonably necessary to ensure
                that Your data is treated securely and in accordance with this
                Privacy Policy and no transfer of Your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of Your data and other
                personal information.
              </p>
              <h3 className="font-medium text-spotify-white">
                Delete Your Personal Data
              </h3>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                You have the right to delete or request that We assist in
                deleting the Personal Data that We have collected about You.
              </p>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                Our Service may give You the ability to delete certain
                information about You from within the Service.
              </p>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                You may update, amend, or delete Your information at any time by
                signing in to Your Account, if you have one, and visiting the
                account settings section that allows you to manage Your personal
                information. You may also contact Us to request access to,
                correct, or delete any personal information that You have
                provided to Us.
              </p>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                Please note, however, that We may need to retain certain
                information when we have a legal obligation or lawful basis to
                do so.
              </p>
              <h3 className="font-medium text-spotify-white">
                Disclosure of Your Personal Data
              </h3>
              <h4 className="text-l font-medium text-spotify-white">
                Business Transactions
              </h4>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                If the Company is involved in a merger, acquisition or asset
                sale, Your Personal Data may be transferred. We will provide
                notice before Your Personal Data is transferred and becomes
                subject to a different Privacy Policy.
              </p>
              <h4 className="text-l font-medium text-spotify-white">
                Law enforcement
              </h4>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                Under certain circumstances, the Company may be required to
                disclose Your Personal Data if required to do so by law or in
                response to valid requests by public authorities (e.g. a court
                or a government agency).
              </p>
              <h4 className="text-l font-medium text-spotify-white">
                Other legal requirements
              </h4>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                The Company may disclose Your Personal Data in the good faith
                belief that such action is necessary to:
                <ul>
                  <li>Comply with a legal obligation</li>
                  <li>
                    Protect and defend the rights or property of the Company
                  </li>
                  <li>
                    Prevent or investigate possible wrongdoing in connection
                    with the Service
                  </li>
                  <li>
                    Protect the personal safety of Users of the Service or the
                    public
                  </li>
                  <li>Protect against legal liability</li>
                </ul>
              </p>
              <h3 className="font-medium text-spotify-white">
                Security of Your Personal Data
              </h3>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                The security of Your Personal Data is important to Us, but
                remember that no method of transmission over the Internet, or
                method of electronic storage is 100% secure. While We strive to
                use commercially acceptable means to protect Your Personal Data,
                We cannot guarantee its absolute security.
              </p>
              <h2 className="text-l font-medium text-spotify-white">
                Children's Privacy
              </h2>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                Our Service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 13. If You are a parent or guardian and
                You are aware that Your child has provided Us with Personal
                Data, please contact Us. If We become aware that We have
                collected Personal Data from anyone under the age of 13 without
                verification of parental consent, We take steps to remove that
                information from Our servers.
              </p>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                If We need to rely on consent as a legal basis for processing
                Your information and Your country requires consent from a
                parent, We may require Your parent's consent before We collect
                and use that information.
              </p>
              <h2 className="text-l font-medium text-spotify-white">
                Links to Other Websites
              </h2>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                Our Service may contain links to other websites that are not
                operated by Us. If You click on a third party link, You will be
                directed to that third party's site. We strongly advise You to
                review the Privacy Policy of every site You visit.
              </p>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                We have no control over and assume no responsibility for the
                content, privacy policies or practices of any third party sites
                or services.
              </p>
              <h2 className="text-l font-medium text-spotify-white">
                Changes to this Privacy Policy
              </h2>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                We may update Our Privacy Policy from time to time. We will
                notify You of any changes by posting the new Privacy Policy on
                this page.
              </p>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                We will let You know via email and/or a prominent notice on Our
                Service, prior to the change becoming effective and update the
                &quot;Last updated&quot; date at the top of this Privacy Policy.
              </p>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>
              <h2 className="text-l font-medium text-spotify-white">
                Contact Us
              </h2>
              <p className="text-base leading-relaxed text-spotify-light-grey">
                If you have any questions about this Privacy Policy, <a
                      href="https://festisounds.vercel.app/contact"
                      rel="external nofollow noopener"
                      target="_blank"
                    >
                      <u>contact us here for more information.</u>
                    </a>
              </p>
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex items-center space-x-3 rounded-b border-t border-gray-200 p-4 rtl:space-x-reverse md:p-5">
            <button
              data-modal-hide="extralarge-modal"
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-spotify-green px-5 py-3 text-center text-base font-medium text-spotify-white hover:text-spotify-green hover:ring-1 hover:ring-spotify-green hover:bg-transparent focus:ring-4 focus:ring-spotify-green"
              onClick={props.onClose}
            >
              I understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;