export const actions = {
  NAME: "name",
  EMAIL: "email",
  PASSWORD: "password",
  SUBMIT: "submit"
};

const reducer = (state, { el, type, form }) => {
  switch (type) {
    case state[actions.NAME].action: {
      return state[actions.NAME].handler(state, el);
    }
    case state[actions.EMAIL].action: {
      return state[actions.EMAIL].handler(state, el);
    }
    case state[actions.PASSWORD].action: {
      return state[actions.PASSWORD].handler(state, el);
    }
    case state[actions.SUBMIT].action: {
      return state[actions.SUBMIT].handler(state, form);
    }
    default: {
      return state;
    }
  }
};
export default reducer;
