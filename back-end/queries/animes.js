const db = require('../db/dbConfig');

const getAllAnimes = async () => {
    try {
        // const animes = await db.any("SELECT * FROM anime");
        return animes
    } catch (error) {
        return error
    };
};

const getAnAnime = async (id) => {
    try {
        const anime = await db.one("SELECT * FROM anime WHERE id=$1", id)
        return anime  
    } catch (error) {
        return error
    };
};



module.exports = {
    getAllAnimes,
    getAnAnime
};