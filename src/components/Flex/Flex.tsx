import React, { ComponentPropsWithRef, forwardRef } from "react";
import classNames from "classnames";
import { styles } from "./Flex.css";

type LocalFlexProps = ComponentPropsWithRef<"div">;

export const Flex = forwardRef<HTMLDivElement, LocalFlexProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <div ref={ref} className={classNames(styles)} {...rest}>
      {children}
    </div>
  );
});
