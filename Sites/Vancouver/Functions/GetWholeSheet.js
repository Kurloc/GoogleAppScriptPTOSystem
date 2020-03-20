function getDataVancouver() {
    return SpreadsheetApp.getActive().getSheetByName("Vancouver").getDataRange().getValues();
}
