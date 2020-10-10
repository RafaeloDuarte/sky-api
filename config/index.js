module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "DECFVGBHNJMKMJNHBGVF.DXCVBHJKLKIJUYTREWE456789OLKMNBVFDERT67.8IKJHBGFDRE5T67UIKJNHG",
    api: process.env.NODE_ENV === "production" ? "https://sky-api.herokuapp.com/" : "http://localhost:8000",
};