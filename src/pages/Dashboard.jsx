import { useEffect, useState } from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import SecondRow from "../components/dashboard/SecondRow";
import ThirdRow from "../components/dashboard/ThirdRow";
import StatsCard from "../components/ui/StatsCard";
import { axiosInstance } from "../lib/axios";
import { formatAnalytics } from "../lib";

const Dashboard = () => {
  const [allData, setAllData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllData = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get("/dashboard");
        setAllData(res.data);
      } catch (err) {
        // console.error("Failed to fetch dashboard data:", err);
        setError(err?.response.data.error || "Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    getAllData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  const { overview, analytics, products, users } = allData;

  // Convert overview object to array for mapping
  const overviewArray = Object.entries(overview).map(([key, value]) => {
    // Convert camelCase keys to readable titles
    const title = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
    return { title, value };
  });

  const finalAnalytics = formatAnalytics(analytics);

  return (
    <div className="bg-light-white flex flex-col rounded-2xl p-6">
      {/* dashboard header */}
      <DashboardHeader />

      {/* cards grid */}
      <div className="grid grid-cols-12 gap-4 auto-rows-min lg:grid-rows-[repeat(9,auto)]">
        {overviewArray.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={
              typeof stat.value === "number"
                ? stat.title.toLowerCase().includes("revenue")
                  ? `$${stat.value.toLocaleString()}`
                  : stat.value
                : stat.value
            }
            trend="Increased from last month"
            badge={index !== 3}
            gradient={index === 0} // only first card has gradient as example
            className="col-span-12 md:col-span-6 lg:col-span-3 lg:row-start-1 lg:row-span-3"
          />
        ))}

        {/* 2nd row */}
        <SecondRow analytics={finalAnalytics} products={products} />

        {/* 3rd row */}
        <ThirdRow users={users} />
      </div>
    </div>
  );
};

export default Dashboard;
