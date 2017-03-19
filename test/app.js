'use strict';
var path = require( 'path' );
var assert = require( 'yeoman-assert' );
var helpers = require( 'yeoman-test' );

describe( 'generator-appveyor:app', function() {
	it( 'creates files', function() {
		return helpers.run( path.join( __dirname, '../generators/app' ) )
			.then( () => {
				assert.file( [
					'appveyor.yml'
				] );
			} );
	} );

	it( 'customizes file name if provided', function() {
		return helpers.run( path.join( __dirname, '../generators/app' ) )
			.withOptions( {
				appveyorName: '.appveyor.yml'
			} )
			.then( () => {
				assert.noFile( [ 'appveyor.yml' ] );
				assert.file( [ '.appveyor.yml' ] );
			} );
	} );
} );