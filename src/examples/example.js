const finess = require('..')

const all = finess.getAllEstablishments()

const establishments = finess.getEstablishmentsWithFiness('010003820')
console.log(establishments)
let establishment = finess.getEstablishmentWithFinessET('010003820')
console.log(establishment)
establishment = finess.getEstablishmentWithFinessEJ('010003812')
console.log(establishment)
