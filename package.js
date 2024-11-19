Package.describe({
    name: 'pwix:ui-utils',
    version: '1.2.4',
    summary: 'UI utilities',
    git: 'https://github.com/trychlos/pwix:ui-utils',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'UIU'
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
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
    api.addFiles( 'src/client/constants/colors.less', 'client' );
}
