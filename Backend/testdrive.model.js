const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bikeSchema = new Schema({
  bikename: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  salutation: {
    type: String,
    default: ''
  },
  firstname: {
    type: String,
    default: ''
  },
  lastname: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  contact: {
    type: String,
    default: ''
  },
  contactemail: {
    type: Boolean,
    default: false
  },
  contactcall: {
    type: Boolean,
    default: false
  },
  contacttext: {
    type: Boolean,
    default: false
  }
});

const Testdrive = mongoose.model('Testdrive', bikeSchema);

module.exports = Testdrive;
