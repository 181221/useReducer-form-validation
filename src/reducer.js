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
    case "SUBMIT": {
      console.log("state", state);
      console.log("isValid", state.isValid);
      if (!state.isValid) {
        return { ...state, isValid: true };
      } else {
        console.log("form", form);
        form.submit();
      }
    }
    default: {
      return state;
    }
  }
};
export default reducer;
