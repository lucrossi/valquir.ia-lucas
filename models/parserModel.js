var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var parserSchema = mongoose.Schema({
    PARSER_TYPE: {
        type: String,
        require: true
    },
    CONFIG_NAME: {
        type: String,
        require: true,
        validate: {
            validator: function(text){
                return text.indexOf('PARSER_') === 0;
            },
            message: 'Debe comenzar con prefijo PARSER_'
        }
    },
    VERSION: {
        type: String,
        require: true,
        unique: true,
        validate: {
            validator: function(v){
                return /\d.\d/.test
            }
        }
    },
    RECORD_TYPE_VALIDATION: {
        type: Boolean,
        require: true
    },
    IGNORE_HEADER: Boolean,
    INPUT_DESCRIPTION: {type: Array, "default": []}//Schema.Types.Mixed
});

parserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('/parsers', parserSchema);