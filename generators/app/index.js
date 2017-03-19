'use strict';

const Generator = require( 'yeoman-generator' );

module.exports = class extends Generator {
	constructor( args, opts ) {
		super( args, opts );

		this.option( 'appveyorName', {
			description: 'File name for AppVeyor config.',
			type: String,
			default: 'appveyor.yml'
		} );
	}

	writing() {
		this.fs.copy(
			this.templatePath( 'appveyor.yml' ),
			this.destinationPath( this.options.appveyorName )
		);
	}

	install() {
		this.installDependencies();
	}
};