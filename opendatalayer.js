var OpenDataLayer = {
	
	/* Contains the version of the implementation (not OpenDataLayer) */
	version: '1.2.3-b4',
	
	/* Contains the OpenDataLayer definition number. Is equal to the tag of this file in Github */
	definition: '1.0',
	
	/* Contains the date of the last modification */
	date: new Date( '2017-04-01T18:23:11.671Z' ),
	
	/* Used to identify the type of event that is needed, typical examples are pageview, event, impression or transaction */
	type: 'event',
	
	/* Table page; Holds page information */
	page: {
		
		/**
		 * 
		 * Table page columns
		 * 
		 * @description: Holds page all the columns in the page table . All information has to do with the current page a visitor is viewing.
		 * 
		 */
		
		/**
		 * 
		 * Column: name
		 * 
		 * @description: Contains the hierarchy and page name, like this: [ string level1, string level2, string etc., string pagename ]
		 * @type: Array
		 * 
		 */
		name: ['main category', 'sub category', 'page name' ],

		/**
		 * 
		 * Column: id
		 * 
		 * @description: Only used if the the same page can have more than 1 name or ID, e.g. to find it back easily in the CMS.
		 * @type: String
		 * 
		 */
		id: 'ABC12345',
		
		/**
		 * 
		 * Column: canonicalUrl
		 * 
		 * @description: Contains the canonical URL. Used by search engines to unify different pages to a single one.
		 * @type: String
		 * @convention: Must be a valid URL
		 * 
		 */
		canonicalUrl: 'https://github.com/opendatalayer/vocabulary',

		/**
		 * 
		 * Column: title
		 * 
		 * @description: Usually it is enough to get this information via the JavaScript command: document.title
		 * @type: String
		 * 
		 */
		title: 'Github – opendatalayer/vocabulary',

		/**
		 * 
		 * Column: statusCode
		 * 
		 * @description: Holds the error status code 404, 500 
		 * @type: String
		 * @convention: Use codes from this list: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes. Define your own if you want to use this property for other errors.
		 */
		statusCode: '404',

		/**
		 * 
		 * Column: variant
		 * 
		 * @description: Used to identify test variations of A/B/N or MVT experiments. Usually the following format is used: [experiment name or id]:[variation name or id]
		 * @type: String
		 * 
		 */
		variant: 'b',

		/**
		 * 
		 * Column: value
		 * 
		 * @description: A numeric value assigned to the given page
		 * @type: Float
		 * 
		 */
		value: 1.35,

		/**
		 * 
		 * Column: version
		 * 
		 * @description: Used to identify different page versions, e.g. for location-based content targeting
		 * @type: String
		 * 
		 */
		version: 'v183747',

		/**
		 * 
		 * Column: attributes
		 * 
		 * @description: Attributes that help identify e.g. the different tools, components, widgets, etc. present on a specific page
		 * @type: Array
		 * 
		 */
		attributes: ['invoice-block','login-block','subscription-use'],

		/**
		 * 
		 * Column: author
		 * 
		 * @description: Author of the page; usual with blogsites
		 * @type: String
		 * 
		 */
		author: 'John Doe',
		
		/**
		 * 
		 * Column: publicationDate
		 * 
		 * @description: Contains the publication date of the page.
		 * @type: String
		 * @convention: Must be a valid JavaScript Date
		 * 
		 */		
		publicationDate: new Date('2017-04-17'),
		
		/**
		 * 
		 * Column: [define your own]
		 * 
		 * @description: Add your own items as you see fit for the website you are currently working on.
		 * @type: Mixed (String, Integer, Array, Boolean)
		 * 
		 */
		$_CUSTOM: null
	
	},
	
	/* Table site; Holds site information */
	site: {

		/**
		 * 
		 * Table site columns
		 * 
		 * @description: Holds all the columns in the site table. All information has to do with the curren site a visitor is viewing.
		 * 
		 */
		
		/**
		 * 
		 * Column: account
		 * 
		 * @description: Holds the account of e.g. the web analytics package
		 * @type: String
		 * 
		 */
		account: 'UA-12345678-1',

		/**
		 * 
		 * Column: searchTerm
		 * 
		 * @description: Holds the account of e.g. the web analytics package
		 * @type: String
		 * 
		 */
		searchTerm: 'the meaning of life',

		/**
		 * 
		 * Column: searchCategory
		 * 
		 * @description: Use this to distinguish between different search engines on your website (e.g. faq and products)
		 * @type: String
		 * 
		 */
		searchCategory: 'job search',

		/**
		 * 
		 * Column: searchResults
		 * 
		 * @description: Holds the total amount of search results (each link counts as 1). Use 0 if there are no results.
		 * @type: Integer
		 * 
		 */
		searchResults: 256,
		
		/**
		 * 
		 * Column: searchResultFirst
		 * 
		 * @description: Holds the number of the first result on the page. E.g. if you have 256 search results and each page 
		 *					shows 50 results and the visitor is on page 2 then the number of the first search result is 151.
		 * @type: Integer
		 * 
		 */
		searchResultFirst: 51,
		
		/**
		 * 
		 * Column: searchResultsOnPage
		 * 
		 * @description: Shows the (maximum) number of search results on a search result page
		 * @type: Integer
		 * 
		 */
		searchResultsOnPage: 50,

		/**
		 * 
		 * Column: searchResultsOnPage
		 * 
		 * @description: Holds the user selection of search filters.
		 * @type: Array
		 * 
		 */
		filters: ['mobile phones', 'tablets'],

		/**
		 * 
		 * Column: campaignId
		 * 
		 * @description: The onsite campaign or offsite campaign id. Usually you take this out of the URL.
		 * @type: String
		 * 
		 */
		campaignId: 'homepage-banner',

		/**
		 * 
		 * Column: country
		 * 
		 * @description: Country name. Use countryCode if possible.
		 * @type: String
		 * 
		 */
		country: 'The Netherlands',

		/**
		 * 
		 * Column: countryCode
		 * 
		 * @description: Contains the country code.
		 * @type: String
		 * @convention: Use the Alpha-2 codes on http://en.wikipedia.org/wiki/ISO_3166-1
		 */
		countryCode: 'NL',

		/**
		 * 
		 * Column: language
		 * 
		 * @description: Fill in the language name, but use languageCode if possible
		 * @type: String
		 * @convention: Use the language name from http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		 */
		language: 'Dutch',
		
		/**
		 * 
		 * Column: languageCode
		 * 
		 * @description: Fill in the language code
		 * @type: String
		 * @convention: Use the 2 letter codes from: http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		 */
		languageCode: 'NL',
		
		/**
		 * 
		 * Column: server
		 * 
		 * @description: Contains the name of the server (if you use more than 1 server to host your website)
		 * @type: String
		 */		
		server: 'enterprise-01',
		
		/**
		 * 
		 * Column: environment
		 * 
		 * @description: Contains a unique name for the different environments of the website (e.g. dev, staging, live)
		 * @type: String
		 */
		environment: 'live',
		
		/**
		 * 
		 * Column: id
		 * 
		 * @description: Contains the unique ID for the website. E.g. if your site has different whitelabels. It can als be an ID for a web analytics package
		 * @type: String
		 */
		id: 'mob12345',

		/**
		 * 
		 * Column: name
		 * 
		 * @description: Contains the unique name for the website, if your site has different whitelabels
		 * @type: String
		 */
		name: 'Mobile Phones to Go',

		/* Add your own custom items where the standard doesn't apply and do check them in, if you think it's useful for others as well */
		$_CUSTOM: null
	
	
	},
	
	/* Table event; Holds event information (e.g. play video, outbound link or download) */	

	campaign: {
		
		id: 'srch123456',
		name: 'paidsearch-mobilehandsets-february',
		source: 'Google',
		medium: 'cpc',
		term: 'iPhone 12',
		content: 'smiling-lady',
		/* Add your own custom items where the standard doesn't apply and do check them in, if you think it's useful for others as well */
		$_CUSTOM: null
	
	},

	form: {
		name: 'registration',
		step: 'credentials',
		id: 'frm123425',
		value: 2.35,
		errors: ['invalid username', 'must accept terms & conditions'],
		$_CUSTOM: null
	
	},
		
	user: {
		
		id: '1234ABC',
		idType: 'single-sign-on',
		username: 'john.doe',
		firstname: 'John',
		surname: 'Doe',
		addressLine: '5th Avenue',
		zipCode: '12345',
		city: 'New York',
		country: 'United States',
		countryCode: 'US',
		languageCodes: ['en-US', 'nl-NL'],
		phone: '+1-123-8384757',
		email: 'john.doe@gmail.com',
		loginStatus: 'logged-in',
		type: 'high-value customer',
		existingCustomer: true,
		role: 'administrator',
		roleId: '0',
		group: 'finance',
		groupId: '1234ABC',
		$_CUSTOM: null	
	},
	
	transaction: {
		
		id: '1234ABC',
		store: 'affiliate-store-flashy-items',
		total: 1067.98,
		shipping: 20.50,
		shippingMethod: 'priority mail',
		shippingAddress: '5th Avenue',
		shippingCity: 'New York',
		shippingPostalCode: '123456',
		shippingStateProvince: 'New York',
		shippingCountryCode: 'US',
		shippingCountry: 'United States of America',
		billingAddress: 'The Dam 1',
		billingCity: 'Amsterdam',
		billingPostalCode: '1001AA',
		billingStateProvince: 'Noord-Holland',
		billingCountryCode: 'NL',
		billingCountry: 'The Netherlands',
		currencyCode: 'EUR',
		paymentType: 'credit card',
		promoCode: '123givemefree',
		discount: 22.45,
		type: 'new',
		tax: 6.34,
		$_CUSTOM: null
	
	},
	
	items: []
	
}

//Item row

var item = {

	id: '1241',
	sku: 'UGG-BB-PUR-06',
	name: 'iPhone 12',
	variation: 'Gold plated',
	categories: ['hardware', 'mobile phones', 'iPhones'],
	type: 'accessory',
	price: 199,
	tax: 11.94,
	taxRate: 0.06,
	quantity: 24,
	discount: 2.50,
	brand: 'Apple',
	referral: 'affiliate-partner-number-1',
	size: 'medium',
	color: 'red',
	period: 24,
	granularity: 'months',
	destinationCountryCode: 'US',
	destinationCountry: 'The United States',
	destinationAirportCode: 'JFK',
	destinationAirport: 'John F. Kennedy International Airport',
	destinationAirportCity: 'New York',
	departureDatetime: new Date( '2017-04-01T17:35:00-04:00' ),
	arrivalCountryCode: 'NL',
	arrivalCountry: 'The Netherlands',
	arrivalAirportCode: 'AMS',
	arrivalAirport: 'Schiphol',
	arrivalAirportCity: 'Amsterdam',
	arrivalDatetime: new Date( '2017-04-02T06:55:00+02:00' ),
	$_CUSTOM: null

}

OpenDataLayer.items.push( item );


