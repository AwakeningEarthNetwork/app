module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		jshint:{
			all:[
				'appp-plugins/appp.js',
				'appp-plugins/appcontacts/appp-contacts.js',
				'appp-plugins/appcontacts/appp-find-contacts.js',
				'appp-plugins/appcamera/appcamera.js',
				'appp-plugins/appwoo/appp-woo.js',
				'appp-plugins/appbuddy/appp-buddy.js',
				'appp-plugins/appfbconnect/appfbconnect.js',
				'appp-plugins/appfbconnect/openfb.js',
				'appp-plugins/appgeo/appp-geolocations.js',
				'appp-plugins/appshare/appshare.js',
				'appp-plugins/filesystem/file-download.js',
				// 'appp-plugins/native-transitions/appp-transitions.js',
				'appp-plugins/apppush/appp-push-init.js',
				'appp-plugins/remote_pg_loaded.js',
				'offline/offline.js',
				'init.js'
				]
		},
		concat: {
			dist: {
			  src: [
			  	'appp-plugins/appp.js',
				'appp-plugins/appcontacts/appp-contacts.js',
				'appp-plugins/appcontacts/appp-find-contacts.js',
				'appp-plugins/appcamera/appcamera.js',
				'appp-plugins/appwoo/appp-woo.js',
				'appp-plugins/appbuddy/appp-buddy.js',
				'appp-plugins/appfbconnect/appfbconnect.js',
				'appp-plugins/appfbconnect/openfb.js',
				'appp-plugins/appgeo/appp-geolocations.js',
				'appp-plugins/appshare/appshare.js',
				'appp-plugins/filesystem/file-download.js',
				// 'appp-plugins/native-transitions/appp-transitions.js',
				'appp-plugins/apppush/appp-push-init.js',
				'appp-plugins/remote_pg_loaded.js',
			  ],
			  dest: 'appp-plugins/apppresser2-plugins.dev.js',
			},
		},
		strip : {
		  main : {
		    src : 'appp-plugins/apppresser2-plugins.dev.js',
		    dest : 'appp-plugins/apppresser2-plugins.dev.js',
		    options : {
		      nodes : ['console.log']
		    }
		  }
		},
		uglify: {
			dist: {
				options: {
			    	sourceMap: true,
			    	banner: '/*! Compiled <%= grunt.template.today("mm-dd-yyyy") %> */\n'
			    },
				files: {
					'appp-plugins/apppresser2-plugins.js': [
						'appp-plugins/apppresser2-plugins.dev.js'
					]
				}
			}
		},
		shell: {
	        zip: {
	            command: 'zip -r -X ../ap2-pg-files.zip ../ap2-pg-files/ -x "*node_modules*" "*.git*" "*appp-plugins*" "package.json" "gruntfile.js"'
	        },
	        rsync: {
	        	command: './rsync.sh'
	        },
	        copy: {
	        	command: 'cp appp-plugins/apppresser2-plugins.js     ../www/wp-content/plugins/apppresser/js/apppresser2-plugins.js'
	        },
	        map: {
	        	command: 'cp appp-plugins/apppresser2-plugins.js.map     ../www/wp-content/plugins/apppresser/js/apppresser2-plugins.js.map'
	        },
	        dev: {
	        	command: 'cp appp-plugins/apppresser2-plugins.dev.js ../www/wp-content/plugins/apppresser/js/apppresser2-plugins.dev.js'
	        }
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-strip');

	// Default task.
	grunt.registerTask('default', ['concat', 'uglify', 'shell:zip']);
	grunt.registerTask('matt',    ['concat', 'uglify', 'shell:zip', 'shell:copy', 'shell:map', 'shell:dev', 'shell:rsync']);
};