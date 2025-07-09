// app/sales/page.tsx
import { FC } from "react";

interface Sale {
  id: number;
  itemName: string;
  buyer: string;
  salePrice: number;
  commission: number;
  netEarnings: number;
  saleDate: string;
  status: "Completed" | "Processing";
}

interface MonthlyStat {
  month: string;
  sales: number;
  revenue: number;
}

const salesData: Sale[] = [
  {
    id: 1,
    itemName: "Vintage Rolex Watch",
    buyer: "Michael Johnson",
    salePrice: 1200,
    commission: 120,
    netEarnings: 1080,
    saleDate: "2024-01-10",
    status: "Completed",
  },
  {
    id: 2,
    itemName: "Diamond Ring",
    buyer: "Sarah Wilson",
    salePrice: 850,
    commission: 85,
    netEarnings: 765,
    saleDate: "2024-01-08",
    status: "Completed",
  },
  {
    id: 3,
    itemName: "Gold Necklace",
    buyer: "David Brown",
    salePrice: 320,
    commission: 32,
    netEarnings: 288,
    saleDate: "2024-01-05",
    status: "Processing",
  },
];

const monthlyStats: MonthlyStat[] = [
  { month: "Dec 2023", sales: 2, revenue: 1450 },
  { month: "Jan 2024", sales: 3, revenue: 2370 },
  { month: "Feb 2024", sales: 0, revenue: 0 },
  { month: "Mar 2024", sales: 0, revenue: 0 },
];

const SalesOverviewPage: FC = () => {
  const totalRevenue = salesData.reduce((sum, sale) => sum + sale.netEarnings, 0);
  const totalSales = salesData.length;
  const averageSale = totalRevenue / totalSales || 0;

  return (
    <div className="p-6 md:p-10 space-y-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-extrabold text-gray-800">Sales Dashboard</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Revenue", value: `$${totalRevenue.toLocaleString()}`, color: "text-green-600" },
          { label: "Total Sales", value: totalSales, color: "text-blue-600" },
          { label: "Average Sale", value: `$${averageSale.toFixed(0)}`, color: "text-yellow-600" },
          { label: "This Month", value: "$2,370", color: "text-orange-600" },
        ].map(({ label, value, color }, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">
            <p className="text-sm text-gray-500">{label}</p>
            <p className={`text-2xl font-bold mt-1 ${color}`}>{value}</p>
          </div>
        ))}
      </div>

      {/* Recent Sales Table */}
<div className="bg-white rounded-2xl shadow-md p-6">
  <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Sales</h3>
  <div className="hidden md:block overflow-x-auto">
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b text-left text-gray-500">
          <th className="py-3">Item</th>
          <th className="py-3">Buyer</th>
          <th className="py-3">Net Earnings</th>
          <th className="py-3">Date</th>
          <th className="py-3">Status</th>
        </tr>
      </thead>
      <tbody>
        {salesData.map((sale, i) => (
          <tr
            key={sale.id}
            className={`border-b last:border-0 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
          >
            <td className="py-3 font-medium text-gray-800">{sale.itemName}</td>
            <td className="py-3 text-gray-600">{sale.buyer}</td>
            <td className="py-3 font-semibold text-green-600">${sale.netEarnings}</td>
            <td className="py-3 text-gray-500">
              {new Date(sale.saleDate).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </td>
            <td className="py-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  sale.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {sale.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Responsive stacked cards on small screens */}
  <div className="md:hidden space-y-4">
    {salesData.map((sale) => (
      <div
        key={sale.id}
        className="p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-200"
      >
        <div className="flex justify-between">
          <p className="font-semibold text-gray-800">{sale.itemName}</p>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              sale.status === "Completed"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {sale.status}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">{sale.buyer}</p>
        <div className="mt-2 flex justify-between text-sm">
          <span className="text-green-600 font-semibold">${sale.netEarnings}</span>
          <span className="text-gray-500">
            {new Date(sale.saleDate).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Monthly Performance Section */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Monthly Performance</h3>
        <div className="space-y-4">
          {monthlyStats.map((month) => (
            <div
              key={month.month}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
            >
              <div>
                <p className="font-semibold text-gray-800">{month.month}</p>
                <p className="text-sm text-gray-500">{month.sales} sale(s)</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">${month.revenue.toLocaleString()}</p>
                <p className="text-sm text-gray-500">
                  {month.sales > 0
                    ? `$${(month.revenue / month.sales).toFixed(0)} avg`
                    : "No sales"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesOverviewPage;
