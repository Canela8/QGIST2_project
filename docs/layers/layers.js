var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_TEC_1 = new ol.format.GeoJSON();
var features_TEC_1 = format_TEC_1.readFeatures(json_TEC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEC_1.addFeatures(features_TEC_1);
var lyr_TEC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEC_1, 
                style: style_TEC_1,
                popuplayertitle: 'TEC',
                interactive: true,
                title: '<img src="styles/legend/TEC_1.png" /> TEC'
            });
var format_EDIFICIOS_2 = new ol.format.GeoJSON();
var features_EDIFICIOS_2 = format_EDIFICIOS_2.readFeatures(json_EDIFICIOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EDIFICIOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDIFICIOS_2.addFeatures(features_EDIFICIOS_2);
var lyr_EDIFICIOS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EDIFICIOS_2, 
                style: style_EDIFICIOS_2,
                popuplayertitle: 'EDIFICIOS',
                interactive: true,
                title: '<img src="styles/legend/EDIFICIOS_2.png" /> EDIFICIOS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_TEC_1.setVisible(true);lyr_EDIFICIOS_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_TEC_1,lyr_EDIFICIOS_2];
lyr_TEC_1.set('fieldAliases', {'TEC': 'TEC', });
lyr_EDIFICIOS_2.set('fieldAliases', {'id': 'id', });
lyr_TEC_1.set('fieldImages', {'TEC': 'TextEdit', });
lyr_EDIFICIOS_2.set('fieldImages', {'id': 'TextEdit', });
lyr_TEC_1.set('fieldLabels', {'TEC': 'no label', });
lyr_EDIFICIOS_2.set('fieldLabels', {'id': 'no label', });
lyr_EDIFICIOS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});