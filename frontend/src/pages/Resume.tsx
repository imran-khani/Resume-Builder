import { useState } from "react";
import { cn } from "../libs/utils";
import Button from "../components/Button";
import ResumeContent from "../components/ResumeContent";
import { useForm } from "react-hook-form";
import { resumeSchema } from "../DataValidation/inputSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import PersonalInfo from "../components/resume/PersonalInfo";

const Resume = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    watch,
    control,
  } = useForm({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
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
    },
  });

  const steps = [
    "Personal Information",
    "Education",
    "Experience",
    "Skills",
    "Projects",
    "Summary",
  ];

  // const resumeData =

  const handleNext = () => {
    if (currentStep === steps.length - 1) return;
    setCurrentStep((prev) => prev + 1);
  };

  const renderContent = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <p>education</p>;
      case 2:
        return <p>experience</p>;
      case 3:
        return <p>skills</p>;
      case 4:
        return <p>projects</p>;
      case 5:
        return <p>summary</p>;
      default:
        return <p>Nothing to show</p>;
    }
  };

  const onSubmit = (data) => {};

  return (
    <div className="flex flex-col space-y-5 items-center justify-center">
      <div className="p-6 flex gap-x-5">
        {steps.map((_, idx) => (
          <div
            key={idx}
            className={cn(
              "border-gray-300 bg-indigo-100 items-center justify-center rounded-full h-16 w-16 flex flex-row",
              currentStep === idx && "bg-indigo-600 text-white"
            )}
          >
            <div>{idx + 1}</div>
          </div>
        ))}
      </div>

      <div>
        <ResumeContent>
          <form onSubmit={handleSubmit(onSubmit)}>{renderContent()}</form>
        </ResumeContent>
      </div>

      <div className="flex justify-between w-full ">
        <Button
          disabled={currentStep === 0}
          className="disabled:bg-gray-400 disabled:cursor-not-allowed"
          label="Previous"
          onClick={() => {
            if (currentStep < 1) return;
            setCurrentStep((prev) => prev - 1);
          }}
        />
        <Button
          label={currentStep === steps.length - 1 ? "Submit" : "Next"}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Resume;
