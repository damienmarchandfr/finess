const establishments = require('./data.json') as Establishment[]

export interface Geolocalisation {
	nofinesset: string // Numéro FINESS ET
	coordxet: string // Coordonnées X
	coordyet: string // Coordonnées Y
	sourcecoordet: string // Source des coordonnées
	datemaj: Date | null // Date de mise à jour des coordonnées
}

export interface Establishment {
	nofinesset: string // Numéro FINESS ET
	nofinessej: string // Numéro FINESS EJ
	rs: string // Raison sociale
	rslongue: string // Raison sociale longue
	complrs: string // Complément de raison sociale
	compldistrib: string // Complément de distribution
	numvoie: string // Numéro de voie
	typvoie: string // Type de voie
	voie: string // Libellé de voie
	compvoie: string // Complément de voie
	lieuditbp: string // Lieu-dit / BP
	commune: string // Code Commune
	departement: string // Département
	libdepartement: string // Libellé département
	ligneacheminement: string // Ligne d’acheminement (CodePostal+Lib commune)
	telephone: string // Téléphone
	telecopie: string // Télécopie
	categetab: string // Catégorie d’établissement
	libcategetab: string // Libelle catégorie d’établissement
	categagretab: string // Catégorie d’agrégat d’établissement
	libcategagretab: string // Libellé catégorie d’agrégat d’établissement
	siret: string // Numéro de SIRET
	codeape: string // Code APE,
	codemft: string // Code MFT
	libmft: string // Libelle MFT
	codesph: string // Code SPH
	libsph: string // Libelle SPH
	dateouv: Date | null // Date d’ouverture
	dateautor: Date | null // Date d’autorisation
	datemaj: Date | null // Date de mise à jour sur la structure
	numuai: string // Numéro éducation nationale
	geolocalisation: Geolocalisation | null
}

export function getAllEstablishments() {
	return establishments
}

export function getEstablishmentsWithFiness(finess: string) {
	const establishmentsFound = establishments.filter((e) => {
		return e.nofinessej === finess || e.nofinesset === finess
	})
	return establishmentsFound
}

export function getEstablishmentWithFinessEJ(finessEJ: string) {
	const establishmentsFound = establishments.filter((e) => {
		return e.nofinessej === finessEJ
	})
	return establishmentsFound.length ? establishmentsFound[0] : null
}

export function getEstablishmentWithFinessET(finessET: string) {
	const establishmentsFound = establishments.filter((e) => {
		return e.nofinesset === finessET
	})
	return establishmentsFound.length ? establishmentsFound[0] : null
}

export function getEstablishmentWithSiret(siret: string) {
	const establishmentsFound = establishments.filter((e) => {
		return e.siret === siret
	})
	return establishmentsFound.length ? establishmentsFound[0] : null
}
