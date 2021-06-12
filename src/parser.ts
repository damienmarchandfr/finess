import { readFile, writeFile } from 'fs'

import { promisify } from 'util'
import moment from 'moment'
import { Establishment, Geolocalisation } from './index'
const readfileP = promisify(readFile)
const wrilteFileP = promisify(writeFile)
const separator = 'structureet'
const geoSeparator = 'geolocalisation'

async function parse() {
	await wrilteFileP(__dirname + '/data/data.json', JSON.stringify([]))
	const establishments: Establishment[] = []
	const data = await readfileP(__dirname + '/../data_gouv/data.csv', 'utf8')
	let splited = data.split('\n')
	for (const s of splited) {
		s.trim()
		if (s.startsWith(separator)) {
			const data = s.split(';')
			const establishment: Establishment = {
				nofinesset: data[1].trim(),
				nofinessej: data[2].trim(),
				rs: data[3].trim(),
				rslongue: data[4].trim(),
				complrs: data[5].trim(),
				compldistrib: data[6].trim(),
				numvoie: data[7].trim(),
				typvoie: data[8].trim(),
				voie: data[9].trim(),
				compvoie: data[10].trim(),
				lieuditbp: data[11].trim(),
				commune: data[12].trim(),
				departement: data[13].trim(),
				libdepartement: data[14].trim(),
				ligneacheminement: data[15].trim(),
				telephone: data[16].trim(),
				telecopie: data[17].trim(),
				categetab: data[18].trim(),
				libcategetab: data[19].trim(),
				categagretab: data[20].trim(),
				libcategagretab: data[21].trim(),
				siret: data[22].trim(),
				codeape: data[23].trim(),
				codemft: data[24].trim(),
				libmft: data[25].trim(),
				codesph: data[26].trim(),
				libsph: data[27].trim(),
				dateouv: data[28] ? moment(data[28].trim()).toDate() : null,
				dateautor: data[29] ? moment(data[29].trim()).toDate() : null,
				datemaj: data[30] ? moment(data[30].trim()).toDate() : null,
				numuai: data[31].trim(),
				geolocalisation: null,
			}
			establishments.push(establishment)
		}
	}

	console.log(`Number of establishments : ${establishments.length}`)

	// Geo
	const geos: Geolocalisation[] = []
	splited = data.split('\n')
	for (const s of splited) {
		s.trim()
		if (s.startsWith(geoSeparator)) {
			const data = s.split(';')
			const geo: Geolocalisation = {
				nofinesset: data[1].trim(),
				coordxet: data[2].trim(),
				coordyet: data[3].trim(),
				sourcecoordet: data[4].trim(),
				datemaj: data[5] ? moment(data[5].trim()).toDate() : null,
			}
			geos.push(geo)
		}
	}

	console.log(`Number of geos : ${geos.length}`)

	let i = 0
	for (const geo of geos) {
		// Search establishment with finess
		const index = establishments.findIndex((e) => {
			return e.nofinesset === geo.nofinesset
		})
		if (index !== -1) {
			establishments[index].geolocalisation = geo
		}
		i++
		console.log(`Geo proc ${i}/${geos.length}`)
	}

	return establishments
}

parse()
	.then(async (e) => {
		await wrilteFileP(__dirname + '/data/data.json', JSON.stringify(e))
		console.log('Script finished')
	})
	.catch((err) => {
		console.error(err)
	})
