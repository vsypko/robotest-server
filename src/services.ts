export interface Mission {
  id: number
  name: string
  description: string
  robot_id: number
  robot_name: string
  model_name: string
  pose_x: number
  pose_z: number
  angle: number
}

export function rowToObject(rows: Mission[]) {
  const missions = rows.map((row) => {
    const mission = {
      id: row.id,
      name: row.name,
      description: row.description,
    }
    const robot = {
      id: row.robot_id,
      name: row.robot_name,
      model_name: row.model_name,
      pose_x: row.pose_x,
      pose_z: row.pose_z,
      angle: row.angle,
    }
    return { mission, robot }
  })
}
