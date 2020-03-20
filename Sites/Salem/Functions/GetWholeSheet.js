function getDataSalem() {
    return SpreadsheetApp.getActive().getSheetByName("Salem").getDataRange().getValues();
}
