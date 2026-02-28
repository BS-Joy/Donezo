import DashboardHeader from "../components/dashboard/DashboardHeader";
import SecondRow from "../components/dashboard/SecondRow";
import ThirdRow from "../components/dashboard/ThirdRow";
import StatsCard from "../components/ui/StatsCard";

const Dashboard = () => {
  return (
    <div className="bg-light-white flex flex-col rounded-2xl p-6">
      {/* dashboard header */}
      <DashboardHeader />

      {/* cards grid */}
      <div className="grid grid-cols-12 gap-4 auto-rows-min lg:grid-rows-[repeat(9,auto)]">
        <StatsCard
          gradient={true}
          className="col-span-12 md:col-span-6 lg:col-span-3 lg:row-start-1 lg:row-span-3"
        />
        <StatsCard className="col-span-12 md:col-span-6 lg:col-span-3 lg:row-start-1 lg:row-span-3" />
        <StatsCard className="col-span-12 md:col-span-6 lg:col-span-3 lg:row-start-1 lg:row-span-3" />
        <StatsCard className="col-span-12 md:col-span-6 lg:col-span-3 lg:row-start-1 lg:row-span-3" />

        {/* 2nd row */}
        <SecondRow />

        {/* 3rd row */}
        <ThirdRow />
      </div>
    </div>
  );
};

export default Dashboard;
