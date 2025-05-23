import { HTTP_STATUS } from '@/constants/http-status';
import { AnyZodObject, ZodError, ZodIssue } from '@/lib/zod';
import { HttpError } from '@/utils/http-error';
import { NextFunction, Request, Response } from 'express';

interface ValidateWithZodProps {
  params?: AnyZodObject;
  query?: AnyZodObject;
  body?: AnyZodObject;
}

export const validateWithZod = ({
  params,
  query,
  body,
}: ValidateWithZodProps) => {
  return (req: Request, _: Response, next: NextFunction) => {
    try {
      params?.parse(req.params);
      query?.parse(req.query);
      body?.parse(req.body);

      // Succeeded
      return next();
    } catch (err) {
      if (err instanceof ZodError) {
        // Failed: zod error
        const validationErrors = err.errors.map((issue: ZodIssue) => ({
          field: `${issue.path.join('.')}`,
          message: issue.message,
        }));
        return next(
          new HttpError({
            validationErrors,
            httpStatus: HTTP_STATUS.UNPROCESSABLE,
          }),
        );
      }

      // Failed: internal error
      return next(err);
    }
  };
};
