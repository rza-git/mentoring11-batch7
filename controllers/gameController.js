const {Game} = require("../models")

const findAll = async (req, res, next) => {

    try {
        const games = await Game.findAll();

        res.status(200).json(games)
    } catch(err) {
        next(err)
    }
}

const findOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const game = await Game.findOne({
            where: {
                id
            }
        });

        if(!game) {
            throw {name: "ErrorNotFound"}
        }
        res.status(200).json(game)
    } catch(err) {
        next(err)
    }
}

const create = async (req, res, next) => {
    try {
        const {title, developer, year, genres} = req.body;

        const game = await Game.create({
            title,
            developer,
            year,
            genres
        })

        res.status(201).json({message: "Game created successfully"})
    } catch(err) {
        next(err);
    }
}

const destroy = async (req, res, next) => {
    try {
        const {id} = req.params;

        const game = await Game.findOne({
            where: {
                id
            }
        })

        if(!game) 
            throw {name: "ErrorNotFound"}

        await game.destroy();
        res.status(200).json({message: "Game deleted successfully"})
    } catch(err) {
        next(err);
    }
}

module.exports = {
    findAll,
    findOne,
    destroy,
    create
}