"use server";

export default async function handleForm(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData
) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (formData.get("password") === "1234") {
    return {
      isValid: true,
    };
  }
  return {
    isValid: false,
    message: "password is not correct",
  };
}
