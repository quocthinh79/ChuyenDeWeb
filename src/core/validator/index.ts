import * as z from "zod";

export const ZodError = z.ZodError;

export const schemaLogin = z.object({
  username: z
    .string()
    .min(3, "Tên đăng nhập phải nhiều hơn 3 kí tự")
    .max(10, "Tên đăng nhập không được quá 10 kí tự"),
  password: z.string().min(6, "Mật khẩu phải có tối thiểu 6 kí tự"),
});

export const handleSchemaError = (error: any, form: any) => {
  if (error instanceof ZodError) {
    const errorMessages = error.issues;
    errorMessages.map((error: any) => {
      form.setFields([
        {
          name: error.path[0],
          errors: [`${error.message}`],
        },
      ]);
    });
  }
};
