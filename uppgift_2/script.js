/*

START

    INPUT StartOrd, SlutOrd

   IF length(StartOrd) != length(SlutOrd) THEN                //Säkerställ att indata är giltiga dvs. samma antal bokstäver
        PRINT "StartOrd och SlutOrd måste ha samma längd."
        END
    END IF

    NuvarandeOrd ← StartOrd 

    WHILE True DO
        NyttOrd ← BytEnBokstav(NuvarandeOrd)

        IF NOT EndastEnBokstavÄndrad(NuvarandeOrd, NyttOrd) THEN    // Kontrollera om bara en bokstav har ändrats
            PRINT "Endast en bokstav får ändras åt gången."
            CONTINUE
        END IF

       IF NOT ÄrMeningsfulltOrd(NyttOrd) THEN                       // Kontrollera om det nya ordet är meningsfullt
            PRINT "NyttOrd är inte ett meningsfullt ord."
            CONTINUE
        END IF

        NuvarandeOrd ← NyttOrd

       IF NuvarandeOrd = SlutOrd THEN                               // Kontrollera om målordet har uppnåtts
            PRINT "Resultatet uppnått!"
            BREAK
        END IF
    END WHILE

END

*/

////////////////////////---------------------//////////////////////--------------------///////////////////////////
/*

function wordGame(startWord, endWord) {
    const validWords = ["EYE", "LYE", "LIE", "LID"]; // Define the word chain
    if (startWord.length !== endWord.length) {
        console.log("Words must have the same length.");
        return;
    }
    let currentWord = startWord;
    while (currentWord !== endWord) {
        let newWord = prompt(`Current word: ${currentWord}. Enter next word:`);
        if (!validWords.includes(newWord) || !isOneLetterChanged(currentWord, newWord)) {
            console.log("Invalid word change.");
            continue;
        }
        currentWord = newWord;
    }
    console.log("Target achieved!");
}

function isOneLetterChanged(word1, word2) {
    let changes = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) changes++;
    }
    return changes === 1; // Only one letter should change
}

// Run the game
wordGame("EYE", "LID");
*/
