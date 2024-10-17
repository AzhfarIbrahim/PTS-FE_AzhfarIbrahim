import DashboardInfo from "../components/DashboardInfo.jsx";
import Data from "../components/Data.jsx";
import Sidebar from "../components/Sidebar.jsx";

const Dashboard = () => {
  

  return (
    <div className="w-full h-screen flex bg-slate-200">
      <Sidebar
        booking="/PTS-FE_AzhfarIbrahim/booking"
        review="/PTS-FE_AzhfarIbrahim/review"
        tour="/PTS-FE_AzhfarIbrahim/tour"
        tourist="/PTS-FE_AzhfarIbrahim/tourist"
      />

      <div className="w-4/5 h-full flex flex-col p-12">
        <p className="font-bold text-3xl text-[#313b65] mb-10">
          Booking Dashboard
        </p>
        <div className="flex gap-x-12">
          <DashboardInfo data="Travel Booked" />
          <DashboardInfo data="Total Travel" />
          <DashboardInfo data="Travel available" />
        </div>

        <div className="w-full h-full mt-10">
          <p className="text-[#313b65] font-bold text-xl mb-5">Booking</p>
          <div className="w-full bg-white rounded-xl p-2">
            <p className="font-semibold mb-3 text-xl">Summary</p>
            <div className="w-full border-slate-200 border-t-0 border-r-0 border-b-2 border-l-0"></div>
            <div className="w-full flex text-lg font-medium">
              <div className="w-1/5">
                <p>Tour</p>
              </div>
              <div className="w-1/5">
                <p>Tourist</p>
              </div>
              <div className="w-1/5">
                <p>Purchase Date</p>
              </div>
            </div>
            <div className="w-full border-slate-200 border-t-0 border-r-0 border-b-2 border-l-0"></div>
            {/* mapping data disini, datanya lu passing props semua aja yg edit, delete sama data biasanya */}
            <Data />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
