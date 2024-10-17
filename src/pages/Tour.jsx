import { useEffect, useState } from "react";
import DashboardInfo from "../components/DashboardInfo.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { addTour, deleteTour, getAllTours } from "../api/TourApi.js"; // Ganti sesuai API untuk Tour
import axios from "axios";
import TourModal from "../components/Modal/TourModal.jsx"; // Modal untuk Tour

const Tour = () => {
  const [tours, setTours] = useState([]); // State untuk daftar Tour
  const [openForm, setOpenForm] = useState(false); // State untuk buka/tutup modal form
  const [editingTour, setEditingTour] = useState(null); // State untuk mode edit
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [guideId, setGuideId] = useState(""); // Untuk menyimpan GuideId

  const [post, setPost] = useState({
    name: "",
    description: "",
    price: "",
    guideId: "", // Tambahkan GuideId
  });

  const handleOpenForm = () => {
    setOpenForm(!openForm); // Buka/tutup modal
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  // Fetch tours from the API
  const fetchTour = async () => {
    try {
      const data = await getAllTours();
      setTours(data);
    } catch (error) {
      console.error("Error fetching tours", error);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    addTour(post)
      .then((response) => {
        console.log("Tour berhasil ditambahkan", response);
        setTours((prevTours) => [...prevTours, response.data]); // Update state tours

        setPost({ name: "", description: "", price: "", guideId: "" }); // Reset form
        fetchTour(); // Refresh data tour
        setOpenForm(false); // Tutup modal
      })
      .catch((error) => {
        console.log("Error menambahkan tour", error);
      });
  }

  // Delete tour by id
  const DelTour = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/tour/delete?id=${id}`);
      fetchTour(); // Refresh data setelah delete
    } catch (error) {
      console.error("Error deleting tour:", error);
    }
  };

  const handleEdit = (tour) => {
    setEditingTour(tour.id);
    setName(tour.name);
    setDescription(tour.description);
    setPrice(tour.price);
    setGuideId(tour.guideId); // Set GuideId saat edit
  };

  // Save the edited tour
  const saveTour = async (id) => {
    try {
      await axios.put(`http://localhost:3000/tour/update?id=${id}`, {
        id: editingTour,
        name,
        description,
        price,
        guideId,
      });
      setEditingTour(null);
      fetchTour(); // Refresh data setelah edit
    } catch (error) {
      console.error("Error updating tour:", error);
    }
  };

  useEffect(() => {
    fetchTour(); // Ambil data saat komponen di-mount
  }, []);

  return (
    <div className="w-full h-full flex bg-slate-200">
      <Sidebar
        booking="/PTS-FE_AzhfarIbrahim/booking"
        review="/PTS-FE_AzhfarIbrahim/review"
        tour="/PTS-FE_AzhfarIbrahim/tour"
        tourist="/PTS-FE_AzhfarIbrahim/tourist"
      />

      <div className="w-4/5 h-full flex flex-col p-12">
        <p className="font-bold text-3xl text-[#313b65] mb-10">
          Tour Dashboard
        </p>
        <div className="flex gap-x-12">
          <DashboardInfo />
          <DashboardInfo />
          <DashboardInfo />
        </div>

        <div className="w-full h-full mt-10">
          <div className="flex justify-between">
            <p className="text-[#313b65] font-bold text-xl mb-5">Tour</p>
            <p
              className="text-white font-bold text-xl mb-5 border-solid border-2 border-purple-800 bg-green-700 p-2 rounded-md cursor-pointer"
              onClick={handleOpenForm}
            >
              ADD TOUR
            </p>

            {openForm && (
              <TourModal
                onClose={() => setOpenForm(false)}
                post={post}
                onChange={handleChange}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
          <div className="w-full bg-white rounded-xl p-2">
            <p className="mb-3 text-2xl font-bold">Summary</p>
            <div className=" border-slate-200 border-t-0 border-r-0 border-b-2 border-l-0"></div>

            <div className=" border-slate-200 border-t-0 py-4 border-r-0 border-b-0 border-l-0 flex">
              <div className="">
                <p className="font-bold text-xl pb-4">Tour</p>

                {tours.map((tour) => (
                  <div key={tour.id} className="w-full flex">
                    <div className="w-32">
                      {editingTour === tour.id ? (
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="py-4 font-semibold"
                        />
                      ) : (
                        <p className="py-4 font-semibold">{tour.name}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-96">
                <p className="font-bold text-xl pb-4">Description</p>

                {tours.map((tour) => (
                  <div key={tour.id} className="w-full flex">
                    <div className="w-96">
                      {editingTour === tour.id ? (
                        <input
                          type="text"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="py-4 font-semibold"
                        />
                      ) : (
                        <p className="py-6 font-semibold">{tour.description}</p>
                      )}
                      <div className=" "></div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="font-bold text-xl pb-4">Price</p>
                <div className="w-[500px] border-slate-200 border-t-0 border-r-0 border-b-2 border-l-0"></div>

                {tours.map((tour) => (
                  <div key={tour.id} className="flex">
                    <div className="flex w-52">
                      {editingTour === tour.id ? (
                        <input
                          type="text"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          className="py-4 font-semibold"
                        />
                      ) : (
                        <p className="py-6 font-semibold">{tour.price}</p>
                      )}
                      <div className="w-[500px] border-slate-200 border-t-0 border-r-0 border-b-2 border-l-0"></div>
                    </div>
                    {editingTour === tour.id ? (
                      <button
                        onClick={() => saveTour(tour.id)}
                        className="text-blue-500 mx-2"
                      >
                        Save
                      </button>
                    ) : (
                      <svg
                        onClick={() => handleEdit(tour)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 flex justify-center items-center my-auto cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zM19.5 7.125"
                        />
                      </svg>
                    )}
                    <svg
                      onClick={() => DelTour(tour.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 flex justify-center items-center my-auto cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                    <div className="w-[100px] border-slate-200 border-t-0 border-r-0 border-b-2 border-l-0"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
