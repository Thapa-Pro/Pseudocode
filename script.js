//START
///INPUT PrimärBelopp
///INPUT DricksProcent
///INPUT AntalVänner

///IF PrimärBelopp > 0 AND  DricksProcent > 0 AND AntalVänner > 0 THEN

////CALCULATE DricksBelopp = PrimärBelopp X DricksProcent
////CALCULATE TotalBelopp = PrimärBelopp + DricksBelopp
////CALCULATE BeloppPerVän = TotalBelopp / AntalVänner

////PRINT "Totalt belopp inklusive dricks: ", TotalBelopp 
////PRINT "Belopp varje vän ska betala: ", BeloppPerVän
///ELSE 
//// PRINT "Error: Ange korrekta värden för PrimärBelopp, DricksProcent och AntalVänner."
///ENDIF
//END

function delaNotan() {
  // Hämta inputvärdena
  let primärBelopp = parseFloat(document.getElementById('primärBelopp').value);
  let dricksProcent = parseFloat(document.getElementById('dricksProcent').value);
  let antalVänner = parseInt(document.getElementById('antalVänner').value);

  // Validera input
  if (primärBelopp > 0 && dricksProcent > 0 && antalVänner > 0) {
      // Beräkna värden
      let dricksBelopp = primärBelopp * dricksProcent;
      let totalBelopp = primärBelopp + dricksBelopp;
      let beloppPerVän = totalBelopp / antalVänner;

      // Visa resultaten
      document.getElementById('totalBelopp').innerText = "Totalt belopp inklusive dricks: " + totalBelopp.toFixed(2);
      document.getElementById('beloppPerVän').innerText = "Belopp varje vän ska betala: " + beloppPerVän.toFixed(2);
  } else {
      // Visa felmeddelande om inmatningen är ogiltig
      document.getElementById('felMeddelande').innerText = "Fel: Ange korrekta värden för PrimärBelopp, DricksProcent och AntalVänner.";
      document.getElementById('totalBelopp').innerText = '';
      document.getElementById('beloppPerVän').innerText = '';
  }
}

