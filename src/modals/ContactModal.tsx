import { ModalType } from "../types/ModalType";

const ContactModal = (props: ModalType) => {

  
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
              Contact Us
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
            <div className="p-4 md:p-5">
              <form className="space-y-4 " action="#">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-spotify-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-lg border border-spotify-light-grey bg-gray-50 p-2.5 text-sm text-spotify-dark-grey focus:border-spotify-green focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-spotify-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-lg border border-spotify-light-grey bg-gray-50 p-2.5 text-sm text-spotify-dark-grey focus:border-spotify-green focus:ring-spotify-green"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-spotify-white"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="block w-full rounded-lg border border-spotify-light-grey bg-gray-50 p-2.5 text-sm text-spotify-dark-grey focus:border-spotify-green focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-spotify-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="block w-full rounded-lg border border-spotify-light-grey bg-gray-50 p-2.5 text-sm text-spotify-dark-grey focus:border-spotify-green focus:ring-spotify-green"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="details"
                    className="mb-2 block text-sm font-medium text-spotify-white"
                  >
                    Details
                  </label>
                  <textarea
                    name="details"
                    id="details"
                    rows={12}
                    className="block w-full rounded-lg border border-spotify-light-grey bg-gray-50 p-2.5 text-sm text-spotify-dark-grey focus:border-spotify-green focus:ring-spotify-green"
                    required
                  ></textarea>
                </div>
                
              </form>
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex items-center space-x-3 rounded-b border-t border-gray-200 p-4 rtl:space-x-reverse md:p-5">
            <button
              data-modal-hide="extralarge-modal"
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-spotify-green px-5 py-3 text-center text-base font-medium text-spotify-white hover:bg-transparent hover:text-spotify-green hover:ring-1 hover:ring-spotify-green focus:ring-4 focus:ring-spotify-green"
              onClick={props.onClose}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
