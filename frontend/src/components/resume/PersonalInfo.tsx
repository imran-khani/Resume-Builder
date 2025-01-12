import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import Input from "../Input";
import { FormData } from "../../types";


interface IPersonalInfo {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}

const PersonalInfo: React.FC<IPersonalInfo> = ({ control, errors }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Personal Information</h1>
      {/* Controller is used for each field in the form */}
      <Controller
        name="personalInformation.name"
        control={control}
        render={({ field }) => (
          <Input
            label="Name"
            type="text"
            {...field} // Spread the field props (value, onChange, etc.)
            error={errors?.personalInformation?.name?.message} // Show error message if validation fails
          />
        )}
      />
      <Controller
        name="personalInformation.email"
        control={control}
        render={({ field }) => (
          <Input
            label="Email"
            {...field}
            error={errors?.personalInformation?.email?.message}
          />
        )}
      />
      <Controller
        name="personalInformation.phone"
        control={control}
        render={({ field }) => (
          <Input
            label="Phone"
            {...field}
            error={errors?.personalInformation?.phone?.message}
          />
        )}
      />
      <Controller
        name="personalInformation.address"
        control={control}
        render={({ field }) => (
          <Input
            label="Address"
            {...field}
            error={errors?.personalInformation?.address?.message}
          />
        )}
      />
    </div>
  );
};

export default PersonalInfo;
