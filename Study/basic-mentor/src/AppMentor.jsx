import React, { useReducer, useState } from 'react';
import personReducer, { Action } from './reducer/person-reducer';

export default function AppMentor() {
  // const [person, setPerson] = useState(initPerson);
  const [person, dispatch] = useReducer(personReducer, initPerson);

  const handleUpdate = () => {
    const prev = prompt('Change whom?');
    const current = prompt(`what's new name?`);
    dispatch({ type: Action.UPDATE, prev, current });
  };

  const handleAdd = () => {
    const name = prompt('이름?');
    const title = prompt(`타이틀?`);
    dispatch({ type: Action.ADD, name, title });
  };

  const handleDelete = () => {
    const name = prompt('이름?');
    dispatch({ type: Action.DELETE, name });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가</button>
      <button onClick={handleDelete}>멘토 삭제</button>
    </div>
  );
}

const initPerson = {
  name: '피터',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};
