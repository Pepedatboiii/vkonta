ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });
    var geolocation = ymaps.geolocation;
 
    geolocation.get({
    
        provider: 'yandex',
        
        mapStateAutoApply: true,
        
        autoReverseGeocode: true
    }).then(function (result) {
 
        
        myMap.geoObjects.add(result.geoObjects);
 
        var address = result.geoObjects.get(0).properties.get('text');
        document.getElementById('address').innerText = address;
 
        
        console.log(result.geoObjects.get(0).properties.get('metaDataProperty'));
 
    });
   
    }

    