import { FC } from "react";
import { Shield, DollarSign, Users, Clock, Award, Headphones } from "lucide-react";

interface Benefit {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
}

const Benefits: FC = () => {
  const benefits: Benefit[] = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description:
        "Every transaction is protected with our comprehensive buyer and seller protection programs",
    },
    {
      icon: DollarSign,
      title: "Best Prices",
      description:
        "Get the best value with our AI-powered pricing suggestions and competitive marketplace",
    },
    {
      icon: Users,
      title: "Trusted Community",
      description:
        "Join thousands of verified buyers and sellers in our safe, trusted marketplace",
    },
    {
      icon: Clock,
      title: "Quick Deals",
      description:
        "Fast turnaround times with instant messaging and quick transaction processing",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description:
        "All items are verified and guaranteed to match their descriptions or your money back",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to help with any issues",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose PawnSphere?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are more than just a marketplace - We are your trusted partner in
            every transaction
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <article
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
