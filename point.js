var viewer = new Cesium.Viewer('cesiumContainer');
var czml = [
  {
    "id" : "8",
    "name" : "T‚³‚ñ",
    "description" : "test",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/t.png",
      "scale" : 0.2
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.1171880924785,35.29568045589838,30
      ]
    }
  },{
    "id" : "9",
    "name" : "‰wˆõ‚³‚ñ",
    "description" : "test",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.2
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.118431462511,35.29605795858646,30
      ]
    }
  },{
    "id" : "14",
    "name" : "F‚³‚ñ",
    "description" : "test",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.2
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.111561,35.310111,30
      ]
    }
  }
];
viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));
viewer.dataSources.add(Cesium.KmlDataSource.load('http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/water_area.kml'));
viewer.camera.flyTo({   
     destination : Cesium.Cartesian3.fromDegrees(135.1320894411087,35.28799163469748,8000)});