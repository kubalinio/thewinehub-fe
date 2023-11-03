"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "../../lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, min, max, step, value, defaultValue, onValueChange, ...props }, ref) => {
  // const initialValue = Array.isArray(value) ? value : [min, max];
  const [localValues, setLocalValues] = React.useState(defaultValue);

  const handleValueChange = (newValues: number[]) => {
    setLocalValues(newValues);
    if (onValueChange) {
      onValueChange(newValues);
    }
  };

  return (
    <SliderPrimitive.Root
      ref={ref}
      min={min}
      max={max}
      step={step}
      value={localValues}
      onValueChange={handleValueChange}
      className={cn('relative flex w-full touch-none select-none items-center', className)}
      {...props}
    >
      <SliderPrimitive.Track className="relative w-full h-2 overflow-hidden rounded-full grow bg-secondary">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      {localValues!.map((value, index) => (
        <React.Fragment key={index}>
          <div className="absolute text-center" style={{ left: `calc(${((value! - min!) / (max! - min!)) * 100}% + 0px)`, top: `10px` }}>
            <span className="text-xs">{value}</span>
          </div>
          <SliderPrimitive.Thumb
            className="block w-4 h-4 transition-colors border rounded-full shadow border-primary/50 bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          />
        </React.Fragment>
      ))}
      {/* <SliderPrimitive.Thumb className="block w-5 h-5 transition-colors border-2 rounded-full border-primary bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    <SliderPrimitive.Thumb className="block w-5 h-5 transition-colors border-2 rounded-full border-primary bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" /> */}
    </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
