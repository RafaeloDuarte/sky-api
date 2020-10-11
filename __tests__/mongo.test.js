const mongoose = require('mongoose');
const Usuario = require('../model/usuario');
const userData = { nome: 'Rafael', email:"email@eeeemail.com", password:"123" };
const dbs = require("../config/database.json");
const dbURI = dbs.dbTest;
let savedUser

describe('Usuario Test', () => {

    beforeAll(async () => {
        await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('create & save user successfully', async () => {
        const validUser = new Usuario(userData);
        savedUser = await validUser.save();
        expect(savedUser._id).toBeDefined();
        expect(savedUser.nome).toBe(userData.nome);
        expect(savedUser.email).toBe(userData.email);
    });

    it('create user without required field should failed', async () => {
        const userWithoutRequiredField = new Usuario({ name: 'Rafael' });
        let err;
        try {
            const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
            error = savedUserWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.email).toBeDefined();
    });

    afterEach(async () => {
        Usuario.findById(savedUser.id).then(usuario => {
            usuario.remove()
        })
    })
    
})