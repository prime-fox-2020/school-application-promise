const express = require('express')
const pool = require('../config/connection.js')
const ModelSubjects = require('../model/modelSubjects.js')

class SubjectController {
    static getAll(req, res) {
        ModelSubjects.getSubjects()
        .then(result=>{
            res.render('subjects',{data : result.rows})
        })
        .catch(rej=>{
            res.render('error',{err:rej})
        })
        // ModelSubjects.getSubjects((err, data) => {
        //     if (err) {
        //         res.render('error')
        //     } else {
        //         res.render('subjects', { data }) // data di oper ke view. 
        //     }
        // })
    }
    static getId(req, res) {
        // ModelSubjects.getId(req.params.id, (err, data) => {
        //     if (err) {
        //         res.render('error')
        //     } else {
        //         res.render('subjects', { data })
        //     }
        // })
        ModelSubjects.getId(req.params.id)
        .then(result=>{
            res.render('subjects', {data:result.rows})
        })
        .catch(rej=>{
            res.render('error',{err: rej})
        })
        //     if (err) {
        //         res.render('error')
        //     } else {
        //         res.render('subjects', { data })
        //     }
        // })
    }
}

module.exports = SubjectController