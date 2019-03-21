class ValidatorUtil {
  constructor() {}
  nameValidator(state, el) {
    if (el === "123") {
      return {
        ...state,
        navnFeilmelding: "navn kan ikke være 123",
        isValid: false
      };
    } else if (el === "") {
      return {
        ...state,
        navnFeilmelding: "navn kan ikke være null",
        isValid: false
      };
    }

    return { ...state, navnFeilmelding: "" };
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
}
export default ValidatorUtil;
