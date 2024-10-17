const DashboardInfo = ({ data }) => {
  return (
    <div className="w-3/12 h-40 bg-white p-3 flex flex-col rounded-xl">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 bg-purple-400 p-1 rounded-md mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <p className="font-semibold">{data}</p>
      </div>
      <div className="w-full h-52 flex items-center justify-center">
        <p className="text-5xl">10</p>
      </div>
    </div>
  );
};

export default DashboardInfo;
