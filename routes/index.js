var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/image',function(req,res){
  const imageContent = res.body.base64;
  processor(imageContent).then(a=>{
    console.log(a);
    res.json(a)
  }).catch(err=>{
    console.log(err);
  })
})
module.exports = router;
