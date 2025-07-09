'use client';

import React, { useState } from "react";
import SellerLayout from "@/components/seller/SellerLayout";
import DashboardOverview from "@/components/seller/DashboardOverview";
import ItemManagement from "@/components/seller/ItemManagement";
import AddItemForm from "@/components/seller/AddItemForm";
import SalesOverview from "@/components/seller/SalesOverview";
import { Tab } from "@/types/sellerTabs";


const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />;
      case "items":
        return <ItemManagement />;
      case "add-item":
        return <AddItemForm />;
      case "sales":
        return <SalesOverview />;
      case "analytics":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Analytics</h2>
            <p className="text-muted-foreground">Advanced analytics coming soon...</p>
          </div>
        );
      case "settings":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <p className="text-muted-foreground">Account settings coming soon...</p>
          </div>
        );
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <SellerLayout activeTab={activeTab} onTabChange={setActiveTab}> 
    
      {renderContent()}
    </SellerLayout>
  );
};

export default SellerDashboard;
