import React, { forwardRef } from "react";
import { Flex } from "../Flex";

const CardHeader = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { children } = props;
  return <div ref={ref}>{children}</div>;
});

type LocalCardProps = {} & React.ComponentPropsWithRef<"div">;

const CardComponent = forwardRef<HTMLDivElement, LocalCardProps>(
  (props, ref) => {
    const { children } = props;
    return <Flex ref={ref}>{children}</Flex>;
  }
);

export const Card = Object.assign(CardComponent, { Header: CardHeader });
