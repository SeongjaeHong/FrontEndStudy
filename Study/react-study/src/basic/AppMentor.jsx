import React, { useState } from "react";
import "../css/App.css";

export default function AppMentor() {
  const [person, setPerson] = useState(initPerson);

  const handleMentor = (state) => {
    const targetName = prompt("Name of a mentor");

    if (state === "name") {
      const name = prompt("New name");
      setPerson((prev) => ({
        ...prev,
        mentors: prev.mentors.map((mentor) => {
          if (mentor.name === targetName) {
            mentor.name = name;
          }
          return { ...mentor };
        }),
      }));
    } else if (state === "title") {
      const title = prompt("New title");
      setPerson((prev) => ({
        ...prev,
        mentors: prev.mentors.map((mentor) => {
          if (mentor.name === targetName) {
            mentor.title = title;
          }
          return { ...mentor };
        }),
      }));
    }
  };

  const handleAdd = () => {
    const name = prompt("name");
    const title = prompt("title");
    setPerson(() => ({
      ...person,
      mentors: [...person.mentors, { name, title }],
    }));
  };

  const handleDelete = () => {
    const name = prompt("name");
    setPerson(() => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== name),
    }));
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
