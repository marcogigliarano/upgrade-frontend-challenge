import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const SignUpForm = ({ initialValues, onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h3>Sign Up</h3>
      <div className="form-field">
        <label htmlFor="name" className="form-label">
          First Name
        </label>

        <Controller
          name="name"
          control={control}
          render={({ field }) => <input {...field} className="form-control" />}
        />
        {errors.name && (
          <span className="text-danger small">{errors.name.message}</span>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} className="form-control" />}
        />
        {errors.email && (
          <span className="text-danger small">{errors.email.message}</span>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="email" className="form-label">
          Password
        </label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <input type="password" {...field} className="form-control" />
          )}
        />
        {errors.password && (
          <span className="text-danger small">{errors.password.message}</span>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
