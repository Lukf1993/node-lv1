const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors');

const Products = require('../../models/products');


router.use(cors())

//GET

router.get('/:category', paginatedResults(Products), (req, res) => {
    res.json(res.paginatedResults)
});

function paginatedResults(model) {
    return async (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const query = req.query.name;
        let sort = {};
        const findOptions = {};
        const currentCategory = req.params.category;
        const startIndex = ( page - 1 ) * limit;
        const endIndex = page * limit;
        // console.log(res)

        const results = {};

        if (endIndex < await model.countDocuments().exec()) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }

        if(query) {
            findOptions.name = query;
        } else {
            if(currentCategory !== 'category') {
                findOptions.type = currentCategory;
            } else {
                sort = {'name': 1}
            }
        }
        try {

            results.results = await model.find(findOptions).sort(sort).limit(limit).skip(startIndex).exec();
            res.paginatedResults = results;
            res.json(res.paginatedResults);
        }
            catch (e) {
            res.status(404).json({ message: e.message })
        }
    }
}


//POST

router.post('/', (req, res) => {
    const newItem = new Products({
        name: req.body.name,
        type: req.body.type,
        item: req.body.item
    });
    newItem.save().then(item => res.json(item));
});

//DELETE

router.delete('/:id', (req, res) => {
    Products.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(error => res.status(404).json({success: false}))
})



module.exports = router