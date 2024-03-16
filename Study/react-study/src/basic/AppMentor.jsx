import React, { useReducer } from "react";
import "../css/App.css";
import personReducer from "../recuder/person-reducer";

export default function AppMentor() {
//   const [person, setPerson] = useState(initPerson);
  const [person, dispatch] = useReducer(personReducer, initPerson);

  const handleMentor = (state) => {
    const targetName = prompt("Name of a mentor");

    if (state === "name") {
      const name = prompt("New name");
      dispatch({type: 'updated name', prev:targetName, current:name});
      
    } else if (state === "title") {
      const title = prompt("New title");
      dispatch({type: 'updated title', prev:targetName, current:title});
    }
  };

  const handleAdd = () => {
    const name = prompt("name");
    const title = prompt("title");
    dispatch({type: 'added', name, title})
  };

  const handleDelete = () => {
    const name = prompt("name");
    dispatch({type: 'deleted', name})
  };

  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <ul>
        {person.name}'s mentors are:
        {person.mentors.map((mentor, idx) => (
          <li key={idx}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={() => handleMentor("name")}>
        Change name of a mentor
      </button>
      <button onClick={() => handleMentor("title")}>
        Change title of a mentor
      </button>
      <button onClick={handleAdd}>Add a mentor</button>
      <button onClick={handleDelete}>Delete a mentor</button>
    </div>
  );
}

const initPerson = {
  name: "Ellie",
  title: "Developer",
  mentors: [
    { name: "bob", title: "senior developer" },
    { name: "James", title: "junior developer" },
  ],
};
