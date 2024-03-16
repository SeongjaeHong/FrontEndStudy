import React from "react";
import "../css/App.css";
import { useImmer } from "use-immer";

export default function AppMentorImmer() {
  const [person, updatePerson] = useImmer(initPerson);

  const handleMentor = (state) => {
    const targetName = prompt("Name of a mentor");

    if (state === "name") {
      const name = prompt("New name");
      updatePerson((person) => {
        const mentor = person.mentors.find(
          (mentor) => mentor.name === targetName
        );
        mentor.name = name;
      });
    } else if (state === "title") {
      const title = prompt("New title");
      updatePerson((person) => {
        const mentor = person.mentors.find(
          (mentor) => mentor.name === targetName
        );
        mentor.title = title;
      });
    }
  };

  const handleAdd = () => {
    const name = prompt("name");
    const title = prompt("title");
    updatePerson(person => {
      person.mentors.push({name, title});
    })
  };

  const handleDelete = () => {
    const name = prompt("name");
    updatePerson(person => {
      const index = person.mentors.findIndex(mentor => mentor.name === name);
      person.mentors.splice(index, 1);
    })
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
