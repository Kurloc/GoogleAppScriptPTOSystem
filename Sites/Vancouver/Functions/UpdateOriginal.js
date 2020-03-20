function VancouverUpdateOriginal(newValuesObject, originalValuesObject){
    console.log(newValuesObject, originalValuesObject);
    var employeeSpreadSheet = SpreadsheetApp.openByUrl("").getSheetByName("Form Responses 1");
    var ESlastRow = employeeSpreadSheet.getLastRow();
    var ESlastCol = employeeSpreadSheet.getLastColumn();

    var spreadsheetObject = employeeSpreadSheet.getSheetValues(1, 1, ESlastRow, ESlastCol);

    var Location = 'Vancouver';

    var FDODay = getDayFromDatesDayNum(originalValuesObject['FDO']);
    var LDODay = getDayFromDatesDayNum(originalValuesObject['LDO']);
    var RDODay = getDayFromDatesDayNum(originalValuesObject['RDO']);

    var Date1 = originalValuesObject['FDO'];
    var Date3 = originalValuesObject['LDO'];
    var Date5 = originalValuesObject['RDO'];
    console.log(Date1, Date3, Date5);

    for (i=2; i < ESlastRow; i++) {
        if (spreadsheetObject[i][2] == originalValuesObject['Lname'] | spreadsheetObject[i][2] == originalValuesObject['Fname']) {
            var Date2 = parseInt((new Date(spreadsheetObject[i][7])) / 1000 / 60 / 60 / 24);
            var Date1 = parseInt(cleanUpDateWOW(Date1) / 1000 / 60 / 60 / 24);
            var Date3 = parseInt(cleanUpDateWOW(Date3) / 1000 / 60 / 60 / 24);
            var Date5 = parseInt(cleanUpDateWOW(Date5) / 1000 / 60 / 60 / 24);
            console.log(Date1, Date2);
            if (Date2 === Date1){
                var Date4 = parseInt((new Date(spreadsheetObject[i][9])) / 1000 / 60 / 60 / 24);
                var Date6 = parseInt((new Date(spreadsheetObject[i][8])) / 1000 / 60 / 60 / 24);
                console.log(Date3, Date4);
                console.log(Date5, Date6);
                if (Date4 === Date3){
                    if (Date6 === Date5){
                        var ii = i + 1;
                        if (Location === spreadsheetObject[i][4]){
                            employeeSpreadSheet.getRange(ii, 4).setValue(newValuesObject['Lname']);
                            employeeSpreadSheet.getRange(ii, 3).setValue(newValuesObject['Fname']);
                            employeeSpreadSheet.getRange(ii, 8).setValue(newValuesObject['FDO']);
                            employeeSpreadSheet.getRange(ii, 9).setValue(newValuesObject['LDO']);
                            employeeSpreadSheet.getRange(ii, 10).setValue(newValuesObject['RDO']);
                            employeeSpreadSheet.getRange(ii, 13).setValue(newValuesObject['Email']);
                            employeeSpreadSheet.getRange(ii, 14).setValue(newValuesObject['PDO']);
                            employeeSpreadSheet.getRange(ii, 15).setValue(newValuesObject['PDOTO']);
                            employeeSpreadSheet.getRange(ii, 16).setValue(newValuesObject['PDOTB']);
                        }
                    }
                }
            }
        }
    }
}

function VancouverUpdateOriginalTwo(newValuesObject, originalValuesObject){
    console.log(newValuesObject, originalValuesObject);
    var employeeSpreadSheet = SpreadsheetApp.openByUrl("").getSheetByName("Form Responses 1");
    var ESlastRow = employeeSpreadSheet.getLastRow();
    var ESlastCol = employeeSpreadSheet.getLastColumn();

    var spreadsheetObject = employeeSpreadSheet.getSheetValues(1, 1, ESlastRow, ESlastCol);

    var Location = 'Vancouver';

    var FDODay = getDayFromDatesDayNum(originalValuesObject['FDO']);
    var LDODay = getDayFromDatesDayNum(originalValuesObject['LDO']);
    var RDODay = getDayFromDatesDayNum(originalValuesObject['RDO']);

    var Date1 = parseInt(new Date(originalValuesObject['FDO']) / 1000 / 60 / 60 / 24);
    var Date3 = parseInt(new Date(originalValuesObject['LDO']) / 1000 / 60 / 60 / 24);
    var Date5 = parseInt(new Date(originalValuesObject['RDO']) / 1000 / 60 / 60 / 24);
    console.log(Date1, Date3, Date5);

    for (i=2; i < ESlastRow; i++) {
        if (spreadsheetObject[i][2] == originalValuesObject['Lname'] | spreadsheetObject[i][2] == originalValuesObject['Fname']) {
            var Date2 = parseInt((new Date(spreadsheetObject[i][7])) / 1000 / 60 / 60 / 24);
            console.log(Date1, Date2);
            if (Date2 === Date1){
                var Date4 = parseInt((new Date(spreadsheetObject[i][9])) / 1000 / 60 / 60 / 24);
                var Date6 = parseInt((new Date(spreadsheetObject[i][8])) / 1000 / 60 / 60 / 24);
                console.log(Date3, Date4);
                console.log(Date5, Date6);
                if (Date4 === Date3){
                    if (Date6 === Date5){
                        var ii = i + 1;
                        if (Location === spreadsheetObject[i][4]){
                            employeeSpreadSheet.getRange(ii, 4).setValue(newValuesObject['Lname']);
                            employeeSpreadSheet.getRange(ii, 3).setValue(newValuesObject['Fname']);
                            employeeSpreadSheet.getRange(ii, 8).setValue(newValuesObject['FDO']);
                            employeeSpreadSheet.getRange(ii, 9).setValue(newValuesObject['LDO']);
                            employeeSpreadSheet.getRange(ii, 10).setValue(newValuesObject['RDO']);
                            employeeSpreadSheet.getRange(ii, 13).setValue(newValuesObject['Email']);
                            employeeSpreadSheet.getRange(ii, 14).setValue(newValuesObject['PDO']);
                            employeeSpreadSheet.getRange(ii, 15).setValue(newValuesObject['PDOTO']);
                            employeeSpreadSheet.getRange(ii, 16).setValue(newValuesObject['PDOTB']);
                        }
                    }
                }
            }
        }
    }
}
