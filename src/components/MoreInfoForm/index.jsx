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

const MoreInfoForm = ({ initialValues, colors, onSubmit, onBack }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Favorite Color</label>
        <Controller
          name="color"
          control={control}
          render={({ field }) => (
            <select {...field}>
              <option value="">Select a color</option>
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          )}
        />
        {errors.color && <span>{errors.color.message}</span>}
      </div>
      <div>
        <label>
          <Controller
            name="terms"
            control={control}
            render={({ field }) => <input type="checkbox" {...field} />}
          />
          I agree to the terms and conditions
        </label>
        {errors.terms && <span>{errors.terms.message}</span>}
      </div>
      <button type="button" onClick={onBack}>
        Back
      </button>
      <button type="submit">Next</button>
    </form>
  );
};

export default MoreInfoForm;
