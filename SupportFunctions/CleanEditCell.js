function CleanEditCell(location, Side) {
    let dashBoardSpreadSheet = SpreadsheetApp.getActive().getSheetByName(location);
    let dashboardObject = dashBoardSpreadSheet.getSheetValues(1, 1, 100, 100);
    if (Side.toLowerCase() === 'left') {
        dashBoardSpreadSheet.getRange(2, 3).setValue('');
    }
    if (Side.toLowerCase() === 'right') {
        dashBoardSpreadSheet.getRange(2, 9).setValue('');
    }
}
