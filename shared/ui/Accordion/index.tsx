import * as React from "react";
import { Accordion } from "radix-ui";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex justify-between w-full">
    <Accordion.Trigger
      className={classNames("AccordionTrigger text-l-regular", className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        width={20}
        height={20}
        className="text-main-additional-text"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Accordion.Content>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames("AccordionContent", className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText text-s leading-[18px] text-main-additional-text">
      {children}
    </div>
  </Accordion.Content>
));
AccordionContent.displayName = "AccordionContent";
