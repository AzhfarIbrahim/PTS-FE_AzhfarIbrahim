import { useEffect, useState } from "react";
import DashboardInfo from "../components/DashboardInfo.jsx";
import Sidebar from "../components/Sidebar.jsx";
import {
  addTourist,
  deleteTourist,
  getAllTourists,
} from "../api/TouristApi.js";
import axios from "axios";
import TouristModal from "../components/Modal/TouristModal.jsx";

const Tourist = () => {
  const [tourists, setTourists] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [editingTourist, setEditingTourist] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [post, setPost] = useState({
    name: "",
    email: "",
  });

  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  // Fetch tourists from the API
  const fetchTourist = async () => {
    try {
      const data = await getAllTourists();
      setTourists(data);
    } catch (error) {
      console.error("Error fetching tourists", error);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    addTourist(post)
      .then((response) => {
        console.log("Tourist berhasil ditambahkan", response);
        setTourists((prevTourist) => [...prevTourist], response.data);

        setPost({ name: "", email: "" });
        console.log("State tourist setelah submit", tourists);
        fetchTourist();
        setOpenForm(false);
      })
      .catch((error) => {
        console.log("Error menambahkan tourist", error);
      });
  }

  // Delete tourist by id
  const DelTourist = async (id) => {
    try {
      await deleteTourist(id);
      fetchTourist();
    } catch (error) {
      console.error("Error deleting tourist:", error);
    }
  };

  const handleEdit = (tourist) => {
    setEditingTourist(tourist.id);
    setName(tourist.name);
    setEmail(tourist.email);
  };

  // Save the edited tourist
  const saveTourist = async (id) => {
    try {
      await axios.put(`http://localhost:3000/tourist/update?id=${id}`, {
        id: editingTourist,
        name,
        email,
      });
      setEditingTourist(null);
      fetchTourist();
    } catch (error) {
      console.error("Error updating tourist:", error);
    }
  };

  useEffect(() => {
    fetchTourist();
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
          Tourist Dashboard
        </p>
        <div className="flex gap-x-12">
          <DashboardInfo />
          <DashboardInfo />
          <DashboardInfo />
        </div>

        <div className="w-full h-full mt-10 ">
          <div className="flex justify-between">
            <p className="text-[#313b65] font-bold text-xl mb-5 ">Tourist</p>
            <p
              className="text-white font-bold text-xl mb-5 border-solid border-2 border-purple-800 bg-green-700 p-2 rounded-md cursor-pointer"
              onClick={handleOpenForm}
            >
              ADD TOURIST
            </p>

            {openForm && (
              <TouristModal
                onClose={() => setOpenForm(false)}
                post={post}
                onChange={handleChange}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
          <div className="w-full bg-white rounded-xl p-2">
            <p className=" mb-3 text-2xl font-bold">Summary</p>
            <div className="w-full border-slate-200 border-t-0 border-r-0 border-b-2 border-l-0 "></div>

            <div className="w-full border-slate-200 border-t-0 py-4 border-r-0 border-b-0 border-l-0 flex ">
              <div className="w-56">
                <p className="font-bold text-xl pb-4">Tourist</p>
                <div className="w-full border-slate-200 border-t-0 border-r-0 border-b-2 border-l-0 "></div>

                {tourists.map((tourist) => (
                  <div key={tourist.id} className="w-full flex">
                    <div className="w-1/5">
                      {editingTourist === tourist.id ? (
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="py-4 font-semibold"
                        />
                      ) : (
                        <p className="py-4 font-semibold">{tourist.name}</p>
                      )}
                      <div className="w-[80px] border-slate-200 border-t-0 border-r-0 border-b-2 border-l-0 "></div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-xl pb-4">Email</p>
                <div className="border-slate-200 border-t-0 border-r-0 border-b-2 border-l-0"></div>

                {tourists.map((tourist) => (
                  <div key={tourist.id} className="flex">
                    <div className="flex  w-1/5">
                      {editingTourist === tourist.id ? (
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="py-4 font-semibold"
                        />
                      ) : (
                        <p className="py-4 font-semibold">{tourist.email}</p>
                      )}
                    </div>
                    {editingTourist === tourist.id ? (
                      <button
                        onClick={() => saveTourist(tourist.id)}
                        className="text-blue-500 mx-2"
                      >
                        Save
                      </button>
                    ) : (
                      <svg
                        onClick={() => handleEdit(tourist)} // Set the tourist to be edited
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
                      onClick={() => DelTourist(tourist.id)} // Pass tourist id here
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
                    <div className="w-[785px] border-slate-200 border-t-0 border-r-0 border-b-2 border-l-0 "></div>
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

export default Tourist;
