export default {

    mongo: {
     	default: {
    		port: 27017
    	},
    	development: {
				db: 'charitableentitydev',
				host: 'localhost'
    	},
    	production: {
				db: 'charitableentity',
				host: 'localhost'
    	}
    }

}