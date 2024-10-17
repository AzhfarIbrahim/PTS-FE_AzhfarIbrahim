import { useEffect, useState } from "react";
import DashboardInfo from "../components/DashboardInfo.jsx";
import Sidebar from "../components/Sidebar.jsx";
import axios from "axios";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);
  const [tourists, setTourists] = useState([]);
  const [tours, setTours] = useState([]);
  const [tourId, setTourId] = useState("");
  const [touristId, setTouristId] = useState("");
  const [comment, setComment] = useState("");
  const [reviewDate, setReviewDate] = useState("");

  // Fetch reviews from the API
  const fetchReviews = async () => {
    try {
      const response = await axios.get("http://localhost:3000/review");
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const fetchTours = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/tour`);
      setTours(response.data || []);
    } catch (error) {
      console.error("Error fetching tours", error);
      setTours([]);
    }
  };

  const fetchTourists = async () => {
    try {
      const response = await axios.get("http://localhost:3000/tourist");
      setTourists(response.data || []);
    } catch (error) {
      console.error("Error fetching tourists", error);
      setTourists([]);
    }
  };

  useEffect(() => {
    fetchReviews(); // Fetch reviews when the component is mounted
    fetchTours(); // Fetch tours
    fetchTourists(); // Fetch tourists
  }, []);

  const handleEdit = (reviewData) => {
    setEditingReview(reviewData.id);
    setTouristId(reviewData.touristId);
    setTourId(reviewData.tourId);
    setComment(reviewData.comment);
  };

  const saveReview = async (id) => {
    try {
      await axios.put(`http://localhost:3000/review/update?id=${id}`, {
        comment,
      });
      setEditingReview(null);
      fetchReviews(); // Refresh data after saving the review
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  
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
          Review Dashboard
        </p>
        <div className="flex gap-x-12">
          <DashboardInfo />
          <DashboardInfo />
          <DashboardInfo />
        </div>

        <div className="w-full h-full mt-10">
          <p className="text-[#313b65] font-bold text-xl mb-5">Reviews</p>
          <div className="w-full bg-white rounded-xl p-2">
            <p className="font-semibold mb-3 text-xl">Summary</p>
            <div className="w-full border-slate-200 border-t-0 border-r-0 border-b-2 border-l-0"></div>
            <div className="w-full flex text-lg font-medium">
              {/* Tour Name */}
              <div className="w-1/5">
                <p className="font-bold text-xl pb-4">Tour</p>
                {tours.map((reviewData) => (
                  <div key={reviewData.id} className="w-full flex">
                    <div className="w-32">
                      <p className="py-4 font-semibold">
                        {reviewData.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tourist Name */}
              <div className="w-1/5">
                <p className="font-bold text-xl pb-4">Tourist</p>
                {tourists.map((tourist) => (
                  <div key={tourist.id} className="w-full flex">
                    <div className="w-32">
                      {editingReview === tourist.id ? (
                        <input 
                          type="text"
                          value={tourist}
                          onChange={(e) => setTouristId(e.target.value)}
                          className="py-4 font-semibold"
                        />
                      ) : (
                        <p className="py-4 font-semibold">
                          {tourist.name}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Review Comment */}
              <div className="w-1/5">
                <p className="font-bold text-xl pb-4">Review</p>
                {reviews.map((reviewData) => (
                  <div key={reviewData.id} className="w-full flex">
                    <div className="w-96">
                      {editingReview === reviewData.id ? (
                        <input
                          type="text"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="py-4 font-semibold"
                        />
                      ) : (
                        <p className="py-6 font-semibold">
                          {reviewData.comment}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Review Date */}
              <div className="w-1/5">
                <p className="font-bold text-xl pb-4">Review Date</p>
                {reviews.map((reviewData) => (
                  <div key={reviewData.id} className="flex">
                    <div className="w-52">
                      {editingReview === reviewData.id ? (
                        <input
                          type="date"
                          value={tanggal_review}
                          onChange={(e) => setReviewDate(e.target.value)}
                          className="py-4 font-semibold"
                        />
                      ) : (
                        <p className="py-6 font-semibold">
                          {reviewData.tanggal_review}
                        </p>
                      )}
                    </div>
                    {editingReview === reviewData.id ? (
                      <button
                        onClick={() => saveReview(reviewData.id)}
                        className="text-blue-500 mx-2"
                      >
                        Save
                      </button>
                    ) : (
                      <svg
                        onClick={() => handleEdit(reviewData)}
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

export default Review;
