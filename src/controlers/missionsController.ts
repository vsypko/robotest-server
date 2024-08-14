import { Request, Response, NextFunction } from 'express'

export function getMissions(req: Request, res: Response, next: NextFunction) {
  try {
    res.send({ msg: 'All missions sent' })
  } catch (err) {
    next(err)
  }
}
export function getMission(req: Request, res: Response, next: NextFunction) {
  try {
    res.send({ msg: `Get mission by ID = ${req.params.id}` })
  } catch (err) {
    next(err)
  }
}
export function insertMission(req: Request, res: Response, next: NextFunction) {
  try {
    res.send({ msg: 'Insert new mission' })
  } catch (err) {
    next(err)
  }
}
export function putMission(req: Request, res: Response, next: NextFunction) {
  try {
    res.send({ msg: `Update mission ID=${req.params.id}` })
  } catch (err) {
    next(err)
  }
}
export function deleteMission(req: Request, res: Response, next: NextFunction) {
  try {
    res.send({ msg: `Remove mission ID=${req.params.id}` })
  } catch (err) {
    next(err)
  }
}
