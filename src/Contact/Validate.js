const validate = (values) => {
    const formErrors = {};
    const name_regex = /^[a-zA-Z ]*$/;
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const today = new Date();
    const validMinDate = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate(),
      today.getHours(),
      today.getMinutes()
    );
    const birthDate = new Date(values.sub);
    if (!values.name) {
      formErrors.name = "Name is required!";
    } else if (!name_regex.test(values.name)) {
      formErrors.name = "Enter a valid Name";
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
      formErrors.sub = "Date is required";
    } else if (birthDate > validMinDate) {
      formErrors.sub = "Minimum age must be 18 years.";
    }
    return formErrors;
  };

export default validate;