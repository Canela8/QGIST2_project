var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_MT1_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MT1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MT1_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10845740.677283, 2336605.680642, -10844682.677283, 2337096.680642]
        })
    });
var format_TEC_2 = new ol.format.GeoJSON();
var features_TEC_2 = format_TEC_2.readFeatures(json_TEC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEC_2.addFeatures(features_TEC_2);
var lyr_TEC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEC_2, 
                style: style_TEC_2,
                popuplayertitle: 'TEC',
                interactive: true,
                title: '<img src="styles/legend/TEC_2.png" /> TEC'
            });
var format_EDIFICIOS_3 = new ol.format.GeoJSON();
var features_EDIFICIOS_3 = format_EDIFICIOS_3.readFeatures(json_EDIFICIOS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EDIFICIOS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDIFICIOS_3.addFeatures(features_EDIFICIOS_3);
var lyr_EDIFICIOS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EDIFICIOS_3, 
                style: style_EDIFICIOS_3,
                popuplayertitle: 'EDIFICIOS',
                interactive: true,
                title: '<img src="styles/legend/EDIFICIOS_3.png" /> EDIFICIOS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_MT1_1.setVisible(true);lyr_TEC_2.setVisible(true);lyr_EDIFICIOS_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MT1_1,lyr_TEC_2,lyr_EDIFICIOS_3];
lyr_TEC_2.set('fieldAliases', {'TEC': 'TEC', });
lyr_EDIFICIOS_3.set('fieldAliases', {'id': 'id', });
lyr_TEC_2.set('fieldImages', {'TEC': 'TextEdit', });
lyr_EDIFICIOS_3.set('fieldImages', {'id': 'TextEdit', });
lyr_TEC_2.set('fieldLabels', {'TEC': 'no label', });
lyr_EDIFICIOS_3.set('fieldLabels', {'id': 'no label', });
lyr_EDIFICIOS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});