import { IconType } from "react-icons";

type StatusBarProps = {
  Icon: IconType;
  text: string;
  isOk: boolean;
};

export default function StatusBar({ Icon, text, isOk }: StatusBarProps) {
  return (
    <div
      className={`w-full bg-green-600 rounded-2xl px-5 py-3 font-bold flex gap-4 items-center  ${
        isOk ? "visible" : "invisible"
      }`}>
      <span>
        <Icon />
      </span>
      <span>{text}</span>
    </div>
  );
}
