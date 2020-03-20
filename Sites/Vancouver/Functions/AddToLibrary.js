function VancouverAddToLibrary(employeeEmail, supervisorEmail) {
    var employeeSpreadSheet = SpreadsheetApp.openByUrl("").getSheetByName("ClinicianEmailLibrary");
    var ESlastRow = employeeSpreadSheet.getLastRow();
    var ESlastCol = employeeSpreadSheet.getLastColumn();

    var EmailLibraryObject = employeeSpreadSheet.getSheetValues(1, 1, ESlastRow, ESlastCol);
    var set = "Not Done";
    var Location = 'Vancouver';

    for (i = 2; i < ESlastRow; i++) {
        if (set != "Done") {
            if (EmailLibraryObject[i][5] === employeeEmail || EmailLibraryObject[i][6] === employeeEmail) {
                break;
            } else {
                if (EmailLibraryObject[i][5] == "" && EmailLibraryObject[i][6] == "") {
                    var ii = i + 1;
                    var set = "Done";
                    employeeSpreadSheet.getRange(ii, 6).setValue(employeeEmail);
                    employeeSpreadSheet.getRange(ii, 7).setValue(supervisorEmail);
                }
            }
        }
    }
}
