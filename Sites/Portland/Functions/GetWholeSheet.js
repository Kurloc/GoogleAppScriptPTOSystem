function getDataPortland() {
    return SpreadsheetApp.getActive().getSheetByName("Portland").getDataRange().getValues();
}
