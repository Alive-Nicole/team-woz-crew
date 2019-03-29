const router = require("express").Router();

router.post("/add", ( request, response ) => {
    console.log('====request.body====', request.data)
    response.json({"yup": `Goteem from ${ request.body.type }`})
})
 
module.exports = router;