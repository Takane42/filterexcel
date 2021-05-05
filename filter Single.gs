//Dokumentasi ada di https://developers.google.com/apps-script/reference/spreadsheet/ gausah males ya anak bangsat

function single(){
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Form Responses 1");
  var kota = ss.getSheetByName("Akses");
  var dataori = sheet.getRange(2, 1,sheet.getLastRow()-1,15).getValues();
  var header = sheet.getRange("A1:O1");
  var rangekota = kota.getRange(2, 2);
  var finalsheet = rangekota.getValue();
  var final = dataori.filter(function(item){ return item[7] === finalsheet;})
  
  //Logger.log();
  if(!ss.getSheetByName(finalsheet)){
    var end = ss.insertSheet(finalsheet);
    end.getRange(2, 1,final.length,final[0].length).setValues(final);
    header.copyTo(end.getRange("A1:O1"));
    end.autoResizeColumns(1, 15);
  }
  else {
    ss.deleteSheet(ss.getSheetByName(finalsheet))
    var end = ss.insertSheet(finalsheet);
    end.getRange(2, 1,final.length,final[0].length).setValues(final);
    header.copyTo(end.getRange("A1:O1"));
    end.autoResizeColumns(1, 15);
       }
}