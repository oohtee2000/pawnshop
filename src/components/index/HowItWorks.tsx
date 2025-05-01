import React from 'react';
import { Card, CardContent } from "@/components/ui/Card";

interface StepProps {
  number: number;
  title: string;
  description: string;
  userType: string;
  icon: string;
  bgColor: string;
}

const steps: StepProps[] = [
  {
    number: 1,
    title: "Submit Your Item",
    description: "Take photos and provide details of your item for review.",
    userType: "Seller",
    icon: "📸",
    bgColor: "bg-blue-50"
  },
  {
    number: 2,
    title: "Approve & Price",
    description: "Review items and set the optimal selling price.",
    userType: "Pawnshop Owner",
    icon: "✅",
    bgColor: "bg-green-50"
  },
  {
    number: 3,
    title: "List & Market",
    description: "Items are professionally listed and marketed to buyers.",
    userType: "Pawnshop Owner",
    icon: "🚀",
    bgColor: "bg-yellow-50"
  },
  {
    number: 4,
    title: "Sell & Profit",
    description: "When your item sells, both you and the pawnshop owner earn money.",
    userType: "Seller & Owner",
    icon: "💰",
    bgColor: "bg-purple-50"
  }
];

const StepCard = ({ step }: { step: StepProps }) => {
  return (
    <Card className="border-none shadow-md h-full transition-transform hover:-translate-y-1 bg-white">
      <CardContent className="p-6">
        <div className={`w-12 h-12 ${step.bgColor} rounded-full flex items-center justify-center text-2xl mb-4`}>
          {step.icon}
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-900 text-white text-xs px-2 py-1 rounded-full font-semibold">
            {step.number}
          </span>
          <span className="text-xs text-emerald-600 font-medium">{step.userType}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
        <p className="text-gray-600 text-sm">{step.description}</p>
      </CardContent>
    </Card>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform connects sellers with pawnshop owners and buyers for a seamless selling experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block border border-yellow-400 text-blue-900 px-4 py-3 rounded-lg bg-white shadow-sm">
            <span className="font-medium">
              Simple, transparent, and profitable for everyone involved
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
