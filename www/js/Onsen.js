"use strict";

//Onsen UI :: Routing
var Navigator = document.querySelector('#onsNavigator');



//Onsen UI :: Eseményfigyelők (init)
document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id !== PAGES.home.id) {
        $('ons-toolbar .left').html("<ons-back-button></ons-back-button>");
    }

    //Kezdőoldal
    if (page.id === PAGES.home.id) {

    }

    //Kedvencek
    else if (page.id === PAGES.favourites.id) {

    }

    //Üres oldal
    else if (page.id === PAGES.blank.id) {

    }

    //Ismertető oldal
    else if (page.id === PAGES.tutorial.id) {

    }

    //Egy kaja oldala
    else if (page.id === PAGES.food.id) {
        page.querySelector('.title').innerHTML = page.data.title;
        page.querySelector('.cover').src = page.data.img;
        page.querySelector('.details').innerHTML = page.data.details;

    }

    //Bejelentkezési oldal
    else if (page.id === PAGES.login.id) {
        page.querySelector('.text-register').addEventListener('click', function () {
            //register.path kell majd ide
            Navigator.resetToPage(PAGES.home.path);
        });

        page.querySelector('#loginButton').addEventListener('click', function () {
            Navigator.resetToPage(PAGES.userpage.path);
        });
    }

    //Profil
    else if (page.id === PAGES.userpage.id) {
        $('ons-toolbar .left').html("<ons-button id='homeButton' onclick='Navigator.resetToPage(PAGES.home.path);'><ons-icon icon='ion-home'></ons-icon></ons-button>");

        page.querySelector('.text-logout').addEventListener('click', function () {
            Navigator.resetToPage(PAGES.home.path);
        });
    }
});





//Onsen UI :: Eseményfigyelők (show)
document.addEventListener('show', function (event) {
    var page = event.target;

    //Kezdőoldal
    if ((page.id === PAGES.home.id) || (page.id === PAGES.tutorial.id)) {
        $('ons-toolbar .left').empty();

        if (page.id === PAGES.home.id) {
            $('#pageTitle').text(PAGES.home.title);
        }
        else if (page.id === PAGES.tutorial.id) {
            $('#pageTitle').text(PAGES.tutorial.title);
        }
    }

    //Kedvencek
    else if (page.id === PAGES.favourites.id) {
        $('#pageTitle').text(PAGES.favourites.title);
    }

    //Üres oldal
    else if (page.id === PAGES.blank.id) {
        $('#pageTitle').text(PAGES.blank.title);
    }

    //Ismertető oldal
    else if (page.id === PAGES.tutorial.id) {
        $('#pageTitle').text(PAGES.tutorial.title);
    }

    //Egy kaja oldala
    else if (page.id === PAGES.food.id) {
        $('#pageTitle').text(PAGES.food.title);
    }

    //Bejelentkezés
    else if (page.id === PAGES.login.id) {
        $('#pageTitle').text(PAGES.login.title);
        myToast.toggle();
    }

    //Profil
    else if (page.id === PAGES.userpage.id) {
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