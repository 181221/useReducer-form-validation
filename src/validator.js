class ValidatorUtil {
  constructor() {
    console.log("validator called");
  }
  nameValidator(state, el) {
    if (el === "123") {
      return {
        ...state,
        nameFeilmelding: "navn kan ikke være 123",
        isValid: false
      };
    } else if (el === "") {
      return {
        ...state,
        nameFeilmelding: "navn kan ikke være null",
        isValid: false
      };
    }

    return { ...state, nameFeilmelding: "" };
  }

  passwordValidator(state, el) {
    if (el === "") {
      return {
        ...state,
        passwordFeilmelding: "passord kan ikek være null",
        isValid: false
      };
    }
    return { ...state, passwordFeilmelding: "" };
  }

  emailValidator(state, el) {
    if (el === "") {
      return {
        ...state,
        emailFeilmelding: "email kan ikke være null",
        isValid: false
      };
    }
    return { ...state, emailFeilmelding: "" };
  }

  submit(state, form) {
    console.log("state", state);
    console.log("isValid", state.isValid);
    if (!state.isValid) {
      return { ...state, isValid: true };
    } else {
      console.log("form", form);
      form.submit();
      return { ...state, isValid: true };
    }
  }
}
export const validatorUtil = new ValidatorUtil();
