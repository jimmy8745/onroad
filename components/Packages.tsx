import { CheckIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const includedFeatures1 = [
  "Member resources",
  "Refreshing drives at exhortic locations",
];

const includedFeatures2 = ["Member resources", "Official student t-shirt"];

const includedFeatures3 = [
  "Private home training",
  "Member resources",
  "Entry to exhortic training venues",
  "Official student t-shirt",
];

export default function Example() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Prices and Packages
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Are you looking to get the best value for your driver education
            investment? We have package opportunities that are perfect as a gift
            or for yourself. Find the package that suit you best! Easily pay
            online and let us take care of rest!
          </p>
        </div>
        <>
          {/* package 1 */}
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                1 month refresher series
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Nigeria’s leading experts in driver education will provide you
                with the skills required to be a safe and confident driver for
                life. We offer a wide range of driving lessons and pride
                ourselves in delivering quality education with an excellent and
                professional team.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-[#407BBF]-600">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures1.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-[#407BBF]-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    Pay once, train now, drive now!
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      NGN15,000
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      NGN
                    </span>
                  </p>
                  <Link
                    href="/registration"
                    className="mt-10 block w-full rounded-md bg-[#407BBF] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#409BBF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#407BBF]"
                  >
                    Register now
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* package 2 */}
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                3 months training series
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Nigeria’s leading experts in driver education will provide you
                with the skills required to be a safe and confident driver for
                life. We offer a wide range of driving lessons and pride
                ourselves in delivering quality education with an excellent and
                professional team.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-[#407BBF]-600">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures2.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-[#407BBF]-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    Pay once, train now, drive now!
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      NGN30,000
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      NGN
                    </span>
                  </p>
                  <Link
                    href="/registration"
                    className="mt-10 block w-full rounded-md bg-[#407BBF] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#409BBF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#407BBF]"
                  >
                    Register now
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* package 3 */}
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                6 months training series
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Nigeria’s leading experts in driver education will provide you
                with the skills required to be a safe and confident driver for
                life. We offer a wide range of driving lessons and pride
                ourselves in delivering quality education with an excellent and
                professional team.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-[#407BBF]-600">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures3.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-[#407BBF]-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    Pay once, train now, drive now!
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      NGN60,000
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      NGN
                    </span>
                  </p>
                  <Link
                    href="/registration"
                    className="mt-10 block w-full rounded-md bg-[#407BBF] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#409BBF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#407BBF]"
                  >
                    Register now
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
