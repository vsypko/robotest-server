import { Request, Response, NextFunction } from 'express'

export function getRobots(req: Request, res: Response, next: NextFunction) {
  try {
    res.send({ msg: 'All robots sent' })
  } catch (err) {
    next(err)
  }
}
export function getRobot(req: Request, res: Response, next: NextFunction) {
  try {
    res.send({ msg: `Get Robot by ID = ${req.params.id}` })
  } catch (err) {
    next(err)
  }
}
export function insertRobot(req: Request, res: Response, next: NextFunction) {
  try {
    res.send({ msg: 'Insert new Robot' })
  } catch (err) {
    next(err)
  }
}
export function putRobot(req: Request, res: Response, next: NextFunction) {
  try {
    res.send({ msg: `Update Robot ID=${req.params.id}` })
  } catch (err) {
    next(err)
  }
}
export function deleteRobot(req: Request, res: Response, next: NextFunction) {
  try {
    res.send({ msg: `Remove Robot ID=${req.params.id}` })
  } catch (err) {
    next(err)
  }
}
