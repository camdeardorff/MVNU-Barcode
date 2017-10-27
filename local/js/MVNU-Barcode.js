'use strict'

var idField = document.getElementById("id-field");
var printDisplay = document.getElementById("print-display");

function generateCode() {
    var id = idField.value;
    JsBarcode("#barcode", id);
}

function printBarcode() {
    PrintElem(printDisplay);
}

function PrintElem(elem) {
    var mywindow = window.open('', 'PRINT', '');

    mywindow.document.write('<html><head><title> Print Barcode </title>');
    mywindow.document.write('</head><body>');
    mywindow.document.write(elem.innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
}