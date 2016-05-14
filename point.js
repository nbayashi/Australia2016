var viewer = new Cesium.Viewer('cesiumContainer');
var czml = [
  {
    "id" : "document",
    "name" : "fukuchiyama",
    "version" : "1.0"
  }, {
    "id" : "1",
    "name" : "K‚³‚ñ",
    "description" : "’²¸ƒGƒŠƒAŠwZü•Ó’²¸’n‹æ–x’n‹æ–¼K‚³‚ñ«•Ê—«‹Z”N”¶‚Ü‚ê‚½‚©‚ç‚V‚O?‚W‚O”N‹‰J‚ÌˆóÛ¬”ü‚Z‚Ì‚ ‚½‚è‚©‚ç‰J‚ª‚·‚²‚©‚Á‚½BŒoŒ±‚µ‚½‚±‚Æ‚ª‚È‚©‚Á‚½‚Ì‚Å‘å•Ï‚¾‚Á‚½B‚Ç‚Ì‚æ‚¤‚É‰ß‚²‚³‚ê‚Ä‚¢‚½‚©‰Æ‚É‚¢‚é‚µ‚©o—ˆ‚È‚©‚Á‚½BZ…”íŠQó‹µˆê‹{_Ğ‚ÌÎ‚Ì‚Æ‚±‚ë‚Ü‚ÅƒMƒŠƒMƒŠ‘å•Ï‚¾‚Á‚½‚±‚Æ‚Œ©‚ÌŒ©•¨",
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
    "name" : "M‚³‚ñ",
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
    "name" : "A‚³‚ñ",
    "description" : '<img
  width="50%"
  style="float:left; margin: 0 1em 1em 0;"
  src="0501/IMG_1919.JPG"/>',
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
viewer.dataSources.add(Cesium.KmlDataSource.load('AUS2016.kml'));
viewer.camera.flyTo({   
     destination : Cesium.Cartesian3.fromDegrees(135.825462,35.086077,8000)});