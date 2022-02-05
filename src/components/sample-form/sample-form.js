import "./sample-form.css";
import "react-datepicker/dist/react-datepicker.css";

import { Formik, useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import { validate } from "./utils";

const SampleForm = () => {
  const renderLabel = ({ name, labelText }) => {
    return (
      <label className="sample-form__label" htmlFor={name}>
        <h3>{labelText}</h3>
      </label>
    );
  };

  const renderError = (text) => {
    return (
      <div className="sample-form__error">
        <p>{text}</p>
      </div>
    );
  };

  const renderTextInput = (key, formik) => {
    return (
      <>
        {renderLabel({
          name: key,
          labelText: key[0].toUpperCase() + key.slice(1),
        })}
        <input
          className={`sample-form__input${
            formik.touched[key] && formik.errors[key]
              ? " sample-form__input--error"
              : ""
          }`}
          id={key}
          type="text"
          {...formik.getFieldProps(key)}
        />
        {formik.touched[key] && formik.errors[key]
          ? renderError(formik.errors[key])
          : null}
      </>
    );
  };

  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        date: null,
        color: "",
        salary: 0,
      }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {(formik) => {
        return (
          <form className="sample-form" onSubmit={formik.handleSubmit}>
            <div className="sample-form__field">
              {renderTextInput("name", formik)}
            </div>

            <div className="sample-form__field">
              {renderTextInput("email", formik)}
            </div>

            <div className="sample-form__field">
              {renderLabel({ name: "date", labelText: "Date" })}
              <DateField name="date" />
              {formik.touched.date && formik.errors.date
                ? renderError(formik.errors.date)
                : null}
            </div>

            <div className="sample-form__field">
              {renderLabel({ name: "color", labelText: "Favourite colour" })}
              <ColorField name="color" />
              {formik.touched.color && formik.errors.color
                ? renderError(formik.errors.color)
                : null}
            </div>

            <div className="sample-form__field">
              {renderLabel({ name: "salary", labelText: "Salary" })}
              <SalaryField name="salary" />
              {formik.touched.salary && formik.errors.salary
                ? renderError(formik.errors.salary)
                : null}
            </div>

            <button
              className="sample-form__submit"
              type="submit"
              disabled={formik.isSubmitting}
            >
              <p>{formik.isSubmitting ? "Just a second..." : "Submit"}</p>
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

const DateField = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      selected={field.value ? new Date(field.value) : null}
      onChange={(value) => {
        setFieldValue(field.name, value);
      }}
      customInput={
        <input
          className={`sample-form__input${
            meta.touched && meta.error ? " sample-form__input--error" : ""
          }`}
          id="date"
          type="text"
        ></input>
      }
      dateFormat="dd.MM.yyyy"
      showYearDropdown
      scrollableYearDropdown
      yearDropdownItemNumber={100}
      minDate={new Date("01-01-1900")}
      maxDate={new Date()}
      placeholderText="dd.mm.yyyy"
    />
  );
};

const ColorField = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  return (
    <input
      {...field}
      {...props}
      className={`sample-form__input sample-form__input--color${
        meta.touched && meta.error ? " sample-form__input--error" : ""
      }`}
      type="color"
      value={field.value}
      onChange={(e) => {
        setFieldValue(field.name, e.target.value);
      }}
    />
  );
};

const SalaryField = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  return (
    <div className="sample-form__salary-range-container">
      <input
        type="range"
        className={`sample-form__input sample-form__input--range${
          meta.touched && meta.error ? " sample-form__input--error" : ""
        }`}
        min={10000}
        max={200000}
        step={10000}
        value={field.value || 0}
        onChange={(e) => {
          setFieldValue(field.name, e.target.value);
        }}
      />
      <div className="sample-form__salary-value">
        <p>{field.value ? field.value / 1000 + "k" : ""}</p>
      </div>
    </div>
  );
};

export default SampleForm;
