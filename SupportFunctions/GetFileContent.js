function getConfig(WantAdminSheet, WantEmployeeSheet) {
  var fileName = "config.json.txt";
  var files = DriveApp.getFilesByName(fileName);
  if (files.hasNext()) {
    var file = files.next();
    var content = file.getBlob().getDataAsString();
    var json = JSON.parse(content);
    if (WantAdminSheet === true) { return json['urls']['adminPTOSubmissionSheet'] }
    if (WantEmployeeSheet === true) { return json['urls']['adminPTOSubmissionSheet'] }
  }
}
