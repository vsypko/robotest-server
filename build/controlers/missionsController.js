export function getMissions(req, res, next) {
    try {
        res.send({ msg: 'All missions sent' });
    }
    catch (err) {
        next(err);
    }
}
export function getMission(req, res, next) {
    try {
        res.send({ msg: `Get mission by ID = ${req.params.id}` });
    }
    catch (err) {
        next(err);
    }
}
export function insertMission(req, res, next) {
    try {
        res.send({ msg: 'Insert new mission' });
    }
    catch (err) {
        next(err);
    }
}
export function putMission(req, res, next) {
    try {
        res.send({ msg: `Update mission ID=${req.params.id}` });
    }
    catch (err) {
        next(err);
    }
}
export function deleteMission(req, res, next) {
    try {
        res.send({ msg: `Remove mission ID=${req.params.id}` });
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=missionsController.js.map