var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_POLYGONEADMINISTRASI_1 = new ol.format.GeoJSON();
var features_POLYGONEADMINISTRASI_1 = format_POLYGONEADMINISTRASI_1.readFeatures(json_POLYGONEADMINISTRASI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLYGONEADMINISTRASI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLYGONEADMINISTRASI_1.addFeatures(features_POLYGONEADMINISTRASI_1);
var lyr_POLYGONEADMINISTRASI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLYGONEADMINISTRASI_1, 
                style: style_POLYGONEADMINISTRASI_1,
                popuplayertitle: 'POLYGONE ADMINISTRASI',
                interactive: true,
    title: 'POLYGONE ADMINISTRASI<br />\
    <img src="styles/legend/POLYGONEADMINISTRASI_1_0.png" /> Kec. Bandar Laksamana<br />\
    <img src="styles/legend/POLYGONEADMINISTRASI_1_1.png" /> Kec. Bantan<br />\
    <img src="styles/legend/POLYGONEADMINISTRASI_1_2.png" /> Kec. Bathin Solapan<br />\
    <img src="styles/legend/POLYGONEADMINISTRASI_1_3.png" /> Kec. Bengkalis<br />\
    <img src="styles/legend/POLYGONEADMINISTRASI_1_4.png" /> Kec. Bukit Batu<br />\
    <img src="styles/legend/POLYGONEADMINISTRASI_1_5.png" /> Kec. Mandau<br />\
    <img src="styles/legend/POLYGONEADMINISTRASI_1_6.png" /> Kec. Pinggir<br />\
    <img src="styles/legend/POLYGONEADMINISTRASI_1_7.png" /> Kec. Rupat<br />\
    <img src="styles/legend/POLYGONEADMINISTRASI_1_8.png" /> Kec. Rupat Utara<br />\
    <img src="styles/legend/POLYGONEADMINISTRASI_1_9.png" /> Kec. Siak Kecil<br />\
    <img src="styles/legend/POLYGONEADMINISTRASI_1_10.png" /> Kec. Talang Muandau<br />' });
var format_PERAIRAN_2 = new ol.format.GeoJSON();
var features_PERAIRAN_2 = format_PERAIRAN_2.readFeatures(json_PERAIRAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERAIRAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERAIRAN_2.addFeatures(features_PERAIRAN_2);
var lyr_PERAIRAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERAIRAN_2, 
                style: style_PERAIRAN_2,
                popuplayertitle: 'PERAIRAN',
                interactive: true,
                title: '<img src="styles/legend/PERAIRAN_2.png" /> PERAIRAN'
            });
var format_SUNGAIWSBUKITBATU_3 = new ol.format.GeoJSON();
var features_SUNGAIWSBUKITBATU_3 = format_SUNGAIWSBUKITBATU_3.readFeatures(json_SUNGAIWSBUKITBATU_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAIWSBUKITBATU_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAIWSBUKITBATU_3.addFeatures(features_SUNGAIWSBUKITBATU_3);
var lyr_SUNGAIWSBUKITBATU_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAIWSBUKITBATU_3, 
                style: style_SUNGAIWSBUKITBATU_3,
                popuplayertitle: 'SUNGAI WS BUKIT BATU',
                interactive: true,
                title: '<img src="styles/legend/SUNGAIWSBUKITBATU_3.png" /> SUNGAI WS BUKIT BATU'
            });
var format_JARINGANJALAN_4 = new ol.format.GeoJSON();
var features_JARINGANJALAN_4 = format_JARINGANJALAN_4.readFeatures(json_JARINGANJALAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JARINGANJALAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARINGANJALAN_4.addFeatures(features_JARINGANJALAN_4);
var lyr_JARINGANJALAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARINGANJALAN_4, 
                style: style_JARINGANJALAN_4,
                popuplayertitle: 'JARINGAN JALAN',
                interactive: true,
    title: 'JARINGAN JALAN<br />\
    <img src="styles/legend/JARINGANJALAN_4_0.png" /> JALAN KABUPATEN<br />' });
var format_GARISADMINISTRASI_5 = new ol.format.GeoJSON();
var features_GARISADMINISTRASI_5 = format_GARISADMINISTRASI_5.readFeatures(json_GARISADMINISTRASI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARISADMINISTRASI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GARISADMINISTRASI_5.addFeatures(features_GARISADMINISTRASI_5);
var lyr_GARISADMINISTRASI_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GARISADMINISTRASI_5, 
                style: style_GARISADMINISTRASI_5,
                popuplayertitle: 'GARIS ADMINISTRASI',
                interactive: true,
                title: '<img src="styles/legend/GARISADMINISTRASI_5.png" /> GARIS ADMINISTRASI'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_POLYGONEADMINISTRASI_1.setVisible(true);lyr_PERAIRAN_2.setVisible(true);lyr_SUNGAIWSBUKITBATU_3.setVisible(true);lyr_JARINGANJALAN_4.setVisible(true);lyr_GARISADMINISTRASI_5.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_POLYGONEADMINISTRASI_1,lyr_PERAIRAN_2,lyr_SUNGAIWSBUKITBATU_3,lyr_JARINGANJALAN_4,lyr_GARISADMINISTRASI_5];
lyr_POLYGONEADMINISTRASI_1.set('fieldAliases', {'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'SUMBER': 'SUMBER', 'luas': 'luas', });
lyr_PERAIRAN_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_Sal_S': 'Nama_Sal_S', 'Jenis_Sung': 'Jenis_Sung', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Shape_Leng': 'Shape_Leng', 'SUMBER': 'SUMBER', 'ORDE': 'ORDE', 'Muara': 'Muara', 'Kode': 'Kode', 'Tim_Survey': 'Tim_Survey', 'Keterangan': 'Keterangan', 'Lebar': 'Lebar', 'Panjang': 'Panjang', 'Struktur': 'Struktur', 'Kondisi': 'Kondisi', 'Nama_Sal': 'Nama_Sal', 'Panjang_m': 'Panjang_m', 'Lebar_m': 'Lebar_m', 'Nama_Salur': 'Nama_Salur', 'Ket': 'Ket', 'Shape_Le_1': 'Shape_Le_1', });
lyr_SUNGAIWSBUKITBATU_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'DMAX': 'DMAX', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'NAMWS': 'NAMWS', 'STATUS': 'STATUS', 'UKRSGI': 'UKRSGI', 'WMAX': 'WMAX', 'DBTMXS': 'DBTMXS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', 'Keterangan': 'Keterangan', 'ORDE': 'ORDE', 'panjang': 'panjang', });
lyr_JARINGANJALAN_4.set('fieldAliases', {'Kl_Dat_Das': 'Kl_Dat_Das', 'Nm_Ruas': 'Nm_Ruas', 'Thn_Data': 'Thn_Data', 'Status': 'Status', 'Fungsi': 'Fungsi', 'Mendukung': 'Mendukung', 'Ura_Dukung': 'Ura_Dukung', 'Kd_Bd_PU': 'Kd_Bd_PU', 'Kd_Jns_Inf': 'Kd_Jns_Inf', 'Kd_Inf': 'Kd_Inf', 'Propinsi': 'Propinsi', 'Kab_Kot': 'Kab_Kot', 'Kecamatan': 'Kecamatan', 'Desa_Kel': 'Desa_Kel', 'Tk_Ruas_Aw': 'Tk_Ruas_Aw', 'Tk_Ruas_Ak': 'Tk_Ruas_Ak', 'Kd_Patok': 'Kd_Patok', 'Km_Awal': 'Km_Awal', 'Km_Akhir': 'Km_Akhir', 'Nm_Lintas': 'Nm_Lintas', 'Kon_Baik': 'Kon_Baik', 'Kon_Sdg': 'Kon_Sdg', 'Kon_Rgn': 'Kon_Rgn', 'Kon_Rusak': 'Kon_Rusak', 'Kon_Mntp': 'Kon_Mntp', 'Kon_T_Mntp': 'Kon_T_Mntp', 'Panjang': 'Panjang', 'Lbr_Keras': 'Lbr_Keras', 'LHRT': 'LHRT', 'VCR': 'VCR', 'Tipe_Jln': 'Tipe_Jln', 'MST': 'MST', 'Tipe_Keras': 'Tipe_Keras', 'Tanah_Kri': 'Tanah_Kri', 'Macadam': 'Macadam', 'Aspal': 'Aspal', 'Rigid': 'Rigid', 'Thn_Pen_Ak': 'Thn_Pen_Ak', 'Jns_Pen': 'Jns_Pen', 'Koord_X_Aw': 'Koord_X_Aw', 'Koord_Y_Aw': 'Koord_Y_Aw', 'Koord_X_Ak': 'Koord_X_Ak', 'Koord_Y_Ak': 'Koord_Y_Ak', 'REMARK': 'REMARK', 'No': 'No', });
lyr_GARISADMINISTRASI_5.set('fieldAliases', {'JENIS': 'JENIS', 'Status': 'Status', 'SUMBER': 'SUMBER', });
lyr_POLYGONEADMINISTRASI_1.set('fieldImages', {'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'SUMBER': 'TextEdit', 'luas': 'TextEdit', });
lyr_PERAIRAN_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Nama_Sal_S': 'TextEdit', 'Jenis_Sung': 'TextEdit', 'Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Shape_Leng': 'TextEdit', 'SUMBER': 'TextEdit', 'ORDE': 'TextEdit', 'Muara': 'TextEdit', 'Kode': 'TextEdit', 'Tim_Survey': 'TextEdit', 'Keterangan': 'TextEdit', 'Lebar': 'TextEdit', 'Panjang': 'TextEdit', 'Struktur': 'TextEdit', 'Kondisi': 'TextEdit', 'Nama_Sal': 'TextEdit', 'Panjang_m': 'TextEdit', 'Lebar_m': 'TextEdit', 'Nama_Salur': 'TextEdit', 'Ket': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_SUNGAIWSBUKITBATU_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADATGL': 'TextEdit', 'DMAX': 'TextEdit', 'FNGAIR': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'LTKSGI': 'TextEdit', 'NAMWS': 'TextEdit', 'STATUS': 'TextEdit', 'UKRSGI': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMXS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Keterangan': 'TextEdit', 'ORDE': 'TextEdit', 'panjang': 'Range', });
lyr_JARINGANJALAN_4.set('fieldImages', {'Kl_Dat_Das': 'TextEdit', 'Nm_Ruas': 'TextEdit', 'Thn_Data': 'TextEdit', 'Status': 'TextEdit', 'Fungsi': 'TextEdit', 'Mendukung': 'TextEdit', 'Ura_Dukung': 'TextEdit', 'Kd_Bd_PU': 'TextEdit', 'Kd_Jns_Inf': 'TextEdit', 'Kd_Inf': 'TextEdit', 'Propinsi': 'TextEdit', 'Kab_Kot': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa_Kel': 'TextEdit', 'Tk_Ruas_Aw': 'TextEdit', 'Tk_Ruas_Ak': 'TextEdit', 'Kd_Patok': 'TextEdit', 'Km_Awal': 'TextEdit', 'Km_Akhir': 'TextEdit', 'Nm_Lintas': 'TextEdit', 'Kon_Baik': 'TextEdit', 'Kon_Sdg': 'TextEdit', 'Kon_Rgn': 'TextEdit', 'Kon_Rusak': 'TextEdit', 'Kon_Mntp': 'TextEdit', 'Kon_T_Mntp': 'TextEdit', 'Panjang': 'TextEdit', 'Lbr_Keras': 'TextEdit', 'LHRT': 'TextEdit', 'VCR': 'TextEdit', 'Tipe_Jln': 'TextEdit', 'MST': 'TextEdit', 'Tipe_Keras': 'TextEdit', 'Tanah_Kri': 'TextEdit', 'Macadam': 'TextEdit', 'Aspal': 'TextEdit', 'Rigid': 'TextEdit', 'Thn_Pen_Ak': 'TextEdit', 'Jns_Pen': 'TextEdit', 'Koord_X_Aw': 'TextEdit', 'Koord_Y_Aw': 'TextEdit', 'Koord_X_Ak': 'TextEdit', 'Koord_Y_Ak': 'TextEdit', 'REMARK': 'TextEdit', 'No': 'TextEdit', });
lyr_GARISADMINISTRASI_5.set('fieldImages', {'JENIS': 'TextEdit', 'Status': 'TextEdit', 'SUMBER': 'TextEdit', });
lyr_POLYGONEADMINISTRASI_1.set('fieldLabels', {'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'SUMBER': 'no label', 'luas': 'no label', });
lyr_PERAIRAN_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'Nama_Sal_S': 'no label', 'Jenis_Sung': 'no label', 'Desa': 'no label', 'Kecamatan': 'no label', 'Shape_Leng': 'no label', 'SUMBER': 'no label', 'ORDE': 'no label', 'Muara': 'no label', 'Kode': 'no label', 'Tim_Survey': 'no label', 'Keterangan': 'no label', 'Lebar': 'no label', 'Panjang': 'no label', 'Struktur': 'no label', 'Kondisi': 'no label', 'Nama_Sal': 'no label', 'Panjang_m': 'no label', 'Lebar_m': 'no label', 'Nama_Salur': 'no label', 'Ket': 'no label', 'Shape_Le_1': 'no label', });
lyr_SUNGAIWSBUKITBATU_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADATGL': 'no label', 'DMAX': 'no label', 'FNGAIR': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'LTKSGI': 'no label', 'NAMWS': 'no label', 'STATUS': 'no label', 'UKRSGI': 'no label', 'WMAX': 'no label', 'DBTMXS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', 'Keterangan': 'no label', 'ORDE': 'no label', 'panjang': 'no label', });
lyr_JARINGANJALAN_4.set('fieldLabels', {'Kl_Dat_Das': 'no label', 'Nm_Ruas': 'no label', 'Thn_Data': 'no label', 'Status': 'no label', 'Fungsi': 'no label', 'Mendukung': 'no label', 'Ura_Dukung': 'no label', 'Kd_Bd_PU': 'no label', 'Kd_Jns_Inf': 'no label', 'Kd_Inf': 'no label', 'Propinsi': 'no label', 'Kab_Kot': 'no label', 'Kecamatan': 'no label', 'Desa_Kel': 'no label', 'Tk_Ruas_Aw': 'no label', 'Tk_Ruas_Ak': 'no label', 'Kd_Patok': 'no label', 'Km_Awal': 'no label', 'Km_Akhir': 'no label', 'Nm_Lintas': 'no label', 'Kon_Baik': 'no label', 'Kon_Sdg': 'no label', 'Kon_Rgn': 'no label', 'Kon_Rusak': 'no label', 'Kon_Mntp': 'no label', 'Kon_T_Mntp': 'no label', 'Panjang': 'no label', 'Lbr_Keras': 'no label', 'LHRT': 'no label', 'VCR': 'no label', 'Tipe_Jln': 'no label', 'MST': 'no label', 'Tipe_Keras': 'no label', 'Tanah_Kri': 'no label', 'Macadam': 'no label', 'Aspal': 'no label', 'Rigid': 'no label', 'Thn_Pen_Ak': 'no label', 'Jns_Pen': 'no label', 'Koord_X_Aw': 'no label', 'Koord_Y_Aw': 'no label', 'Koord_X_Ak': 'no label', 'Koord_Y_Ak': 'no label', 'REMARK': 'no label', 'No': 'no label', });
lyr_GARISADMINISTRASI_5.set('fieldLabels', {'JENIS': 'no label', 'Status': 'no label', 'SUMBER': 'no label', });
lyr_GARISADMINISTRASI_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});