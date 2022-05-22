import styles from "./Form.module.css";
import { useState, useCallback, useEffect } from "react";
import validator from "validator";
import cn from "classnames";

const Form = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dob: "",
    colour: "#000000",
    salary: "30000",
  });

  const [isFormValid, setIsFormValid] = useState({
    nameValid: false,
    emailValid: false,
    dobValid: false,
  });

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setForm]
  );

  //validate inputs
  useEffect(() => {
    const nameValid = validator.isAlphanumeric(form.name);
    const emailValid = validator.isEmail(form.email);
    const dobValid = validator.isDate(form.dob);

    setIsFormValid({
      nameValid,
      emailValid,
      dobValid,
    });
  }, [form]);

  const { nameValid, emailValid, dobValid } = isFormValid;

  const isButtonDisabled = !nameValid || !emailValid || !dobValid;

  const submitButtonClassName = isButtonDisabled
    ? cn(styles.form__submit, styles["form__submit_disabled"])
    : cn(styles.form__submit, styles["form__submit_active"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, dob, colour, salary } = form;
    onSubmit(form);
    handleReset();
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      dob: "",
      colour: "#000000",
      salary: "25",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
      <label className={styles.form__label}>
        <input
          onChange={handleChange}
          name='name'
          value={form.name}
          type='text'
          placeholder='Name'
          required
          minLength='2'
          className={styles.form__input}
        ></input>
        Name
        {!nameValid && (
          <span className={styles.form__error}>
            The name should only contain alphanumeric characters and be at least
            1 character long
          </span>
        )}
      </label>
      <label className={styles.form__label}>
        <input
          onChange={handleChange}
          name='email'
          value={form.email}
          type='email'
          placeholder='Email'
          required
          className={styles.form__input}
        ></input>
        Email
        {!emailValid && (
          <span className={styles.form__error}>
            Please ensure proper email format
          </span>
        )}
      </label>
      <label className={styles.form__label}>
        <input
          onChange={handleChange}
          name='dob'
          value={form.dob}
          type='date'
          placeholder='Date of birth'
          required
          className={styles.form__input}
        ></input>
        Date of birth
        {!dobValid && (
          <span className={styles.form__error}>
            Please ender a valid birth date
          </span>
        )}
      </label>
      <label className={styles.form__label}>
        <input
          onChange={handleChange}
          name='colour'
          value={form.colour}
          type='color'
          placeholder='Favourite colour'
          required
          className={styles.form__input}
        ></input>
        Favourite colour
      </label>
      <label className={styles.form__label}>
        <input
          onChange={handleChange}
          name='salary'
          value={form.salary}
          type='range'
          min='0'
          max='60000'
          step='2'
          className={styles.form__input}
        ></input>
        Salary: <span>{form.salary}</span>
      </label>
      <button
        className={submitButtonClassName}
        type='submit'
        disabled={isButtonDisabled}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
