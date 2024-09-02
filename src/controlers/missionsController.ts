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
    res.send(result.rows[0])
  } catch (err) {
    next(err)
  }
}
export async function insertMission(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { name, description, robot_id } = req.body
    const result = await db.query('INSERT INTO missions (name, description, robot_id) VALUES($1, $2, $3)', [
      name,
      description,
      Number(robot_id),
    ])
    res.send({ msg: 'Mission inserted' })
  } catch (err) {
    next(err)
  }
}

export async function putMission(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id
    const { name, description, robot_id } = req.body

    const result = await db.query('UPDATE missions SET name=$1, description=$2, robot_id=$3 WHERE id=$4', [
      name,
      description,
      robot_id,
      id,
    ])
    res.send({ msg: 'Mission updated' })
  } catch (err) {
    next(err)
  }
}

export async function deleteMission(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id
    if (!id) throw { status: 400, data: 'Bad request' }
    const result = await db.query('DELETE FROM missions WHERE id=$1;', [id])
    const missions = rowToObject(result.rows)
    res.send({ msg: 'Mission deleted' })
  } catch (err) {
    next(err)
  }
}
