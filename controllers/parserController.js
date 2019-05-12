var parsers = require('../models/parserModel.js');

let setParser = (req,res) => {
    //var p = req.json;

//    p.save(function(error) {
    error = req.validateSync();
//
        if (error){
            console.log(error);
        }
//        console.log("Parser successfully saved!");
        //console.log(data);
//    });

    res.json(p);
}
    /*    new parsers(
        {
            DECODER_TYPE:"CVS",
            CONFIG_NAME:"GENERIC_DECODER_MSS_NOKIA",
            VERSION:"1.0",
            RECORD_TYPE_VALIDATION:true,
            IGNORE_HEADER:true,
            INPUT_DESCRIPTION:
                {
                    FIELDS:[
                        {
                            NAME:"record_type",
                            TYPE:"char",
                            LONG:2
                        },
                        {
                            NAME:"calling_number",
                            TYPE:"string"
                        },
                        {
                            NAME:"called_number",
                            TYPE:"string"
                        },
                        {
                            NAME:"msisdn",
                            TYPE:"integer"
                        },
                        {
                            NAME:"file_seq_name",
                            TYPE:"integer"
                        },
                        {
                            NAME:"call_reference",
                            TYPE:"integer"
                        },
                        {
                            NAME:"dialled_digits",
                            TYPE:"integer"
                        },
                        {
                            NAME:"called_msrn",
                            TYPE:"double"
                        }
                    ]
                }
            }
        );
*/
    //console.log(error);
    //if (error) throw error;

//parsers.setModel(parserModel);
//p.save(function(err){
//    if (err) throw err;
//});


module.exports.setParser = setParser;

