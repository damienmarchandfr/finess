import {
	getAllEstablishments,
	getEstablishmentsWithFiness,
	getEstablishmentWithFinessEJ,
	getEstablishmentWithFinessET,
} from '..'

const all = getAllEstablishments()

const establishments = getEstablishmentsWithFiness('010003820')
console.log(establishments)
let establishment = getEstablishmentWithFinessET('010003820')
console.log(establishment)
establishment = getEstablishmentWithFinessEJ('010003812')
console.log(establishment)
