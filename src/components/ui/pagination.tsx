import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Págination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="págination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Págination.displayName = "Págination";

const PáginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  ),
);
PáginationContent.displayName = "PáginationContent";

const PáginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PáginationItem.displayName = "PáginationItem";

type PáginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PáginationLink = ({ className, isActive, size = "icon", ...props }: PáginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PáginationLink.displayName = "PáginationLink";

const PáginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PáginationLink>) => (
  <PáginationLink aria-label="Go to previous page" size="default" className={cn("gap-1 pl-2.5", className)} {...props}>
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PáginationLink>
);
PáginationPrevious.displayName = "PáginationPrevious";

const PáginationNext = ({ className, ...props }: React.ComponentProps<typeof PáginationLink>) => (
  <PáginationLink aria-label="Go to next page" size="default" className={cn("gap-1 pr-2.5", className)} {...props}>
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PáginationLink>
);
PáginationNext.displayName = "PáginationNext";

const PáginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span aria-hidden className={cn("flex h-9 w-9 items-center justify-center", className)} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PáginationEllipsis.displayName = "PáginationEllipsis";

export {
  Págination,
  PáginationContent,
  PáginationEllipsis,
  PáginationItem,
  PáginationLink,
  PáginationNext,
  PáginationPrevious,
};
