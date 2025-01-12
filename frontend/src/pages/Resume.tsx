import { useState } from "react";
import { cn } from "../libs/utils";
import Button from "../components/Button";
import ResumeContent from "../components/ResumeContent";
import { useForm } from "react-hook-form";
import { resumeSchema } from "../DataValidation/inputSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import PersonalInfo from "../components/resume/PersonalInfo";
import Education from "../components/resume/Education";
import type { z } from "zod";

type FormData = z.infer<typeof resumeSchema>;

const STEPS = [
  { id: "personal", label: "Personal Information", Component: PersonalInfo },
  { id: "education", label: "Education", Component: Education },
  { id: "experience", label: "Experience", Component: () => <p>experience</p> },
  { id: "skills", label: "Skills", Component: () => <p>skills</p> },
  { id: "projects", label: "Projects", Component: () => <p>projects</p> },
  { id: "summary", label: "Summary", Component: () => <p>summary</p> },
] as const;

const DEFAULT_VALUES: FormData = {
  personalInformation: {
    name: "",
    email: "",
    phone: "",
    address: "",
  },
  education: [
    {
      degree: "",
      school: "",
      year: "",
    },
  ],
  experience: [
    {
      role: "",
      company: "",
      year: "",
    },
  ],
  skills: [],
  projects: [
    {
      name: "",
      description: "",
      year: "",
    },
  ],
  summary: "",
};

const Resume = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const form = useForm<FormData>({
    resolver: zodResolver(resumeSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { handleSubmit, formState: { errors }, control } = form;

  const isLastStep = currentStep === STEPS.length - 1;
  const CurrentStepComponent = STEPS[currentStep].Component;

  const handleNext = () => {
    if (isLastStep) return;
    if (Object.keys(errors).length > 0) return;
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentStep < 1) return;
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col space-y-5 items-center justify-center">
      <div className="p-6 flex gap-x-5">
        {STEPS.map((step, idx) => (
          <div
            key={step.id}
            className={cn(
              "border-gray-300 bg-indigo-100 items-center justify-center rounded-full h-16 w-16 flex flex-row",
              currentStep === idx && "bg-indigo-600 text-white"
            )}
          >
            <div>{idx + 1}</div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-2xl">
        <ResumeContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CurrentStepComponent control={control} errors={errors} />
          </form>
        </ResumeContent>
      </div>

      <div className="flex justify-between w-full">
        <Button
          disabled={currentStep === 0}
          className="disabled:bg-gray-400 disabled:cursor-not-allowed"
          label="Previous"
          onClick={handlePrevious}
        />
        <Button
          label={isLastStep ? "Submit" : "Next"}
          onClick={handleNext}
          type={isLastStep ? "submit" : "button"}
        />
      </div>
    </div>
  );
};

export default Resume;
