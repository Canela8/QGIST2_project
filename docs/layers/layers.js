var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ITSPR_1 = new ol.layer.Tile({
            'title': 'ITSPR',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: './tiles/ortofoto/{z}/{x}/{y}.png'
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
var format_Edificio1_4 = new ol.format.GeoJSON();
var features_Edificio1_4 = format_Edificio1_4.readFeatures(json_Edificio1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificio1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificio1_4.addFeatures(features_Edificio1_4);
var lyr_Edificio1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificio1_4, 
                style: style_Edificio1_4,
                popuplayertitle: 'Edificio 1',
                interactive: true,
                title: '<img src="styles/legend/Edificio1_4.png" /> Edificio 1'
            });
var format_Edificio2_5 = new ol.format.GeoJSON();
var features_Edificio2_5 = format_Edificio2_5.readFeatures(json_Edificio2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificio2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificio2_5.addFeatures(features_Edificio2_5);
var lyr_Edificio2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificio2_5, 
                style: style_Edificio2_5,
                popuplayertitle: 'Edificio 2',
                interactive: true,
                title: '<img src="styles/legend/Edificio2_5.png" /> Edificio 2'
            });
var format_Edificio3_6 = new ol.format.GeoJSON();
var features_Edificio3_6 = format_Edificio3_6.readFeatures(json_Edificio3_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificio3_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificio3_6.addFeatures(features_Edificio3_6);
var lyr_Edificio3_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificio3_6, 
                style: style_Edificio3_6,
                popuplayertitle: 'Edificio 3',
                interactive: true,
                title: '<img src="styles/legend/Edificio3_6.png" /> Edificio 3'
            });
var format_Edificio4_7 = new ol.format.GeoJSON();
var features_Edificio4_7 = format_Edificio4_7.readFeatures(json_Edificio4_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificio4_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificio4_7.addFeatures(features_Edificio4_7);
var lyr_Edificio4_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificio4_7, 
                style: style_Edificio4_7,
                popuplayertitle: 'Edificio 4',
                interactive: true,
                title: '<img src="styles/legend/Edificio4_7.png" /> Edificio 4'
            });
var format_Edificio5_8 = new ol.format.GeoJSON();
var features_Edificio5_8 = format_Edificio5_8.readFeatures(json_Edificio5_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificio5_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificio5_8.addFeatures(features_Edificio5_8);
var lyr_Edificio5_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificio5_8, 
                style: style_Edificio5_8,
                popuplayertitle: 'Edificio 5',
                interactive: true,
                title: '<img src="styles/legend/Edificio5_8.png" /> Edificio 5'
            });
var format_Edificio6_9 = new ol.format.GeoJSON();
var features_Edificio6_9 = format_Edificio6_9.readFeatures(json_Edificio6_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificio6_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificio6_9.addFeatures(features_Edificio6_9);
var lyr_Edificio6_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificio6_9, 
                style: style_Edificio6_9,
                popuplayertitle: 'Edificio 6',
                interactive: true,
                title: '<img src="styles/legend/Edificio6_9.png" /> Edificio 6'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ITSPR_1.setVisible(true);lyr_TEC_2.setVisible(true);lyr_EDIFICIOS_3.setVisible(true);lyr_Edificio1_4.setVisible(true);lyr_Edificio2_5.setVisible(true);lyr_Edificio3_6.setVisible(true);lyr_Edificio4_7.setVisible(true);lyr_Edificio5_8.setVisible(true);lyr_Edificio6_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ITSPR_1,lyr_TEC_2,lyr_EDIFICIOS_3,lyr_Edificio1_4,lyr_Edificio2_5,lyr_Edificio3_6,lyr_Edificio4_7,lyr_Edificio5_8,lyr_Edificio6_9];
lyr_TEC_2.set('fieldAliases', {'TEC': 'TEC', });
lyr_EDIFICIOS_3.set('fieldAliases', {'id': 'id', });
lyr_Edificio1_4.set('fieldAliases', {'id': 'id', });
lyr_Edificio2_5.set('fieldAliases', {'id': 'id', });
lyr_Edificio3_6.set('fieldAliases', {'id': 'id', });
lyr_Edificio4_7.set('fieldAliases', {'id': 'id', });
lyr_Edificio5_8.set('fieldAliases', {'id': 'id', });
lyr_Edificio6_9.set('fieldAliases', {'id': 'id', });
lyr_TEC_2.set('fieldImages', {'TEC': 'TextEdit', });
lyr_EDIFICIOS_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Edificio1_4.set('fieldImages', {'id': '', });
lyr_Edificio2_5.set('fieldImages', {'id': '', });
lyr_Edificio3_6.set('fieldImages', {'id': '', });
lyr_Edificio4_7.set('fieldImages', {'id': '', });
lyr_Edificio5_8.set('fieldImages', {'id': '', });
lyr_Edificio6_9.set('fieldImages', {'id': '', });
lyr_TEC_2.set('fieldLabels', {'TEC': 'no label', });
lyr_EDIFICIOS_3.set('fieldLabels', {'id': 'no label', });
lyr_Edificio1_4.set('fieldLabels', {'id': 'no label', });
lyr_Edificio2_5.set('fieldLabels', {'id': 'no label', });
lyr_Edificio3_6.set('fieldLabels', {'id': 'no label', });
lyr_Edificio4_7.set('fieldLabels', {'id': 'no label', });
lyr_Edificio5_8.set('fieldLabels', {'id': 'no label', });
lyr_Edificio6_9.set('fieldLabels', {'id': 'no label', });
lyr_Edificio6_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});