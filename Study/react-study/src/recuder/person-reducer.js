export default function personReducer(person, action) {
  switch (action.type) {
    case "updated name": {
      const { prev, current } = action;

      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            mentor.name = current;
          }
          return { ...mentor };
        })
      };
    }
    case "updated title": {
        const { prev, current } = action;
        return {
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                mentor.title = current;
              }
              return { ...mentor };
            })
          }
    }
    case "added": {
        const {name, title} = action;
        return {
            ...person,
            mentors: [...person.mentors, { name, title }],
          };
    }
    case "deleted": {
        const {name} = action;
        return {
            ...person,
            mentors: person.mentors.filter((mentor) => mentor.name !== name),
          }
    }
    default: {
      throw Error(`Wrong type: ${action.type}`);
    }
  }
}
