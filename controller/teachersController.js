
const express = require('express')
const pool = require('../config/connection.js')
const ModelTeachers = require('../model/modelTeachers.js')

class TeachersController {
    static getAll(req, res) {
        ModelTeachers.getAll()
            .then(result =>{
                res.render('teachers',{data : result.rows})
            })
            .catch(rej=>{
                res.render('error',{err : rej})
            })
            
        // ModelTeachers.getAll((err, data) => {
        //     if (err) {
        //         res.render('error')
        //     } else {
        //         res.render('teachers', { data }) // data di oper ke view. 
        //     }
        // })
    }
    static getId(req, res) {
        ModelTeachers.getId(req.params.id) 
            .then(result =>{
                res.render('teachers',{data : result.rows})
            })
            .catch(rej=>{
                res.render('error',{err:rej})
            })
        // ModelTeachers.getId(req.params.id, (err, data) => {
        //     if (err) {
        //         res.render('error')
        //     } else {
        //         res.render('teachers', { data })
        //     }
        // })
    }
}

module.exports = TeachersController