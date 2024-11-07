"use client";

import FormButton from "@/components/form/FormButton";
import FormInput from "@/components/form/FormInput";
import StatusBar from "@/components/StatusBar";
import { useActionState } from "react";
import { FaFire, FaRegUser, FaCheck } from "react-icons/fa6";
import { MdOutlineEmail, MdKey } from "react-icons/md";
import handleForm from "./actions";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [state, formAction, isPending] = useActionState(handleForm, {} as any);
  return (
    <div className="max-w-screen-sm mx-auto py-10 px-10">
      <main className="flex flex-col gap-3 items-center px-5">
        <div className="w-full flex justify-center py-8">
          <FaFire className="size-12 text-red-400" />
        </div>
        <form
          className="flex flex-col gap-4 w-full"
          action={formAction}>
          <FormInput
            name="email"
            Icon={MdOutlineEmail}
            type="email"
            placeholder="Email"
          />
          <FormInput
            name="username"
            Icon={FaRegUser}
            type="text"
            placeholder="Username"
          />
          <FormInput
            name="password"
            Icon={MdKey}
            type="password"
            placeholder="Password"
            error={!state?.isValid ? { message: state?.message } : undefined}
          />
          <FormButton text="Log In" />
        </form>
        <StatusBar
          Icon={FaCheck}
          text={"Welcome back!"}
          isOk={!!state?.isValid && !isPending}
        />
      </main>
    </div>
  );
}
