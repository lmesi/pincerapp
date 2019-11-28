"use strict";

//Onsen UI :: Routing
var Navigator = document.querySelector('#onsNavigator');

//Onsen UI :: Eseményfigyelők az oldalak inicizalizálásakor
document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id !== PAGES.home.slug) {
        $('ons-toolbar .left').html("<ons-back-button></ons-back-button>");
    }

    //Kezdőoldal
    if (page.id === PAGES.home.slug) {

    }

    //Kedvencek
    else if (page.id === PAGES.favourites.slug) {

    }

    //Üres oldal
    else if (page.id === PAGES.blank.slug) {

    }

    //Ismertető oldal
    else if (page.id === PAGES.tutorial.slug) {

    }

    //Egy kaja oldala
    else if (page.id === PAGES.food.slug) {
        page.querySelector('.title').innerHTML = page.data.title;
        page.querySelector('.cover').src = page.data.img;
        page.querySelector('.details').innerHTML = page.data.details;

    }

    //Bejelentkezési oldal
    else if (page.id === PAGES.login.slug) {
        page.querySelector('.text-register').addEventListener('click', function () {
            //register.path kell majd ide
            Navigator.resetToPage(PAGES.home.path);
        });

        page.querySelector('#loginButton').addEventListener('click', function () {
            Navigator.resetToPage(PAGES.userpage.path);
        });
    }

    //Profil
    else if (page.id === PAGES.userpage.slug) {
        $('ons-toolbar .left').html("<ons-button id='homeButton' onclick='Navigator.resetToPage(PAGES.home.path);'><ons-icon icon='ion-home'></ons-icon></ons-button>");

        page.querySelector('.text-logout').addEventListener('click', function () {
            Navigator.resetToPage(PAGES.home.path);
        });
    }
});





//Onsen UI :: Eseményfigyelők az egyes oldalak megjelenítésekor
document.addEventListener('show', function (event) {
    var page = event.target;

    //Kezdőoldal
    if ((page.id === PAGES.home.slug) || (page.id === PAGES.tutorial.slug)) {
        $('ons-toolbar .left').empty();

        if (page.id === PAGES.home.slug) {
            $('#pageTitle').text(PAGES.home.title);
        }
        else if (page.id === PAGES.tutorial.slug) {
            $('#pageTitle').text(PAGES.tutorial.title);
        }
    }

    //Kedvencek
    else if (page.id === PAGES.favourites.slug) {
        $('#pageTitle').text(PAGES.favourites.title);
    }

    //Üres oldal
    else if (page.id === PAGES.blank.slug) {
        $('#pageTitle').text(PAGES.blank.title);
    }

    //Ismertető oldal
    else if (page.id === PAGES.tutorial.slug) {
        $('#pageTitle').text(PAGES.tutorial.title);
    }

    //Egy kaja oldala
    else if (page.id === PAGES.food.slug) {
        $('#pageTitle').text(PAGES.food.title);
    }

    //Bejelentkezés
    else if (page.id === PAGES.login.slug) {
        $('#pageTitle').text(PAGES.login.title);
        myToast.toggle();
    }

    //Profil
    else if (page.id === PAGES.userpage.slug) {
        $('ons-toolbar .left').html("<ons-button id='homeButton' onclick='Navigator.resetToPage(PAGES.home.path);'><ons-icon icon='ion-home'></ons-icon></ons-button>");
        $('#pageTitle').text(PAGES.userpage.title);
    }
});


ons.ready(function () {
    //ons.disableDeviceBackButtonHandler();
    //document.addEventListener('backbutton', function () { ons.notification.alert("asd") }, false);

    ons.setDefaultDeviceBackButtonListener(function (event) {
        ons.notification.confirm('Biztosan be szeretnéd zárni az alkalmazást?', { title: 'Kilépés megerősítése' })
            .then(function (index) {
                if (index === 1) {
                    navigator.app.exitApp();
                }
            });
    });
});