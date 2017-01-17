var viewer = new Cesium.Viewer('cesiumContainer');
var czml = [
  {
    "id" : "document",
    "name" : "fukuchiyama",
    "version" : "1.0"
  }, {
    "id" : "1",
    "name" : "Kさん",
    "description" : "調査エリア学校周辺調査地区堀地区氏名Kさん性別女性居住年数生まれた時から７０?８０年豪雨時の印象成美高校のあたりから雨がすごかった。経験したことがなかったので大変だった。どのように過ごされていたか家にいるしか出来なかった。浸水被害状況一宮神社の石のところまでギリギリ大変だったこと高見の見物",
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
        135.1320894411087,35.28799163469748,30
      ]
    }
  },{
    "id" : "6",
    "name" : "Mさん",
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
        135.1181093768303,35.29390321162933,30
      ]
    }
  },{
    "id" : "7",
    "name" : "Aさん",
    "description" : {
	"text" : "http://nbayashi.github.io/Australia2016/0501/IMG_1919.JPG"
	},
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/a.png",
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
        135.1194179846911,35.29378470577179,30
      ]
    }
  },{
    "id" : "14",
    "name" : "Fさん",
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
///viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));
viewer.dataSources.add(Cesium.KmlDataSource.load('AUS2016.kml'));
viewer.camera.flyTo({   
     destination : Cesium.Cartesian3.fromDegrees(135.825462,-25.086077,8000)});
