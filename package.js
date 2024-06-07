Package.describe({
    name: 'pwix:ui-utils',
    version: '0.9.0-rc',
    summary: 'UI utilities',
    git: 'https://github.com/trychlos/pwix:ui-utils',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'UIUtils'
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
    api.mainModule( 'src/server/js/index.js', 'server' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:ui-utils' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    api.versionsFrom([ '2.9.0', '3.0-rc.0' ]);
    api.use( 'ecmascript' );
    api.use( 'less@4.0.0', 'client' );
    api.use( 'pwix:layout@1.3.1' );
    api.use( 'tmeasday:check-npm-versions@1.0.2 || 2.0.0-beta.0', 'server' );
    api.addAssets([
        'src/client/icons/external-link-black.png',
        'src/client/icons/external-link-blue.png',
        'src/client/icons/external-link-red.png',
        'src/client/icons/external-link-white.png',
        'src/client/icons/external-pdf-black.png',
        'src/client/icons/external-pdf-blue.png',
        'src/client/icons/external-pdf-red.png',
        'src/client/icons/external-pdf-white.png',
        'src/client/icons/external-link-black.svg'
    ],
        'client'
    );
}

// NPM dependencies are checked in /src/server/js/check_npms.js
// See also https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies
