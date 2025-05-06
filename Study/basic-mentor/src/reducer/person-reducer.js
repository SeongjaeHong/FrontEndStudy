export default function personReducer(person, action) {
  switch (action.type) {
    case Action.UPDATE: {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          } else {
            return mentor;
          }
        }),
      };
    }
    case Action.ADD: {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case Action.DELETE: {
      const { name } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== name),
      };
    }
    default: {
      throw Error(`알 수 없는 액션 타입이다: ${action.type}`);
    }
  }
}

export const Action = {
  UPDATE: 'updated',
  ADD: 'added',
  DELETE: 'deleted',
};
