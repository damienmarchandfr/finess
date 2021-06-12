![data.gouv.fr logo](https://static.data.gouv.fr/_themes/gouvfr/img/logo-header.svg)

# FINESS

**Dernière MAJ du jeu de données : 14/05/2021**
Jeu de données : [voir](https://www.data.gouv.fr/fr/datasets/finess-extraction-du-fichier-des-etablissements/#_)

> Ce jeu de données provient d'un service public certifié
> 
> Liste des établissements du domaine sanitaire et social.
> 
> Informations sur la Géo-localisation : Le système d’information source
> contenant les coordonnées géographiques permettant de géo-localiser
> les établissements   répertoriés dans FINESS est le produit BD-ADRESSE
> en version 2.1 de l’IGN (Institut Géographique National).

##  Installation

    npm install finess

or

    yarn install finess

##  How to use

You can see examples in "examples' folder.

###  How to use in TypeScript

    import { getAllEstablishments,getEstablishmentsWithFiness,getEstablishmentWithFinessEJ,
    getEstablishmentWithFinessET} from  'finess'
    
	const  all = getAllEstablishments()
	console.log(all)

    const  establishments = getEstablishmentsWithFiness('010003820')
    console.log(establishments)
    
    let  establishment = getEstablishmentWithFinessET('010003820')
    console.log(establishment)
    
    establishment = getEstablishmentWithFinessEJ('010003812')
    console.log(establishment)


###  How to use in JavaScript

    const  finess = require('finess')
    
    const  all = finess.getAllEstablishments()
	console.log(all)
    
    const  establishments = finess.getEstablishmentsWithFiness('010003820')
    console.log(establishments)
    
    let  establishment = finess.getEstablishmentWithFinessET('010003820')
    console.log(establishment)
    
    establishment = finess.getEstablishmentWithFinessEJ('010003812')
    console.log(establishment)

### Data


    interface  Establishment {
	    nofinesset: string  // Numéro FINESS ET
	    nofinessej: string  // Numéro FINESS EJ
	    rs: string  // Raison sociale
	    rslongue: string  // Raison sociale longue
	    complrs: string  // Complément de raison sociale
	    compldistrib: string  // Complément de distribution
	    numvoie: string  // Numéro de voie
	    typvoie: string  // Type de voie
	    voie: string  // Libellé de voie
	    compvoie: string  // Complément de voie
	    lieuditbp: string  // Lieu-dit / BP
	    commune: string  // Code Commune
	    departement: string  // Département
	    libdepartement: string  // Libellé département
	    ligneacheminement: string  // Ligne d’acheminement (CodePostal+Lib commune)
	    telephone: string  // Téléphone
	    telecopie: string  // Télécopie
	    categetab: string  // Catégorie d’établissement
	    libcategetab: string  // Libelle catégorie d’établissement
	    categagretab: string  // Catégorie d’agrégat d’établissement
	    libcategagretab: string  // Libellé catégorie d’agrégat d’établissement
	    siret: string  // Numéro de SIRET
	    codeape: string  // Code APE,
	    codemft: string  // Code MFT
	    libmft: string  // Libelle MFT
	    codesph: string  // Code SPH
	    libsph: string  // Libelle SPH
	    dateouv: Date | null  // Date d’ouverture
		dateautor: Date | null  // Date d’autorisation
	    datemaj: Date | null  // Date de mise à jour sur la structure
	    numuai: string  // Numéro éducation nationale
	    geolocalisation: Geolocalisation | null
    }
    
    interface  Geolocalisation {
	    nofinesset: string  // Numéro FINESS ET
	    coordxet: string  // Coordonnées X
	    coordyet: string  // Coordonnées Y
	    sourcecoordet: string  // Source des coordonnées
	    datemaj: Date | null  // Date de mise à jour des coordonnées
    }
