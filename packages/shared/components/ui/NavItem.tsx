import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"
import React from "react"

export interface NavItemProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
}

const NavItem = React.forwardRef<HTMLButtonElement, NavItemProps>(
    ({ className, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn('relative hover:before:block before:hidden before:absolute before:-bottom-[1px] before:left-0 before:w-full before:h-[2px] before:bg-red-800', className)}
                ref={ref}
                {...props}
            />
        )
    }
)
NavItem.displayName = "NavItem"

export { NavItem }