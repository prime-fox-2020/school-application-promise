const Models = require('../models')
let lastData = null;

class Render {
    
    static page = (page, request, response) => {

        let pageSelector = request.params.selector;
        let callout = request.query.hasOwnProperty('action') ||
                      request.query.hasOwnProperty('update') ||
                      request.query.hasOwnProperty('status')
                      ? request.query : '';

        switch (pageSelector) {

            case 'delete' : {

                Models.delete(page, request.query.id)
                    .then(red => response.redirect(302, red))
                    .catch(err => response.send(err))
            
            }; break;

            case 'edit' : {

                Models.findById(page, request.query.id)
                    .then(result => {response.render('new', {form: page, data: lastData ? lastData : result, activeMenu: page, hideAddNewButton: true, callout: callout}); lastData = null;})
                    .catch(err => response.send(err))

            }; break;

            case 'add' : {

                response.render('new', {form: page, data: lastData, activeMenu: page, hideAddNewButton: true, callout: callout});
                lastData = null;

            }; break;

            default : {
                Models.show(page)
                    .then(result => response.render(page, {data: result, activeMenu: page, hideAddNewButton: false, callout: callout}))
                    .catch(err => response.send(err))
            }; break;
        }

    }

}

class Home {

    static render(request, response) {
        response.render('index')
    }

}

class Teachers {

    static render = (request, response) => {

        Render.page('teachers', request, response)
    }

    static post = (request, response) => {

        if (!request.query.hasOwnProperty('id')) {
        
            Models.newData('teachers', request.body)
                .then(result => {
                    // set last input by user if we catch an error
                    if (result.error) {
                        lastData = result.content;
                    }

                    response.redirect(302, result.redirect)
                })
                .catch(err => response.send(err))
        
        } else {

            Models.update('teachers', request.body)
                .then(result => {
                    if (result.error) {
                        lastData = result.content;
                    }

                    response.redirect(302, result.redirect)
                })
                .catch(err => response.send(err))
        }
    }

}

class Students {
    
    static render = (request, response) => {

        Render.page('students', request, response)

    }

    static post = (request, response) => {

        if (!request.query.hasOwnProperty('id')) {

            Models.newData('students', request.body)
                .then(result => {
                    if (result.error) {
                        lastData = result.content
                    }

                    response.redirect(302, result.redirect)
                })
                .catch(err => response.send(err))
        
        } else {
        
            Models.update('students', request.body)
                .then(result => {
                    if (result.error) {
                        lastData = result.content
                    }

                    response.redirect(302, result.redirect)
                })
                .catch(err => response.send(err))
        
        }
    }

}

class Subjects {

    static render = (request, response) => {
        Render.page('subjects', request, response)
    }

    static post = (request, response) => {
        if (!request.query.hasOwnProperty('id')) {
            Models.newData('subjects', request.body)
                .then(red => response.redirect(302, red))
                .catch(err => response.send(err))
        } else {
            Models.delete('subjects', request.query.id)
                .then(red => response.redirect(302, red))
                .catch(err => response.send(err))  
        }
    }

}

module.exports = {Home, Teachers, Students, Subjects}