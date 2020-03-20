function PortlandDeleteRequest(key, FirstName, LastName, FDO, LDO, RDO) {
    console.log('-----------------------------');
    console.log(FDO, LDO, RDO);
    var FDODate = turnStringDatetoDateObj(FDO);
    var LDODate = turnStringDatetoDateObj(LDO);
    var RDODate = turnStringDatetoDateObj(RDO);
    console.log(FDODate, LDODate, RDODate);
    var employeeSpreadSheet = SpreadsheetApp.openByUrl("").getSheetByName("Form Responses 1");
    var ESlastRow = employeeSpreadSheet.getLastRow();
    var ESlastCol = employeeSpreadSheet.getLastColumn();

    var spreadsheetObject = employeeSpreadSheet.getSheetValues(1, 1, ESlastRow, ESlastCol);

    var Location = 'Portland';

    var FDODay = getDayFromDatesDayNum(FDODate);
    var LDODay = getDayFromDatesDayNum(LDODate);
    var RDODay = getDayFromDatesDayNum(RDODate);

    var Date1 = parseInt((new Date(new Date(FDODate).getFullYear(), new Date(FDODate).getMonth(), new Date(FDODate).getDate())) / 1000 / 60 / 60 / 24);
    var Date3 = parseInt((new Date(new Date(LDODate).getFullYear(), new Date(LDODate).getMonth(), new Date(LDODate).getDate())) / 1000 / 60 / 60 / 24);
    var Date5 = parseInt((new Date(new Date(RDODate).getFullYear(), new Date(RDODate).getMonth(), new Date(RDODate).getDate())) / 1000 / 60 / 60 / 24);
    //console.log(LastName, FirstName, FDODate, LDODate);
    //var Name = getName(LastName, FirstName);
    //console.log(Name);

    for (i = 2; i < ESlastRow; i++) {
        //console.log(spreadsheetObject[i][1], FirstName);
        if (spreadsheetObject[i][3] === LastName || spreadsheetObject[i][3] === FirstName) {
            let Date2 = parseInt((new Date(new Date(spreadsheetObject[i][7]).getFullYear(), new Date(spreadsheetObject[i][7]).getMonth(), new Date(spreadsheetObject[i][7]).getDate())) / 1000 / 60 / 60 / 24);
            if (Date1 === Date2) {
                let Date4 = parseInt((new Date(new Date(spreadsheetObject[i][8]).getFullYear(), new Date(spreadsheetObject[i][8]).getMonth(), new Date(spreadsheetObject[i][8]).getDate())) / 1000 / 60 / 60 / 24);
                let Date6 = parseInt((new Date(new Date(spreadsheetObject[i][9]).getFullYear(), new Date(spreadsheetObject[i][9]).getMonth(), new Date(spreadsheetObject[i][9]).getDate())) / 1000 / 60 / 60 / 24);
                if (Date3 === Date4) {
                    if (Date5 === Date6) {
                        let ii = i + 1;
                        if (Location === spreadsheetObject[i][4]) {
                            employeeSpreadSheet.deleteRow(i + 1)
                        }
                    }
                }
            }
        }
    }
}
