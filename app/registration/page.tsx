import Link from "next/link";
import Image from "next/image";

export default function Registration() {
  return (
    <>
      <div className="flex">
        {/*  image by the side */}
        <div className="invisible lg:flex lg:flex-col lg:justify-center pt-[8rem] h-screen">
          <Image src="/assets/group15.png" width={650} height={650} alt="" />
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-red-50">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Link href="/">
              <ImageImageImage
                className="mx-auto h-10 w-auto"
                src="/logo.svg"
                alt="onroad logo"
                width={200}
                height={200}
                width={200}
                height={200}
                width={200}
                height={200}
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Registration Form
              </h2>
            </Link>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Date of birth
                </label>
                <div className="mt-2">
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    autoComplete="date"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State of origin
                </label>
                <div className="mt-2">
                  <input
                    id="soo"
                    name="soo"
                    type="text"
                    autoComplete="state"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Age
                </label>
                <div className="mt-2">
                  <input
                    id="age"
                    name="age"
                    type="number"
                    autoComplete="age"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Training duration
                </label>
                <div className="mt-2">
                  <div class="flex items-center mb-4">
                    <input
                      id="3"
                      type="radio"
                      value="3"
                      name="3"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="3"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      3 months
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      checked
                      id="6"
                      type="radio"
                      value="6"
                      name="6"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="6"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      6 month
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Car model
                </label>
                <div className="mt-2">
                  <div class="flex items-center mb-4">
                    <input
                      id="manual"
                      type="radio"
                      value="manual"
                      name="manual"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="manual"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Manual
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      checked
                      id="auto"
                      type="radio"
                      value="auto"
                      name="auto"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="auto"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Automatic
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Car specs
                </label>
                <div className="mt-2">
                  <div class="flex items-center mb-4">
                    <input
                      checked
                      id="benz"
                      type="radio"
                      value="benz"
                      name="benz"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="benz"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Mercedez Benz
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      id="toyota"
                      type="radio"
                      value="toyota"
                      name="toyota"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="toyota"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Toyota camry
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      id="audi"
                      type="radio"
                      value="audi"
                      name="audi"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="audi"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Audi
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      id="tesla"
                      type="radio"
                      value="tesla"
                      name="tesla"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="tesla"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Tesla
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#407BBF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#407BBF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#407BBF]"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
