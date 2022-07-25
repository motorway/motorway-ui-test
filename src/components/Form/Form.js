import React, { useState } from "react";
import moment from "moment";
import { useForm, Controller } from "react-hook-form";
import Slider from "react-input-slider";
import style from "./Form.module.css";

export const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [state, setState] = useState({ x: 0 });

  return (
    <form className={style["form-container"]} onSubmit={handleSubmit(onSubmit)}>
      <label className={style["form-label"]}>Name</label>
      <input
        className={style["input-label"]}
        {...register("name", { required: "Required" })}
        name="name"
      />
      <div className={style["error"]}>
        {errors.name?.type === "required" && "First name is required"}
      </div>

      <label className={style["form-label"]}>Date of Birth</label>
      <input
        className={style["input-label"]}
        type="date"
        max={moment().format("YYYY-MM-DD")}
        {...register("date", { required: "Required" })}
        name="date"
      />
      <div className={style["error"]}>
        {errors.name?.type === "required" && "Date of bith is Required"}
      </div>

      <label className={style["form-label"]}>Email</label>
      <input
        {...register("email", {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address",
          },
        })}
        name="email"
        type="email"
        className={style["input-label"]}
        id="email"
      />
      <div className={style["error"]}>
        {errors.email?.type === "required" && "Email Address is required"}
      </div>

      <label className={style["form-label"]}>Salary Range</label>
      <Controller
        className={style["input-label"]}
        control={control}
        name="salary"
        defaultValue={0}
        render={({ field: { value, onChange } }) => (
          <Slider
            axis={"x"}
            xmin={0}
            xmax={1000000}
            xstep={1}
            onChange={({ x }) => {
              onChange(x);
              setState({ x });
            }}
            x={value}
            label={value}
          />
        )}
      />
      <div>{state.x}</div>
      <div className={style["error"]}>
        {errors.salary?.type === "required" && "Choose salary"}
      </div>

      <input className={style["submitButton"]} type="submit" />
    </form>
  );
};
export default Form;
