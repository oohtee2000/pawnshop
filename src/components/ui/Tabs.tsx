'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import clsx from 'clsx';

export const Tabs = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) => (
  <TabsPrimitive.Root className={clsx("w-full", className)} {...props} />
);

export const TabsList = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List
    className={clsx(
      "inline-flex items-center justify-center rounded-lg bg-gray-100 p-1",
      className
    )}
    {...props}
  />
);

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={clsx(
      "px-4 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-white data-[state=active]:text-pawn-emerald rounded-md transition-colors",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = 'TabsTrigger';


export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={clsx("mt-4 focus:outline-none", className)}
    {...props}
  />
));
TabsContent.displayName = 'TabsContent';

