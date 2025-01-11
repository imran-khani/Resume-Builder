import { useState } from "react";
import { cn } from "../libs/utils";
import Button from "../components/Button";
import ResumeContent from "../components/ResumeContent";

const Resume = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Personal Information",
    "Education",
    "Experience",
    "Skills",
    "Projects",
    "Summary",
  ];

  const resumeData = {
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
        <ResumeContent>hello</ResumeContent>
      </div>
    </div>
  );
};

export default Resume;
