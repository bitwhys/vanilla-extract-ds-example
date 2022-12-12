import React from "react";
import classNames from "classnames";
import * as styles from "./Button.css";

type ButtonStylesProps = {
  variant: "solid" | "outline";
  colorScheme: "primary" | "danger";
  size: "sm" | "md" | "lg";
};

type LocalButtonProps = {
  as?: React.ElementType<any>;
} & Partial<ButtonStylesProps> &
  React.ComponentPropsWithRef<"button">;

const generateButtonStyles = (props: ButtonStylesProps) => {
  return classNames(
    styles.base,
    styles.colorScheme[props.colorScheme],
    styles.size[props.size],
    styles.variant[props.variant]
  );
};

export const Button = React.forwardRef<HTMLButtonElement, LocalButtonProps>(
  (props, ref) => {
    const {
      children,
      as: Component = "button",
      variant = "solid",
      colorScheme = "primary",
      size = "md",
      ...rest
    } = props;

    const styles = generateButtonStyles({
      variant,
      colorScheme,
      size
    });

    return (
      <Component ref={ref} className={styles} {...rest}>
        {children}
      </Component>
    );
  }
);

export type ButtonProps = React.ComponentProps<typeof Button>;
