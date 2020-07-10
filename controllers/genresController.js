const Genre = require("../models/Genre");

// @desc        Get all genres
// @route       GET /api/genres
exports.getGenres = async (req, res, next)=>{
    try {
        const genres = await Genre.find();
        return res.status(200).json({
            success: true,
            count: genres.length,
            data: genres
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// @desc        Add genre
// @route       POST /api/genres
exports.addGenre = async (req, res, next)=>{
    try {
        const genre = await Genre.create(req.body);   
        res.status(200).json({
            success: true,
            data: genre
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })        
    }
}

// @desc        Delete genre
// @route       DELETE /api/genres/:id
exports.deleteGenre = async (req, res, next)=>{
    try {
        const genre = await Genre.findByIdAndDelete(req.params.id);
        if(!genre) {
            return res.status(404).json({
                success: false,
                message: "Genre not found"
            })
        }
        res.status(200).json({
            success: true,
            data: genre
        })
        
    } catch (err) {
        req.status(500).json({
            success: false
        })
    }
}

