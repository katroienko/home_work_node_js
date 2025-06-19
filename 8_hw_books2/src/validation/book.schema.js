
import * as Yup from "yup";

export const BookAddSchema = Yup.object({
    title: Yup.string()
      .trim()
      .required("Title is required")
      .min(2, "Title must be at least 2 characters")
      .max(255, "Title must be at most 255 characters"),
    author: Yup.string()
      .trim()
      .required("Author is required")
      .min(2, "Author must be at least 2 characters")
      .max(30, "Author must be at most 30 characters"),
    year: Yup.number()
      .required("Year is required")
      .integer("Year must be an integer"),
});

export const BookUpdateSchema = Yup.object({
    title: Yup.string()
      .trim()
      .min(2, "Title must be at least 2 characters")
      .max(255, "Title must be at most 255 characters"),
    author: Yup.string()
      .trim()
      .min(2, "Author must be at least 2 characters")
      .max(30, "Author must be at most 30 characters"),
    year: Yup.number()
      .integer("Year must be an integer"),
}).noUnknown(true, "Unknown fields found");
