import { act, useReducer, useState } from "react";
import "./App.css";
import AddNotes from "./components/AddNotes";
import Navbar from "./components/Navbar";
import InputNotes from "./components/InputNotes";
import Buttons from "./components/Buttons";


function notesReducer(state, action) {
  switch (action.type) {
    case "Add":
      return { notes: [...state.notes, action.payload] };
    case "Delete":
      return { notes: [...state.notes.slice(0, action.payload.index), ...state.notes.slice(action.payload.index + 1)] }
  }
}
function App() {
  const [clickToAdd, setClickToAdd] = useState(false);
  const [inputForm, setInputForm] = useState(false);

  const [state, dispatch] = useReducer(notesReducer, { notes: [] })
  console.log(state)
  function handleDelete(index) {
    dispatch({ type: "Delete", payload: { index } })
  }
  return (
    <>
      <Navbar /><div className="flex">
        {!inputForm && < AddNotes clicks={setClickToAdd} setinput={setInputForm} />}
      </div>
      {clickToAdd && <InputNotes clicks={setClickToAdd} setinput={setInputForm}
        dispatch={dispatch} />}
      <div className="flex">

        {!inputForm && state.notes.length > 0 && state.notes.map((note, index) => (
          <div className='min-h-52 w-52 bg-purple-800 rounded-md flex flex-col p-3 m-3 justify-between' style={{ backgroundColor: note.color }}>
            <div className="text-white text-center capitalize font-bold underline">
              {note.title}
            </div>
            <div className="text-white ">
              {note.content}
            </div>
            <div className="flex justify-between ">
              <div className="text-white ">
                {note.date}
              </div>
              <button className="bg-orange-600 tracking-tighter rounded-sm px-1 hover:bg-orange-900" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>


  );
}

export default App;
