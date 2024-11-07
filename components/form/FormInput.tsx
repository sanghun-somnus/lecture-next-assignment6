"use client";

import { useFormStatus } from "react-dom";
import { IconType } from "react-icons";

export default function FormInput({
  Icon,
  type,
  placeholder,
  name,
  error,
}: {
  Icon: IconType;
  type: string;
  placeholder: string;
  name: string;
  error?: { message: string } | undefined;
}) {
  const { pending } = useFormStatus();
  return (
    <label className="flex flex-col">
      <div className="ring-1 ring-stone-300 rounded-full flex gap-3 px-5 items-center focus:ring-offset-2 focus:ring-offset-stone-500">
        <span>
          <Icon className="size-4" />
        </span>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="outline-none h-10"
        />
      </div>
      <span
        className={`${pending && "hidden"} ${
          !!error && "block px-2  py-2 text-red-500"
        }`}>
        {error?.message}
      </span>
    </label>
  );
}
