//Dokumentasi ada di https://developers.google.com/apps-script/reference/spreadsheet/ gausah males ya anak bangsat

function all(){
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Form Responses 1");
  var sheetkota = ss.getSheetByName("Akses")
  var kota = sheetkota.getRange(51,9,16,1).getValues();
  var arraykota = kota.join().split(',');
  var dataori = sheet.getRange(2, 1,sheet.getLastRow()-1,15).getValues();

  
  //Logger.log(arraykota); //buat ngetest Var
  
  var mapkota = arraykota.map(loop); //looping di array
  
}

function loop(kota){
  //idk why am i writing this again
   var ss = SpreadsheetApp.getActiveSpreadsheet();
   var sheet = ss.getSheetByName("Form Responses 1");
   var dataori = sheet.getRange(2, 1,sheet.getLastRow()-1,15).getValues();
   var header = sheet.getRange("A1:O1");

  //ifnya gan
  if(!ss.getSheetByName(kota)){
    
    var final = dataori.filter(function(item){ return item[7] === kota;})
    var end = ss.insertSheet(kota);
    end.getRange(2, 1,final.length,final[0].length).setValues(final);
    header.copyTo(end.getRange("A1:O1"));
    end.autoResizeColumns(1, 15);
    
  } else{
    
    ss.deleteSheet(ss.getSheetByName(kota));
    var final = dataori.filter(function(item){ return item[7] === kota;})
    var end = ss.insertSheet(kota);
    end.getRange(2, 1,final.length,final[0].length).setValues(final);
    header.copyTo(end.getRange("A1:O1"));
    end.autoResizeColumns(1, 15);
  }
  
}