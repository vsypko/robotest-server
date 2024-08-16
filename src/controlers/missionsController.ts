import { Request, Response, NextFunction } from 'express'
import db from '../db/db.connect.js'

export async function getMissions(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const missions = await db.query('SELECT * FROM missions')
    res.send({ total_count: missions.rowCount, missions: missions.rows })
  } catch (err) {
    next(err)
  }
}

export async function getMission(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = req.params.id
    if (!id) throw { status: 400, data: 'Bad request' }
    const mission = await db.query('SELECT * FROM missions WHERE id=$1', [id])
    if (!mission.rows[0]) throw { status: 400, data: 'Bad request' }
    res.send(mission.rows[0])
  } catch (err) {
    next(err)
  }
}
export async function insertMission(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { name, description, robot_id } = req.body

    if (!name || !description || !robot_id) throw { status: 400, data: 'Bad request' }

    const insertedMission = await db.query(
      'INSERT INTO missions (name, description, robot_id) VALUES($1, $2, $3) RETURNING *',
      [name, description, robot_id]
    )

    if (!insertedMission.rows[0]) throw { status: 400, data: 'Bad request' }

    res.send(insertedMission.rows[0])
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
