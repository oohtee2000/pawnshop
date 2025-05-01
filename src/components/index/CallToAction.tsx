import React from 'react';
import Button from "@/components/ui/Button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Ready to Join Our Marketplace?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Whether you&apos;re a seller with items to offer or a pawnshop owner looking to grow your catalog, PawnNexus connects you with the right people—fast and efficiently.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-4 text-lg rounded-xl shadow-md transition-all duration-300">
              Register as Seller
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-md transition-all duration-300">
              Register as Pawnshop Owner
            </Button>
          </div>

          <p className="text-sm text-gray-400">
            Already have an account?{' '}
            <a
              href="#"
              className="text-yellow-300 underline hover:text-white transition-colors duration-200"
            >
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
