"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [stateOfOrigin, setStateOfOrigin] = useState("");
  const [age, setAge] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedCarModel, setSelectedCarModel] = useState("");
  const [selectedCarSpecs, setSelectedCarSpecs] = useState("");

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const formData = {};

    for (let [key, value] of form) {
      formData[key] = value;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Cross-Origin-Resource-Policy": "cross-origin",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setDateOfBirth("");
    setStateOfOrigin("");
    setAge("");
    setSelectedDuration("");
    setSelectedCarModel("");
    setSelectedCarSpecs("");
  };

  return (
    <>
      <div className="flex">
        {/*  image by the side */}
        <div className="hidden lg:flex lg:flex-col lg:justify-center pt-[8rem] h-screen">
          <Image src="/assets/group15.png" width={650} height={650} alt="" />
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Link href="/">
              <Image
                className="mx-auto h-10 w-auto"
                src="/logo.svg"
                alt="onroad logo"
                width={200}
                height={200}
              />
            </Link>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Registration Form
            </h2>
          </div>

          {/* error signal */}
          {error && (
            <div role="alert" className="relative">
              <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 mt-4">
                Oops! Try again?
              </div>
              <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>Something did not go as expected.</p>
              </div>
              <span
                className="absolute top-0 bottom-0 right-0 text-red-200 px-4 py-3 mt-2"
                onClick={() => setError(false)}
              >
                <svg
                  className="fill-current h-6 w-6 text-red"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}

          {success && (
            <div role="alert" className="relative">
              <div className="bg-green-500 text-white font-bold rounded-t px-4 py-2 mt-4">
                Registered successfully! Cheers!
              </div>
              <div className="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
                <p> We&apos;re gonna reach out to you real soon.</p>
              </div>
              <span
                className="absolute top-0 bottom-0 right-0 text-green-200 px-4 py-3 mt-2"
                onClick={() => setSuccess(false)}
              >
                <svg
                  className="fill-current h-6 w-6 text-red"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-rows-3 gap-4">
                {/* first grid */}
                <div>
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First Name
                    </label>
                    <div className="mt-2">
                      <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="name"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="lastName"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                {/* second grid */}
                <div>
                  <div>
                    <label
                      htmlFor="dateOfBirth"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Date of birth
                    </label>
                    <div className="mt-2">
                      <input
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        autoComplete="date"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="stateOfOrigin"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State of origin
                    </label>
                    <div className="mt-2">
                      <input
                        value={stateOfOrigin}
                        onChange={(e) => setStateOfOrigin(e.target.value)}
                        id="stateOfOrigin"
                        name="stateOfOrigin"
                        type="text"
                        autoComplete="stateOfOrigin"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
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
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        id="age"
                        name="age"
                        type="number"
                        autoComplete="age"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                {/* third grid */}
                <div>
                  <div>
                    <label
                      htmlFor="duration"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Training duration
                    </label>
                    <div className="mt-2">
                      <div className="flex items-center mb-4">
                        <select
                          name="duration"
                          id="carModel"
                          className="rounded p-1"
                          value={selectedDuration}
                          onChange={(e) => setSelectedDuration(e.target.value)}
                          defaultValue="1"
                          required
                        >
                          <option value="1">1 month</option>
                          <option value="3">3 months</option>
                          <option value="6">6 months</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="carModel"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Car model
                    </label>
                    <div className="mt-2">
                      <div className="flex items-center mb-4">
                        <select
                          name="carModel"
                          id="carModel"
                          className="rounded p-1"
                          value={selectedCarModel}
                          onChange={(e) => setSelectedCarModel(e.target.value)}
                          defaultValue="manual"
                          required
                        >
                          <option value="manual">Manual</option>
                          <option value="automatic">Automatic</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="carSpecs"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Car specs
                    </label>
                    <div className="mt-2">
                      <div className="flex items-center mb-4">
                        <select
                          name="carSpecs"
                          id="carSpecs"
                          className="rounded p-1"
                          value={selectedCarSpecs}
                          onChange={(e) => setSelectedCarSpecs(e.target.value)}
                          defaultValue="benz"
                          required
                        >
                          <option value="benz">Mercedez Benz</option>
                          <option value="audii">Audii</option>
                          <option value="camry">Toyota Camry</option>
                        </select>
                      </div>
                    </div>
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
