import React from "react";

function InputNotes({ clicks, setinput,dispatch }) {
  function handlSubmit(e) {
    e.preventDefault();
    if (e.target[0].value === "" && e.target[1].value === "") {
      return;
    }
    let firstdate;
    if (e.target[2].value === "") {
      firstdate = new Date().toISOString().split('T')[0];
    } else {
      firstdate = e.target[2].value;
    }
    const todayNotes = {
      title: e.target[0].value,
      content: e.target[1].value,
      date: firstdate,
      color: e.target[3].value,
    }
    dispatch({type: "Add", payload: todayNotes});
    clicks(false)
    setinput(false)
  }
  return (
    <form
      onSubmit={(e) => handlSubmit(e)}
      action=""
      className="flex flex-col mx-52 mt-3 p-6 bg-purple-800 rounded-lg shadow-lg"
    >
      <div className="my-4">
        <label
          htmlFor="title"
          className="block text-white text-sm font-medium mb-2"
        >
          Title:
        </label>
        <input
          className="w-full px-4 py-2 text-purple-800 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="text"
          id="title"
          name="title"
          placeholder="Title"
        />
      </div>

      <div className="my-4">
        <label
          htmlFor="content"
          className="block text-white text-sm font-medium mb-2"
        >
          Note:
        </label>
        <textarea
          className="w-full px-4 py-2 text-purple-800 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          id="content"
          name="content"
          placeholder="Write your note here..."
        ></textarea>
      </div>

      <div className="my-4">
        <label
          htmlFor="date"
          className="block text-white text-sm font-medium mb-2"
        >
          Date:
        </label>
        <input
          className="w-full px-4 py-2 text-purple-800 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="date"
          id="date"
          name="date"
        />
      </div>

      <div className="my-4">
        <label
          htmlFor="color"
          className="block text-white text-sm font-medium mb-2"
        >
          Color:
        </label>
        <input
          className="w-full h-10 px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="color"
          id="color"
          name="color"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 mt-4 bg-orange-600 text-white font-bold rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        Add Note
      </button>
    </form>
  );
}

export default InputNotes;
