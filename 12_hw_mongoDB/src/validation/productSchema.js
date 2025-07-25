import * as Yup from "yup";

export const addProductSchema = Yup.object({
    name: Yup.string().trim().min(2).required(),
    price: Yup.number().min(0).required(),
    description: Yup.string().trim().min(10).required(),
});

export const updateProductSchema = Yup.object({
    name: Yup.string().trim(),
    price: Yup.number().min(0),
    description: Yup.string().trim().min(10),
}).noUnknown(true, "Unknown finds");