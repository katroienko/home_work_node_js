import * as Yup from "yup";

import { emailValidation, passwordValidation } from "../constans/users.constants.js";

export const passwordSchema = Yup.string()
.trim()
.min(6)
.matches(
  passwordValidation.value,
  passwordValidation.message
)
.required();

export const emailSchema = Yup.string()
.trim()
.matches(emailValidation.value, emailValidation.message)
.required();

export const userAddSchema = Yup.object({
  fullName: Yup.string().trim().required(),
  email: emailSchema,
  password: passwordSchema,
});

export const userChangePasswordSchema = Yup.object({
  oldPassword: passwordSchema,
  newPassword: passwordSchema,
});