"use strict";

//App :: Oldalak elérési mappája
var root = "pages/";

//App :: Oldalak tulajdonságai (props)
var PAGES = {
  home: {
    title: 'Ajánlások',
    slug: 'home',
    path: root + 'home.html'
  },

  favourites: {
    title: 'Kedvencek',
    slug: 'favourites',
    path: root + 'favourites.html'
  },

  blank: {
    title: 'Üres oldal',
    slug: 'blank',
    path: root + 'blank.html'
  },

  food: {
    title: 'Étel',
    slug: 'food',
    path: root + 'food.html'
  },

  login: {
    title: 'Bejelentkezés',
    slug: 'login',
    path: root + 'login.html'
  },

  register: {
    title: 'Regisztráció',
    slug: 'register',
    path: root + 'register.html'
  },

  tutorial: {
    title: 'Ismertető',
    slug: 'tutorial',
    path: root + 'tutorial.html'
  },

  userpage: {
    title: 'Profilom',
    slug: 'userpage',
    path: root + 'userpage.html'
  }
};

var isRegistered = false;
var isLoggedIn = false;

function getFood(param1) {
  var param2 = "A Lorem Ipsum egy egyszerû szövegrészlete, szövegutánzata a betûszedõ és nyomdaiparnak. A Lorem Ipsum az 1500-as évek óta standard szövegrészletként szolgált az iparban; mikor egy ismeretlen nyomdász összeállította a betûkészletét és egy példa-könyvet vagy szöveget nyomott papírra, ezt használta. Nem csak 5 évszázadot élt túl, de az elektronikus betûkészleteknél is változatlanul megmaradt. Az 1960-as években népszerûsítették a Lorem Ipsum részleteket magukbafoglaló Letraset lapokkal, és legutóbb softwarekkel mint például az Aldus Pagemaker.";
  var param3 = "https://images.tienda.com/is/image/LaTienda/mixed-seafood-paella?&wid=1087";
  Navigator.pushPage(PAGES.food.path, { data: { title: param1, details: param2, img: param3 } });
}

//App :: Konstruktor
var app = {
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function () {
    this.receivedEvent('deviceready');

    document.querySelector("#openCameraButton").addEventListener('click', toggleScannerView);
    document.querySelector("#closeCameraButton").addEventListener('click', toggleScannerView);
  
    document.querySelector("#openFavourites").addEventListener('click', function () { 
      Navigator.bringPageTop(PAGES.favourites.path);
    });
  
    document.querySelector("#profileButton").addEventListener('click', function () { 
      Navigator.bringPageTop(PAGES.login.path);
    });
  },

  receivedEvent: function (id) {
    var parentElement = document.getElementById(id);
    console.log('Received Event: ' + id);
  }
};

app.initialize();