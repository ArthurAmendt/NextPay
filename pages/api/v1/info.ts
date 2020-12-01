import { Request, Response } from 'express';
import { middlewares } from 'src/helpers/express';
import { env } from 'src/helpers/env';

export default async function handler(req: Request, res: Response) {
  await middlewares(req, res);

  res
    .status(200)
    .json({ url: `${env.url}/api/v1`, max: env.max, min: env.min });
}