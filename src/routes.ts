import express from 'express'
import * as missions from './controlers/missionsController.js'
import * as robots from './controlers/robotsController.js'

const router = express.Router()

//add main routes ------------------------------------------------------------
router.get('/missions', missions.getMissions)
router.get('/robots', robots.getRobots)

//mission routs --------------------------------------------------------

const missionRouter = express.Router()

missionRouter.get('/:id', missions.getMission)
missionRouter.post('/', missions.insertMission)
missionRouter.put('/:id', missions.putMission)
missionRouter.delete('/:id', missions.deleteMission)

router.use('/mission', missionRouter)

//robot routes ---------------------------------------------------------

const robotRouter = express.Router()

robotRouter.get('/:id', robots.getRobot)
robotRouter.post('/', robots.insertRobot)
robotRouter.put('/:id', robots.putRobot)
robotRouter.delete('/:id', robots.putRobot)

router.use('/robot', robotRouter)

export default router
