const reducer = (state, { el, type, form }) => {
  switch (type) {
    case state.cases[0].name: {
      return state.cases[0].handler(state, el);
    }
    case state.cases[1].name: {
      return state.cases[1].handler(state, el);
    }
    case state.cases[2].name: {
      return state.cases[2].handler(state, el);
    }
    case state.cases[3].name: {
      // Submit
      return state.cases[3].handler(state, form);
    }
    default: {
      return state;
    }
  }
};
export default reducer;
