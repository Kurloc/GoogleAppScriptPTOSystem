function getDataBend() {
    return SpreadsheetApp.getActive().getSheetByName("Bend").getDataRange().getValues();
}
