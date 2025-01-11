import { z } from "zod";

// Zod schema for validating personal information
const personalInformationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  address: z.string().optional(),
});

// Zod schema for validating education
const educationSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  school: z.string().min(1, "School name is required"),
  year: z.string().min(4, "Year must be a valid 4-digit year").max(4, "Year must be a valid 4-digit year"),
});

// Zod schema for validating experience
const experienceSchema = z.object({
  role: z.string().min(1, "Role is required"),
  company: z.string().min(1, "Company name is required"),
  year: z.string().min(4, "Year must be a valid 4-digit year").max(4, "Year must be a valid 4-digit year"),
});

// Zod schema for validating skills (array of strings)
const skillsSchema = z.array(z.string().min(1, "Skill is required")).optional();

// Zod schema for validating projects
const projectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().min(1, "Description is required"),
  year: z.string().min(4, "Year must be a valid 4-digit year").max(4, "Year must be a valid 4-digit year"),
});

// Zod schema for validating the overall resume data
const resumeSchema = z.object({
  personalInformation: personalInformationSchema,
  education: z.array(educationSchema).nonempty("At least one education entry is required"),
  experience: z.array(experienceSchema).nonempty("At least one experience entry is required"),
  skills: skillsSchema,
  projects: z.array(projectSchema).nonempty("At least one project is required"),
  summary: z.string().min(1, "Summary is required"),
});

export { resumeSchema, personalInformationSchema, educationSchema, experienceSchema, skillsSchema, projectSchema };
