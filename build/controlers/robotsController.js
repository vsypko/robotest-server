export function getRobots(req, res, next) {
    try {
        res.send({ msg: 'All robots sent' });
    }
    catch (err) {
        next(err);
    }
}
export function getRobot(req, res, next) {
    try {
        res.send({ msg: `Get Robot by ID = ${req.params.id}` });
    }
    catch (err) {
        next(err);
    }
}
export function insertRobot(req, res, next) {
    try {
        res.send({ msg: 'Insert new Robot' });
    }
    catch (err) {
        next(err);
    }
}
export function putRobot(req, res, next) {
    try {
        res.send({ msg: `Update Robot ID=${req.params.id}` });
    }
    catch (err) {
        next(err);
    }
}
export function deleteRobot(req, res, next) {
    try {
        res.send({ msg: `Remove Robot ID=${req.params.id}` });
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=robotsController.js.map