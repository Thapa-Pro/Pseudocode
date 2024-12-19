/*

START
  INPUT PrimärBelopp     //Mata in det primära beloppet, dricksprocenten och antalet vänner
  INPUT DricksProcent
  INPUT AntalVänner

  IF PrimärBelopp > 0 AND  DricksProcent > 0 AND AntalVänner > 0 THEN    // Kontrollera om inmatningarna är giltiga (positiva tal)

    CALCULATE DricksBelopp = PrimärBelopp X DricksProcent               // Beräkna dricksbeloppet
    CALCULATE TotalBelopp = PrimärBelopp + DricksBelopp                 // Beräkna det totala beloppet inklusive dricks
    CALCULATE BeloppPerVän = TotalBelopp / AntalVänner                  // Beräkna beloppet som varje vän ska betala

    PRINT "Totalt belopp inklusive dricks: ", TotalBelopp              // Skriv ut resultaten
    PRINT "Belopp varje vän ska betala: ", BeloppPerVän
  ELSE                                                            // Skriv ut ett felmeddelande om inmatningarna är ogiltiga
    PRINT "Error: Ange korrekta värden för PrimärBelopp, DricksProcent och AntalVänner."
  ENDIF
END

*/


/////////////---------//////////////////-------------/////////////////////---------------------/////////////////

//JAVA SCRIPT
/*
function delaNotan() {
  // Get input values
  let primarBelopp = parseFloat(document.getElementById('PrimärBelopp').value);
  let dricksProcent = parseFloat(document.getElementById('DricksProcent').value);
  let antalVanner = parseInt(document.getElementById('AntalVänner').value);

  // Check if all inputs are valid (positive values)
  if (primarBelopp > 0 && dricksProcent > 0 && antalVanner > 0) {
      // Calculate the tip amount, total amount, and amount per friend
      let dricksBelopp = primarBelopp * dricksProcent;
      let totalBelopp = primarBelopp + dricksBelopp;
      let beloppPerVan = totalBelopp / antalVanner;

      // Display the results
      document.getElementById('totalBelopp').innerText = "Totalt belopp inklusive dricks: " + totalBelopp.toFixed(2);
      document.getElementById('beloppPerVän').innerText = "Belopp varje vän ska betala: " + beloppPerVan.toFixed(2);
      document.getElementById('felMeddelande').innerText = "";  // Clear error message
  } else {
      // Display error message if inputs are invalid
      document.getElementById('felMeddelande').innerText = "Error: Ange korrekta värden för PrimärBelopp, DricksProcent och AntalVänner.";
      document.getElementById('totalBelopp').innerText = ''; // Clear previous results
      document.getElementById('beloppPerVän').innerText = ''; // Clear previous results
  }
}
*/