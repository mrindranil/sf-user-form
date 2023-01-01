const validate = (values) => {
    const formErrors = {};
    const name_regex = /^[a-zA-Z ]*$/;
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const birth_regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
    if (!values.name) {
      formErrors.name = "Name is required!";
    } else if (!name_regex.test(values.name)) {
      formErrors.name = "Enter a valid e-mail";
    } else if (values.name.length < 3) {
      formErrors.name = "Name must be 3 characters";
    }
    if (!values.email) {
      formErrors.email = "Email is required!";
    } else if (!email_regex.test(values.email)) {
      formErrors.email = "Enter a valid e-mail";
    }
    if (!values.mob) {
      formErrors.mob = "Mobile is required";
    } else if (values.mob.length < 10) {
      formErrors.mob = "Number must be 10 digits";
    }
    if (!values.sub) {
      formErrors.sub = "Subject is required";
    }
    // if (!values.msg) {
    //   formErrors.msg = "Message is required";
    // }
    return formErrors;
  };

export default validate;