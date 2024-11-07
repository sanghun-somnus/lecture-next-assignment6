"use client";

import { useFormStatus } from "react-dom";

type Props = {
  text: string;
};

export default function FormButton({ text }: Props) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="w-full rounded-full bg-stone-300 text-xs h-10 font-bold hover:bg-stone-400 active:scale-90 disabled:bg-stone-200 disabled:text-stone-400 transition-transform disabled:active:scale-100">
      {text}
    </button>
  );
}
