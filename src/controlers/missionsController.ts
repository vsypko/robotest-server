import { Request, Response, NextFunction } from 'express'
import db from '../db/db.connect.js'
import { rowToObject } from '../services.js'

export async function getMissions(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const result = await db.query('SELECT * from missions;')
    if (!result.rowCount) throw { status: 400, data: 'Bad request' }
    res.send(result.rows)
  } catch (err) {
    next(err)
  }
}

export async function getMission(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = req.params.id
    if (!id) throw { status: 400, data: 'Bad request' }
    const result = await db.query('SELECT * from mission WHERE m.id=$1;', [id])
    if (!result.rowCount) throw { status: 400, data: 'Bad request' }
    const missions = rowToObject(result.rows)
    res.send({ total_count: result.rowCount, missions })
  } catch (err) {
    next(err)
  }
}
export async function insertMission(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { name, description, robot_id } = req.body

    if (!name || !description || !robot_id) throw { status: 400, data: 'Bad request' }

    const result = await db.query('INSERT INTO missions (name, description, robot_id) VALUES($1, $2, $3) RETURNING *', [
      name,
      description,
      robot_id,
    ])
    if (!result.rowCount) throw { status: 400, data: 'Bad request' }
    const missions = rowToObject(result.rows)
    res.send({ total_count: result.rowCount, missions })
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
