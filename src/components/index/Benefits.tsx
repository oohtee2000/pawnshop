import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Card, CardContent } from "@/components/ui/Card";
import { CheckCircle } from "lucide-react";

interface BenefitProps {
  title: string;
  description: string;
}

const sellerBenefits: BenefitProps[] = [
  {
    title: "No Upfront Costs",
    description: "List your items without any initial fees or charges."
  },
  {
    title: "Professional Marketing",
    description: "Your items are marketed by experienced pawnshop owners."
  },
  {
    title: "Wider Reach",
    description: "Access established customer bases and multiple selling channels."
  },
  {
    title: "Hassle-Free Process",
    description: "No need to deal with inquiries, negotiations, or shipping arrangements."
  }
];

const ownerBenefits: BenefitProps[] = [
  {
    title: "Zero Inventory Investment",
    description: "Expand your catalog without purchasing inventory upfront."
  },
  {
    title: "Additional Profit Margins",
    description: "Earn commissions plus additional profit from price adjustments."
  },
  {
    title: "Diverse Product Range",
    description: "Offer a wide variety of items to attract more customers."
  },
  {
    title: "Build Customer Relationships",
    description: "Create lasting connections with both sellers and buyers."
  }
];

const BenefitCard = ({ benefit }: { benefit: BenefitProps }) => {
  return (
    <Card className="border-none shadow-sm bg-white">
      <CardContent className="p-6 flex items-start gap-4">
        <CheckCircle className="text-emerald-600 h-6 w-6 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Benefits = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Benefits for Everyone</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform creates value for both sellers and pawnshop owners through a collaborative partnership.
          </p>
        </div>

        <Tabs defaultValue="seller" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 mb-8 bg-white border rounded-md">
            <TabsTrigger value="seller" className="text-lg py-3">For Sellers</TabsTrigger>
            <TabsTrigger value="owner" className="text-lg py-3">For Pawnshop Owners</TabsTrigger>
          </TabsList>
          
          <TabsContent value="seller">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {sellerBenefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="owner">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {ownerBenefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Benefits;
