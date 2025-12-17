import { memo } from "react";

const FormLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-[90vh]">{children}</div>
  );
};

export default memo(FormLayout);
