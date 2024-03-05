import type { FC } from "react";
import Send from "./assets/send.svg?react";

const Icons = {
  send: Send
};

export interface IconProps {
  type: keyof typeof Icons;
  className?: string;
  sizeClasses?: string;
}

export const Icon: FC<IconProps> = ({
  type,
  className,
  sizeClasses = "w-5 h-5",
}) => {
  const Component = Icons[type];
  return <Component className={`${className} ${sizeClasses}`} />;
};

export default Icon;
