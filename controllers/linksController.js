//FIX THESE ROUTES, TOO MESSY

const Link = require('../models/Link');
const Genre = require("../models/Genre");

//@desc     Get all links
//@route    GET /api/genres/:gid/link
exports.getLink = async (req,res,next) => {
    try {
        const genre = await Genre.findById(req.params.gid);
        // console.log(genre.links);
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

//@desc     Add link
//@route    POST /api/genres/:gid/link

exports.addLink = async (req,res,next) => {
    // console.log(req.body);
    Genre.findById(req.params.gid)
    .then(genre => {
        genre.links.push(req.body);
            genre.save()
            .then(genre => {
                res.status(200).json({
                    success: true,
                    data: genre.links
                })
        })
    }).catch(err => { 
        res.status(500).json({
            success: false, 
            message: err.message,
            // data: genre
        })
    })
}


//@desc     Delete link
//@route    DELETE /api/genres/:gid/link/:id
exports.deleteLink = async (req, res, next) => {
    try {
        console.log("delete link");
        const genre = await Genre.findById(req.params.gid);
        genre.links = genre.links.filter(link => link._id != req.params.id);
        const savedGenre = await genre.save();
        res.status(200).json({
            success: true,
            data: req.params.id,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}