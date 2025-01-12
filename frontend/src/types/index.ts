import { z } from "zod";
import { resumeSchema } from "../DataValidation/inputSchema";

export type FormData = z.infer<typeof resumeSchema>;
