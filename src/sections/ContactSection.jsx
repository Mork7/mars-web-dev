"use client";

import { Button } from "flowbite-react";

export default function ContactSection() {
  const inputStyles = "focus:ring-4 focus:ring-red-700 focus:border-none rounded-lg w-full bg-zinc-900 text-white placeholder-gray-500";
  const labelStyles = "text-red-500 font-semibold block mb-2";

  return (
    <form className="flex w-80 text-left flex-col gap-4 p-4 rounded-lg bg-black border border-zinc-700 sm:w-96">
      {/* EMAIL */}
      <div>
        <label htmlFor="email" className={labelStyles}>
          Your Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="johndoe@example.com"
          required
          className={inputStyles}
        />
      </div>
      {/* SUBJECT */}
      <div>
        <label htmlFor="subject" className={labelStyles}>
          Subject
        </label>
        <input id="subject" type="text" required className={inputStyles} />
      </div>
      {/* MESSAGE */}
      <div>
        <label htmlFor="message" className={labelStyles}>
          Message
        </label>
        <textarea id="message" rows={6} required className={inputStyles} />
      </div>
      {/* SUBMIT */}
      <Button
        type="submit"
        color="failure"
        className=" bg-red-500  text-white font-semibold focus:ring-4 focus:ring-red-700"
      >
        Submit
      </Button>
    </form>
  );
}
