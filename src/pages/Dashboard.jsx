import { useContext } from "react";
import Header from "../components/header/Header";
import { AuthContext } from "../contexts";
import { Navigate } from "react-router";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user?.token) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="lg:ml-72 ml-4  mt-4 mr-4 h-[calc(100vh-32px)] flex flex-col gap-4">
      {/* top header */}
      <Header />

      {/* content area */}
      <div className="bg-light-white flex flex-col rounded-2xl">
        {/* content area header */}
        <div className="flex justify-between">
          <h1>Dashboard</h1>

          {/* header action buttons */}
          <div>header actions</div>
        </div>

        {/* cards grid */}
        <div className="grid grid-cols-4 grid-rows-6">all the cards</div>
      </div>
    </div>
  );
};

export default Dashboard;
