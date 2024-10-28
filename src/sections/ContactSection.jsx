"use client";

import { Button } from "flowbite-react";

export default function ContactSection() {
  const inputStyles = "focus:ring-4 focus:ring-primary rounded-lg w-full";
  const labelStyles = "text-white w-full font-semibold block mb-2";

  return (
    <form className="flex text-left w-96 flex-col gap-4 p-3 rounded-lg bg-zinc-800">
      {/* EMAIL */}
      <div>
        <label htmlFor="email" className={`${labelStyles}`}>
          Your Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="johndoe@example.com"
          required
          className={`${inputStyles}`}
        />
      </div>
      {/* SUBJECT */}
      <div>
        <label htmlFor="subject" value="Subject" className={`${labelStyles}`}>
          Subject
        </label>
        <input id="subject" type="text" required className={`${inputStyles}`} />
      </div>
      {/* MESSAGE */}
      <div>
        <div className="mb-2 block">
          <label htmlFor="message" className={`${labelStyles}`}>
            Message
          </label>
        </div>
        <textarea id="message" rows={6} required className={`${inputStyles}`} />
      </div>
      {/* SUBMIT */}
      <Button
        type="submit"
        className="bg-zinc-700 hover:!bg-zinc-600 font-semibold focus:ring-4 focus:ring-primary"
      >
        Submit
      </Button>
    </form>
  );
}
