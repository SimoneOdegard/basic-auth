'use strict';

const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// usersSchema.pre('save', function to handle bcrypt hash) -> this will always make sure it is bcrypted first ... line 17 in routes

// usersSchema.statics.basicAuthValidation(name, pw)
// get existing users
// compare to bcrypt
// if match; return users
// otherwise return error

const Users = mongoose.model('users', usersSchema);

module.exports = Users;

// methods on schema - doing bcrypt, basicAuth -> grab headers from request, base64 to decode it, get username and password individually then use for validation process