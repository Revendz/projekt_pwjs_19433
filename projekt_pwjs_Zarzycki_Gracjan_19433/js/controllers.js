var portfolioApp = angular.module('portfolioApp',[]);

portfolioApp.controller('GalleryListCtrl', function($scope)
{
    $scope.galleries = 
    [
        { 'title':'1. FabFilter Pro-Q 3',
        'when':'2018',
        'thumbnailUrl':'img/galeria/cla.jpg'
        },
        { 'title':'2. Melda MAutoDynamicEQ',
        'when':'2014',
        'thumbnailUrl':'img/galeria/del.jpg'
        },
        { 'title':'3. Ozone 9 EQ',
        'when':'2019',
        'thumbnailUrl':'img/galeria/dob.jpg'
        },
        { 'title':'4. Soundtheory Gullfoss',
        'when':'2019',
        'thumbnailUrl':'img/galeria/eq.jpg'
        },
        { 'title':'5. Eiosis AirEQ',
        'when':'2014',
        'thumbnailUrl':'img/galeria/rev.jpg'
        },
        { 'title':'6. TDR Nova GE',
        'when':'2015',
        'thumbnailUrl':'img/galeria/ssl.png'
        }
    ];
    $scope.galleries.length;
    $scope.sortList = 
    [
        {
            'label':'Alfabetycznie',
            'value':'title'
        },
        {
            'label':'Chronologicznie',
            'value':'when'
        },
        {
            'label':'Od Najnowszych',
            'value':'-when'
        },
    ];
});