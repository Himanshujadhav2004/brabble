import { ReactNode } from "react";
import { cn } from "@/lib/utils";



const features = [
  {
    name: "Lowest Latency",
    description: "Enjoy smooth and instant interactions with our ultra-low latency AI technology .",
    href: "/",
    className: "lg:row-span-2",
  },
  {
    name: "AI-Powered Call Assistant",
    description: "Create intelligent AI assistants that handle phone calls with human-like conversation.",
    href: "/",
    className: "lg:col-span-2",
  },
  {
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
  },
  {
    name: "Call Automation",
    description: "Automate both inbound and outbound calls to increase efficiency and reach.",
    href: "/",
  },
  {
    name: "Notifications",
    description: "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    className: "lg:col-span-2",
  },
];

const BentoGrid = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn("grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {children}
    </div>
  );
};

const BentoCard = ({ name, className, description }: { name: string; className?: string; description: string; href: string }) => (
  <div
    className={cn(
      "relative flex flex-col justify-between p-6 overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:scale-105 dark:bg-background border",
      className
    )}
  >
    
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
    </div>
    {/* <Button variant="outline" asChild className="mt-4">
      <a href={href}>Learn More</a>
    </Button> */}
  </div>
);

const FeaturesGrid = () => {
  return (
 
    <BentoGrid>
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
      </BentoGrid>

  );
};

export { BentoCard, BentoGrid, FeaturesGrid }; 