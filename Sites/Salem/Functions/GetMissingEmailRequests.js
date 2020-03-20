function getSalemPendingEmailRequests() {
    var nameList = {};
    let spreadsheet = SpreadsheetApp.openByUrl("").getSheetByName('Form Responses 1');
    let lastRow = spreadsheet.getLastRow();
    let lastCol = spreadsheet.getLastColumn();
    let spreadsheetObject = spreadsheet.getSheetValues(1, 1, lastRow, lastCol);

    for (let i = 2; i < lastRow; i++) {
        var today = new Date();
        var count = 0;
        var location = String('Salem').toLowerCase();
        for (i = 2; i < lastRow; i++) {
            var searchKey = spreadsheetObject[i][0];
            var FirstName = spreadsheetObject[i][2];
            var LastName = spreadsheetObject[i][3];
            var Location = String(spreadsheetObject[i][4]).toLowerCase();
            var FDO = spreadsheetObject[i][7];
            var LDO = spreadsheetObject[i][8];
            var RDO = spreadsheetObject[i][9];
            var employeeEmail = spreadsheetObject[i][12];
            var supervisorsEmail = spreadsheetObject[i][16];
            if (FDO >= today && location === Location && supervisorsEmail === "") {
                var count = count + 1;
                nameList[count] = {
                    searchKey: searchKey,
                    firstName: FirstName,
                    lastName: LastName,
                    FDO: turnDatetoString(FDO),
                    LDO: turnDatetoString(LDO),
                    RDO: turnDatetoString(RDO),
                    email: employeeEmail,
                    supervisorsEmail: supervisorsEmail
                };
            }
        }
        nameList['count'] = count;
        return nameList
    }
}
