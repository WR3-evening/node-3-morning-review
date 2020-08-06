module.exports = {
    addRacer: (req, res) => {
        const {name, age, country} = req.body
        const db = req.app.get('db')
        db.add_racer([name, age, country]).then(racers => {
            res.status(200).send(racers)
        })
    },
    getRacers: (req, res) => {
        const db = req.app.get('db')
        db.get_racers().then(racers => {
            res.status(200).send(racers)
        })
    }
}