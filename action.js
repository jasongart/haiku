//setting up the elements needed
var haiku = document.getElementById("haiku"),
    lineOne = document.getElementById("haikuLineOne"),
    lineTwo = document.getElementById("haikuLineTwo"),
    lineThree = document.getElementById("haikuLineThree"),
    reset = document.getElementById("resetHaiku"),
    syllablePicked = " ",
    wordArray = " ",
    currentLine = " ",
    wordType = " ",
    prevWord = " ",
    prevWordType = null,
    wordRedo = false,
    hasPunctuation = null,
    //1 in 4 chance of getting punctuation mark after word
    includePunctuation = [true, false, false, false],
    punctuationMark = "",
    eligWordType = [],
    wordTypeLog = []


    //syllable counts
    score = 0,
    value = " ",
    max = " ",

    //booleans for if a line is setHaiku
    line1Set = false,
    line2Set = false,
    line3Set = false,

    //line arrays
    line1Contain = [],
    line2Contain = [],
    line3Contain = []

//words were here, now they're in words.js

    //array that houses all of the syllable objects each word type (noun, verb, adj, etc., will have it's own array and the previously selected word will determine which array will be chosen next)

    //to reduce the probablility of certain syllable arrays being selected other arrays would need to appear more than once (i.e. to have a "bias" toward one syllable choices then "oneSyllable" would appear more than once in this array)

    // var types = ["noun", "verb", "adjective", "adverb", "gerund", "preposition", "conjunction"];


//Word type syllable arrays. Each index of these arrays is an array itself that holds words with the number of syllables indicated at the beginning of the array name
    var interjection = [interjection1,interjection2,interjection3,interjection4,interjection5],

    determinerS = [determinerS1,determinerS2],

    determinerP = [determinerP1,determinerP2,determinerP3],

    determiner2Adj = [determiner2Adj1,determiner2Adj2],

    conjunction = [conjunction1],

    preposition = [preposition1,preposition2,preposition3],

    gerund = [gerund2,gerund3,gerund4,gerund5],

    normalNounS = [normalNounS1,normalNounS2,normalNounS3,normalNounS4,normalNounS5],

    normalNounP = [normalNounP1,normalNounP2,normalNounP3,normalNounP4,normalNounP5],

    pronounMNV = [pronounMNV1],

    pronounFNV = [pronounFNV1],

    pronounMV = [pronounMV1],

    pronounFV = [pronounFV1],

    pronounPersonalBV1st = [pronounPersonalBV1st1],

    pronounPersonalBV3rd = [pronounPersonalBV3rd1],

    pronounPersonalAV = [pronounPersonalAV1],

    pronounPersonalBN = [pronounPersonalBN1],

    pronounN = [pronounN1,pronounN3],

    pronounP = [pronounP1],

    pronounAV = [pronounAV1],

    funNounComp = [funNounComp1,funNounComp2,funNounComp3,funNounComp5],

    famousNounM = [famousNounM1,famousNounM2,famousNounM3,famousNounM4,famousNounM5, famousNounM6, famousNounM7],

    famousNounF = [famousNounF2,famousNounF3,famousNounF4,famousNounF5, famousNounF6, famousNounF7],

    famousNounP = [famousNounP1,famousNounP2,famousNounP3,famousNounP4,famousNounP5],

    famousNounN = [famousNounN1,famousNounN2,famousNounN3,famousNounN4,famousNounN5, famousNounN6],

    adjective = [adjective1,adjective2,adjective3,adjective4,adjective5],

    adjectiveP = [adjectiveP1],

    funAdjective = [funAdjective2,funAdjective4],

    adverb = [adverb1,adverb2,adverb3,adverb4,adverb5, adverb6, adverb7],

    funAdverb = [funAdverb1,funAdverb7],

    verb = [verb1,verb2,verb3,verb4,verb5],

    verbS = [verbS1,verbS2,verbS3,verbS4,verbS5],

    verbPT = [verbPT1,verbPT2,verbPT3,verbPT4,verbPT6],

    linkingVerbS = [linkingVerbS1,linkingVerbS2,linkingVerbS3],

    linkingVerbP = [linkingVerbP1,linkingVerbP2,linkingVerbP3],

    helpingVerb2Verb = [helpingVerb2Verb1],

    helpingVerb2VerbP = [helpingVerb2VerbP1],

    helpingVerb2VerbPT = [helpingVerb2VerbPT1,helpingVerb2VerbPT2],

    helpingVerb2Gerund = [helpingVerb2Gerund1,helpingVerb2Gerund2],

    helpingVerb2Det = [helpingVerb2Det1,helpingVerb2Det2],



//holds types of punctuation
    punctuation = ["!", "?", ".", ","]


//checking score to see what needs to be done
function checkScore(){
    console.log("score is " + score);

    //setting max for line 1
    if (!line1Set || line2Set && !line3Set){
      console.log("line one or three");
      max = 5;
      console.log("max is " + max)
    }
    //setting max for line 2
    if (line1Set && !line2Set){
      console.log("line two");
      max = 7;
      console.log("max is " + max)
    }

    //checking score

    if (score < max || score > max){
      console.log("place a new word");
      pickWordType();
    }
    // if neither condition is met then score == max and the line is done
    else{
      console.log("score is " + score);
      console.log("line is done");
      nextLine();
    }

}


//picking the word type (noun, verb, etc)

function pickWordType(){
  console.log(prevWordType);

  if (!wordRedo){
    if(prevWordType == null || prevWordType == "punctuation"){
      eligWordType = [interjection, determinerS, determinerP, gerund, normalNounP, normalNounS, pronounMNV, pronounFNV, pronounMV, pronounFV, pronounPersonalBV1st, pronounPersonalBV3rd, pronounPersonalBN, pronounN, pronounP, famousNounM, famousNounF, famousNounP, famousNounN, adjective, adjectiveP, funAdjective, adverb];
    }

    if (prevWordType == "determinerS"){
      eligWordType = [normalNounS, normalNounP, famousNounM, famousNounF, famousNounN, funAdjective, adjective];
    }

    if (prevWordType == "determinerP"){
      eligWordType = [normalNounP, famousNounP, funAdjective, adjective];
    }

    if (prevWordType == "determiner2Adj"){
      eligWordType = [adjective, funAdjective];
    }

    if (prevWordType == "conjunction"){
      eligWordType = [determinerS, determinerP, normalNounS, normalNounP, famousNounM, famousNounF, famousNounN, famousNounP, adverb, gerund, pronounPersonalBV1st, pronounPersonalBV3rd];
    }

    if (prevWordType == "preposition"){
      eligWordType = [normalNounS, determinerP, normalNounP, pronounMNV, pronounFNV, pronounPersonalBN, determinerS, adjective, pronounAV];
    }

    if (prevWordType == "gerund"){
      eligWordType = [normalNounS, normalNounP, adverb, conjunction];
    }

    if (prevWordType == "normalNounS"){
      eligWordType = [verbS, verbPT, helpingVerb2Verb, adverb, conjunction, preposition, funNounComp, helpingVerb2VerbPT, helpingVerb2Gerund, helpingVerb2Det, linkingVerbS];
    }
    if (prevWordType == "normalNounP"){
      eligWordType = [verb, adverb, verbPT, helpingVerb2Verb, conjunction, preposition, helpingVerb2Gerund, helpingVerb2Det];
    }
    if (prevWordType == "pronounMNV"){
      eligWordType = [normalNounS, normalNounP, adjective, funAdjective];
    }
    if (prevWordType == "pronounFNV"){
      eligWordType = [normalNounS, normalNounP, adjective, funAdjective];
    }
    if (prevWordType == "pronounMV"){
      eligWordType = [verbS, adverb, verbPT, helpingVerb2Verb, linkingVerbS];
    }
    if (prevWordType == "pronounFV"){
      eligWordType = [verbS, adverb, verbPT, helpingVerb2Verb, linkingVerbS];
    }
    if (prevWordType == "pronounPersonalBV1st"){
      eligWordType = [verb, verbPT, adverb, verbPT, helpingVerb2Verb];
    }
    if (prevWordType == "pronounPersonalBV3rd"){
      eligWordType = [verbS, verbPT, adverb, verbPT, helpingVerb2Verb];
    }
    if (prevWordType == "pronounPersonalAV"){
      eligWordType = [adverb, preposition];
    }
    if (prevWordType == "pronounPersonalBN"){
      eligWordType = [normalNounS, normalNounP, famousNounM, famousNounF, famousNounN, famousNounP, funAdjective, adjective];
    }
    if (prevWordType == "pronounN"){
      eligWordType = [normalNounS, verbS, verbPT, helpingVerb2Verb];
    }
    if (prevWordType == "pronounP"){
      eligWordType = [normalNounP,  famousNounP, adjective, adverb, helpingVerb2VerbPT, verbPT, helpingVerb2VerbP, linkingVerbP];
    }
    if (prevWordType == "pronounAV"){
      eligWordType = [preposition, adverb];
    }
    if (prevWordType == "funNounComp"){
      eligWordType = [interjection, adverb, gerund, verbPT, verbS, helpingVerb2VerbPT, helpingVerb2Gerund, helpingVerb2Det];
    }
    if (prevWordType == "famousNounM"){
      eligWordType = [verbS, verbPT, adverb, conjunction, normalNounS, normalNounP, funNounComp, helpingVerb2Verb, helpingVerb2VerbPT, helpingVerb2Gerund, helpingVerb2Det, linkingVerbS];
    }
    if (prevWordType == "famousNounF"){
      eligWordType = [verbS, verbPT, adverb, conjunction, normalNounS, normalNounP, funNounComp, helpingVerb2Verb, helpingVerb2VerbPT, helpingVerb2Gerund, helpingVerb2Det, linkingVerbS];
    }

    if (prevWordType == "famousNounP"){
      eligWordType = [verb, verbPT, adverb, conjunction, normalNounS, normalNounP, funNounComp, helpingVerb2Verb, helpingVerb2VerbPT, helpingVerb2Gerund, linkingVerbP];
    }

    if (prevWordType == "famousNounN"){
      eligWordType = [verbS, verbPT, adverb, conjunction, normalNounS, normalNounP, funNounComp, helpingVerb2Verb, helpingVerb2VerbPT, helpingVerb2Gerund, helpingVerb2Det, linkingVerbS];
    }

    if (prevWordType == "adjective"){
      eligWordType = [normalNounS, normalNounP, conjunction, preposition, funNounComp];
    }

    if (prevWordType == "adjectiveP"){
      eligWordType = [normalNounP, helpingVerb2VerbP];
    }
    if (prevWordType == "funAdjective"){
      eligWordType = [normalNounS, normalNounP, gerund];
    }
    if (prevWordType == "adverb"){
      eligWordType = [verb, adverb, verbPT, adjective, gerund, funAdjective, preposition];
    }
    if (prevWordType == "funAdverb"){
      eligWordType = [verb, adverb, verbPT, adjective, gerund, funAdjective];
    }
    if (prevWordType == "verb"){
      eligWordType = [adjective,normalNounS, normalNounP, conjunction, preposition, pronounPersonalAV, funAdjective];
    }
    if (prevWordType == "verbS"){
      eligWordType = [adjective,normalNounS, normalNounP, conjunction, preposition, pronounN, pronounPersonalAV, funAdjective];
    }

    if (prevWordType == "verbPT"){
      eligWordType = [adjective,normalNounS, normalNounP, conjunction, preposition, funAdjective];
    }

    if (prevWordType == "linkingVerbS"){
      eligWordType = [adjective, funAdjective];
    }

    if (prevWordType == "linkingVerbP"){
      eligWordType = [adjective, funAdjective];
    }

    if (prevWordType == "helpingVerb2Verb"){
      eligWordType = [adverb, verb];
    }
    if (prevWordType == "helpingVerb2VerbP"){
      eligWordType = [adverb, verb];
    }

    if (prevWordType == "helpingVerb2VerbPT"){
      eligWordType = [verbPT];
    }
    if (prevWordType == "helpingVerb2Gerund"){
      eligWordType = [gerund];
    }
    if (prevWordType == "helpingVerb2Det"){
      eligWordType = [determinerS, determinerP, determiner2Adj];
    }



  }
  var i = Math.trunc(Math.random() * eligWordType.length);
  wordType = eligWordType[i];
  pickSyllable();
}



//choosing the array where the word will come from

function pickSyllable(){

    if (score < max){
        console.log("the previous word type WAS set to" + " " + prevWordType);
        console.dir(eligWordType);
        var i = Math.trunc(Math.random() * wordType.length);
        wordArray = wordType[i];
        value = wordType[i].value;
        prevWordType = wordType[i].type;
        wordTypeLog.push(prevWordType);
        console.log("the previous word type IS NOW set to" + " " + prevWordType);

        console.log(wordTypeLog);
        score += value;
        console.log("score after pickSyllable is " + score);
        pickWord();
      }

      if (score > max){
          //subtract "overage" from score
          score -= value;
          //remove "overage" word
          currentLine.pop();
          //remove word type from the log
          wordTypeLog.pop();
          console.log("score after correction is " + score + " and prevWordType is still " + prevWordType);

          checkScore();
        }

}

//pick the word from the selected array
function pickWord(){
    //determining if a redo of the word is needed due to the score being too high
    if (score > max){
      wordRedo = true;
    }
    else{
      wordRedo = false;
    }

    if (!line1Set){
      currentLine = line1Contain;
    }
    if (line1Set && !line2Set){
      currentLine = line2Contain;
    }
    if (line2Set && !line3Set){
      currentLine = line3Contain;
    }

    var i = Math.trunc(Math.random() * wordArray.words.length);
    word = wordArray.words[i];

    //setting if there will be punctuation
    var i = Math.trunc(Math.random() * includePunctuation.length);
    hasPunctuation = includePunctuation[i];

    if(hasPunctuation){
      var i = Math.trunc(Math.random() * punctuation.length);
      punctuationMark = punctuation[i];
    }

    //function detecting if capitalization is needed, needs to run before the word is pushed to the line array
    if (prevWord.includes("!") || prevWord.includes(".") || prevWord.includes("?")){
      word = word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
    }

    //setting the word
    if (!hasPunctuation){
      currentLine.push(word);
      console.log("the word is" + " " + word);
    }
    else{
      currentLine.push(word + punctuationMark);
      console.log("the word is" + " " + word);
    }

    // set prevWord
    if (!wordRedo){
      for(i = 0; i < currentLine.length; i++){
        prevWord = currentLine[i];
      }
    }

    //fixes finishing the haiku with a comma
    if (currentLine==line3Contain && score == max && punctuationMark == ","){
      punctuationReplace = [".", "?", "!", ""];
      var i = Math.trunc(Math.random() * punctuationReplace.length)
      line3Contain.pop();
      line3Contain.push(word + punctuationReplace[i]);
    }
    checkScore();
  }

  //setting the line set as true so app can move to next line
  function nextLine(){
    if (!line1Set){
      line1Set = true;
      score = 0;
      wordTypeLog = [];
      checkScore();
    }
    else if (line1Set && !line2Set){
      line2Set = true;
      score = 0;
      wordTypeLog = [];
      checkScore();
    }
    else{
      line3Set = true;
    }
  }

//set the haiku
function setHaiku(){
    checkScore();
    // lineOne.innerHTML = "five syllables L1";
    for (i=0; i < line1Contain.length; i++){
      line1Contain[0] = line1Contain[0].substr(0,1).toUpperCase() + line1Contain[0].substr(1).toLowerCase();
      lineOne.innerHTML += line1Contain[i] + " ";
    }
    for (i=0; i < line2Contain.length; i++){
      lineTwo.innerHTML += line2Contain[i] + " ";
    }
    for (i=0; i < line3Contain.length; i++){
      lineThree.innerHTML += line3Contain[i] + " ";
    }
}

//reset the haiku
reset.addEventListener("click", resetHaiku);

function resetHaiku(){
  console.log("haiku reset");
  score = 0;
  line1Contain = [];
  line2Contain = [];
  line3Contain = [];
  line1Set = false;
  line2Set = false;
  line3Set = false;
  lineOne.innerHTML = "";
  lineTwo.innerHTML = "";
  lineThree.innerHTML = "";
  setHaiku();
}

    //set haiku on load
    window.onload = setHaiku();
