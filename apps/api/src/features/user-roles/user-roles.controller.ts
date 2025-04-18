import { HTTP_STATUS } from '@/constants/http-status';
import { GetAllUserRolesZod } from '@/lib/zod/schemas/user-roles.zod';
import { HttpError } from '@/utils/http-error';
import { Request, Response } from 'express';
import { userRolesService } from './user-roles.service';

class UserRolesController {
  public async getAll(
    req: Request<unknown, unknown, unknown, GetAllUserRolesZod>,
    res: Response,
  ) {
    const results = await userRolesService.getAll(req.query);
    res.json(results);
  }

  public async get(req: Request, res: Response) {
    const record = await userRolesService.get(req.params.id);
    if (!record) this.throwNotFoundHttpError();

    res.json(record);
  }

  public async create(req: Request, res: Response) {
    const createdRecord = await userRolesService.create(req.body);

    res.status(HTTP_STATUS.CREATED).json({
      message: `User role ${createdRecord.id} created successfully`,
    });
  }

  public async update(req: Request, res: Response) {
    const updatedRecord = await userRolesService.update(
      req.params.id,
      req.body,
    );
    if (!updatedRecord) this.throwNotFoundHttpError();

    res.json({
      message: `User role ${updatedRecord.id} updated successfully`,
    });
  }

  public async delete(req: Request, res: Response) {
    const deletedRecord = await userRolesService.delete(req.params.id);
    if (!deletedRecord) this.throwNotFoundHttpError();

    res.json(deletedRecord);
  }

  private throwNotFoundHttpError() {
    throw new HttpError(HTTP_STATUS.NOT_FOUND, 'User role not found');
  }
}

export const userRolesController = new UserRolesController();
