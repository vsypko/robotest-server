import { Request, Response, NextFunction } from 'express'
import db from '../db/db.connect.js'

export async function getRobots(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const robots = await db.query('SELECT * FROM robots;')
    if (!robots) throw { status: 400, data: 'Bad request' }
    res.send({ total_count: robots.rowCount, robots: robots.rows })
  } catch (err) {
    next(err)
  }
}

export async function getRobot(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    if (!req.params.id) throw { status: 400, data: 'Bad request' }
    const id = req.params.id
    const robot = await db.query('SELECT * from robots WHERE id=$1;', [id])
    if (!robot.rows[0]) throw { status: 400, data: 'Bad request' }
    res.send(robot.rows[0])
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
