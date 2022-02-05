const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Please fill in";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }
    if (!values.email) {
      errors.email = "Please fill in";
      // sample RegEx googled to save time
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
  
    if (!values.date) {
      errors.date = "Please choose a date";
    }
  
    if (!values.color) {
      errors.color = "Please pick a colour";
    }
  
    if (!values.salary) {
      errors.salary = "Please pick an amount";
    }
  
    return errors;
  };

  export {validate}