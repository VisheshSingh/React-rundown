const initState = {
  posts: [
    {
      id: 1,
      title: "Bulbasaur",
      body: "a grass type pokemon which turns to ivasaur"
    },
    {
      id: 2,
      title: "Charminder",
      body: "a fire type pokemon which turns to Charizard"
    },
    {
      id: 3,
      title: "Squirtle",
      body: "a water type pokemon which turns to Wartetle"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
