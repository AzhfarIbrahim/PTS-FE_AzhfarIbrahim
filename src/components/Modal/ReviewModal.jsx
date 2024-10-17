const ReviewModal = ({ onClose, post, onChange, handleSubmit }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add Review</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            x
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="TourId"
              className="block text-sm font-medium text-gray-700"
            >
              Tour ID
            </label>
            <input
              type="text"
              name="TourId"
              value={post.TourId}
              onChange={onChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="TouristId"
              className="block text-sm font-medium text-gray-700"
            >
              Tourist ID
            </label>
            <input
              type="text"
              name="TouristId"
              value={post.TouristId}
              onChange={onChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700"
            >
              Review
            </label>
            <input
              type="text"
              name="comment"
              value={post.comment}
              onChange={onChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          {/* New input field for Review Date */}
          <div className="mb-4">
            <label
              htmlFor="tanggal_review"
              className="block text-sm font-medium text-gray-700"
            >
              Review Date
            </label>
            <input
              type="date"
              name="tanggal_review"
              value={post.tanggal_review}
              onChange={onChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
