const Nightmare = require('nightmare')
const assert = require('assert')


describe('Load all pages (render with react)', function() {
  this.timeout('20s')
  let nightmare = new Nightmare()
  describe('/ (Home page)', () => { it('should load within 5s', done => {
    nightmare.goto('http://localhost:3000/') .end() .then( done())
    .catch(done) }) })
    describe('/ (login page)', () => { it('should load within 5s', done => {
      nightmare.goto('http://localhost:3000/login') .end()  .then( done())
      .catch(done) }) })
      describe('/ (Character page)', () => { it('should load within 5s', done => {
        nightmare.goto('http://localhost:3000/character') .end()  .then( done())
        .catch(done) }) })
   })
describe('Attempt Login', function() {
  this.timeout('20s')
  let nightmare = new Nightmare()

  describe('Reject Invalid login', () => {it('should not allow bad user login', done => {
    nightmare.goto('http://localhost:3000') .on('page', (type, message) => {if (type == 'alert') done() })
     .type('login-email-input', 'invalidEmail')
     .type('login-password-input', 'BADPASS')
     .click('login-button')
     .wait(3000)
     .end()
     .then()
     .catch(done)
 }) })
 describe('Accept valid login', () => {it('Allows User login', done => {
   nightmare.goto('http://localhost:3000') .on('page', (type, message) => {if (type == 'alert') done() })
    .type('login-email-input', 'tjf252@nau.edu')
    .type('login-password-input', '!testpass1')
    .click('login-button')
    .wait(3000)
    .end()
    .then()
    .catch(done)
}) }) })
