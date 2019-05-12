var express = require('express');
var router = express.Router();
var parsersController = require('../controllers/parserController.js');
var parsers = require('./parsers');

router.route('/parsers')
  .get((req,res)=>{
      res.json({'status':true,parsers:parsers});
  })
  .post((req,res)=>{
    const { PARSER_TYPE,CONFIG_NAME,VERSION,RECORD_TYPE_VALIDATION,IGNORE_HEADER,INPUT_DESCRIPTION } = req.body;
    parsers.store({
      //_id: parsers.length+1,
      parser_type : PARSER_TYPE,
      config_name : CONFIG_NAME,
      version : VERSION,
      record_type_val : RECORD_TYPE_VALIDATION,
      ignore_header : IGNORE_HEADER,
      input_desciption : INPUT_DESCRIPTION
    });
    parsersController.setParser(parsers,res);
    res.json({
      'success':true,
      'msg':'parser correcto'
    });
    db.collection('parsers').insert(req.body, function (err, result) {
      if (err)
         res.send('Error');
      else
        res.send('Success');

    });

  });

module.exports = router;
