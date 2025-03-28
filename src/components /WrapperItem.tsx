import { ReactNode } from "react";

interface WrapperItemProps {
  children: ReactNode;
  className?: string;
}

export const WrapperItem = ({ children, className }: WrapperItemProps) => {
  return (
    <div
      className={`flex justify-center items-center flex-col  rounded-xl bg-white/70 px-7 py-3  shadow-2xl  ${className}`}
    >
      {children}
    </div>
  );
};
