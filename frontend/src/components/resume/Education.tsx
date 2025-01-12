import { Control, Controller, FieldErrors } from "react-hook-form";
import { FormData } from "../../types"
import Input from "../Input";

interface IEducation {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}

const Education:React.FC<IEducation> = ({control, errors}) => {
  return (
    <div>
        <Controller 
        name="education.0.degree"
        control={control}
        render={({field})=>(
            <Input
            label="Degree"
            {...field}
            error={errors?.education?.[0]?.degree?.message}
            />
        )}
        />
    </div>
  )
}

export default Education