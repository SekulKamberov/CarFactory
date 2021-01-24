const jwt = require('jsonwebtoken')
const usersData = require('../data/users')
const PassportLocalStrategy = require('passport-local').Strategy

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const user = {
    email: email.trim(),
    password: password.trim()
  }

  let savedUser = usersData.findByEmail(email)

  if (!savedUser) {
    const error = new Error('Incorrect email or password')
    error.name = 'IncorrectCredentialsError'

    return done(error)
  }

  const isMatch = savedUser.password === user.password

  if (!isMatch) {
    const error = new Error('Incorrect email or password')
    error.name = 'IncorrectCredentialsError'

    return done(error)
  }

  const payload = {
    sub: savedUser.id,
    name: savedUser.name,
    isAdmin: savedUser.roles.includes('Admin')
  }

  // create token string
  const token = jwt.sign(payload, 's0m3 r4nd0m str1ng', {expiresIn: '1h'})

  return done(null, token)
})
