var isCameraActive = false;
var isCameraFlashlightInUse = false;
var scanDone;

/**
 * toggleQRCodeScanner() 
 *
 * QR kód beolvasó kamera mód megjelenítéséért és eltüntetéséért felel.
 */
function toggleScannerView() {

    if (!isCameraActive) {
        QRScanner.scan(displayContents);
        QRScanner.show(function(status) {
            console.log(status);
        });

        $(".app").css("display", "none");
        $(".camera").css("display", "table");

        isCameraActive = true;
    } else {

        QRScanner.destroy(function(status) {
            console.log(status);
        });

        $(".app").css("display", "block");
        $(".camera").css("display", "none");

        isCameraActive = false;
    }
}


/**
 * displayContents() 
 *
 * A beolvasott kĂłd tartalmát jelení­ti meg
 * ( cordova-plugin-qrscanner )
 */
function displayContents(err, text) {
    if (err) {} else {
        scanDone = text;
        alert(scanDone);

        if(isCameraFlashlightInUse) {
            toggleCameraFlashlight();
        }

        QRScanner.destroy(function(status) {
            console.log(status);
        });

        $(".app").css("display", "block");
        $(".camera").css("display", "none");

        isCameraActive = false;
    }
}



/**
 * toggleCameraFlashlight() 
 *
 * Kamera vaku be/kikepcsolása
 */
function toggleCameraFlashlight() {

    if (!isCameraFlashlightInUse) {

        QRScanner.enableLight(function(err, status) {
            err && console.error(err);
            console.log(status);
        });

        isCameraFlashlightInUse = true;
    } else {

        QRScanner.disableLight(function(err, status) {
            err && console.error(err);
            console.log(status);
        });

        isCameraFlashlightInUse = false;
    }
}