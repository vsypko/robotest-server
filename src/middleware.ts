import { Request, Response, NextFunction } from 'express'

export default function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
  if (typeof err === 'object' && err != null && 'status' in err && 'data' in err) {
    res.status(err.status).json(err.data)
    return
  }

  if (typeof err === 'object' && err != null && 'code' in err) {
    if (err.code === '23505') {
      res.status(400).json('Bad request. Unique data violation.')
      return
    }
    res.status(400).json(`${err.toString()}, code: ${err.code}`)
    return
  }
  res.status(500).json('Internal server error!')
}
