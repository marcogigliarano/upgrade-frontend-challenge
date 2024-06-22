import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  color: z.string().nonempty({ message: "Color is required" }),
  terms: z
    .boolean()
    .refine((v) => v, { message: "You must agree to the terms" }),
});

const MoreInfoForm = ({
  initialValues,
  colors,
  onSubmit,
  onBack,
  isLoading,
}) => {
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
      <h3>Additional Info</h3>
      <div className="form-field">
        <label htmlFor="color" className="form-label">
          Favorite Color
        </label>
        {isLoading ? (
          <span className="placeholder w-100"></span>
        ) : (
          <Controller
            name="color"
            control={control}
            render={({ field }) => (
              <select {...field} className="form-control">
                <option value="">Select a color</option>
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            )}
          />
        )}
        {errors.color && (
          <span className="text-danger small">{errors.color.message}</span>
        )}
      </div>
      <div className="form-field">
        <div className="form-check">
          <label htmlFor="terms" className="form-label">
            I agree to the terms and conditions
          </label>
          <Controller
            name="terms"
            control={control}
            render={({ field }) => (
              <input type="checkbox" {...field} className="form-check-input" />
            )}
          />
        </div>
        {errors.terms && (
          <span className="text-danger small">{errors.terms.message}</span>
        )}
      </div>
      <div className="form-actions">
        <button
          type="button"
          className="btn"
          onClick={onBack}
          disabled={isLoading}
        >
          Back
        </button>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Next
        </button>
      </div>
    </form>
  );
};

export default MoreInfoForm;
