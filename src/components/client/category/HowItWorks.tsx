// app/components/HowItWorks.tsx or components/HowItWorks.tsx

'use client';

import { Search, MessageSquare, Handshake, Shield, LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const steps: Step[] = [
  {
    icon: Search,
    title: "Browse & Search",
    description: "Find exactly what you're looking for with our advanced search and filtering system",
    color: "text-blue-600 bg-blue-100"
  },
  {
    icon: MessageSquare,
    title: "Connect & Negotiate",
    description: "Message sellers directly to ask questions, negotiate prices, and arrange meetings",
    color: "text-green-600 bg-green-100"
  },
  {
    icon: Handshake,
    title: "Meet & Deal",
    description: "Meet in safe, public locations or arrange secure shipping for your transactions",
    color: "text-purple-600 bg-purple-100"
  },
  {
    icon: Shield,
    title: "Protected & Secure",
    description: "All transactions are protected with our buyer and seller guarantee programs",
    color: "text-orange-600 bg-orange-100"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple steps to buy and sell with confidence on our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group relative">
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-x-8">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
