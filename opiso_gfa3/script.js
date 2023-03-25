var prob = Math.ceil(Math.random() * 20);
var trig = Math.ceil(Math.random() * 20);
var calc = Math.ceil(Math.random() * 20);

var subjects;
var h1;
var h2 = null;
var h3 = null;
var hs;

var alphabet;

var rawTime;
var hours;
var mins;

var subjectDisplay;
var letterDisplay;
var timeDisplay;
var split = ", ";
var endSplit = ", and ";

/*Subject Scores Display*/

document.getElementById("prob").innerHTML = prob;
document.getElementById("trig").innerHTML = trig;
document.getElementById("calc").innerHTML = calc;

/*Highest Random Number and Display*/

if (prob >= trig && prob >= calc) {
    h1 = "Probability";
    hs = prob;
} else {
    if (trig >= calc) {
        h1 = "Trigonometry";
        hs = trig;
    } else {
        h1 = "Calculus";
        hs = calc;
    }
}

if (h1 == "Probability") {
    if (prob == trig) {
        if (trig == calc) {
            h2 = "Trigonometry";
            h3 = "Calculus";
        } else {
            h2 = "Trigonometry";
            h3 = null;
        }
    } else {
        if (prob == calc) {
            h2 = "Calculus";
            h3 = null;
        } else {
            h2 = null;
            h3 = null;
        }
    }
} else {
    if (h1 == "Trigonometry") {
        if (trig == calc) {
            h2 = "Calculus";
            h3 = null;
        } else {
            h2 = null;
            h3 = null;
        }
    } else {
        h2 = null;
        h3 = null;
    }
}

if (h2 != null) {
    if (h3 != null) {
        subjects = h1+split+h2+endSplit+h3;
    } else {
        subjects = h1+endSplit+h2;
    }
} else {
    subjects = h1;
}

if (h2 != null) {
    subjectDisplay = "The subjects with the highest amount of passers, and therefore the easiest subjects, are: "+subjects+" ("+hs+")";
} else {
    subjectDisplay = "The subject with the highest amount of passers, and therefore the easiest subject, is: "+subjects+" ("+hs+")";
}

document.getElementById("subject").innerHTML = subjectDisplay;

/*Letter Display*/

switch (prob) {
    case 1:
        alphabet = "A";
        break;
    
    case 2:
        alphabet = "B";
        break;
    
    case 3:
        alphabet = "C";
        break;
    
    case 4:
        alphabet = "D";
        break;
    
    case 5:
        alphabet = "E";
        break;
    
    case 6:
        alphabet = "F";
        break;
    
    case 7:
        alphabet = "G";
        break;
    
    case 8:
        alphabet = "H";
        break;
    
    case 9:
        alphabet = "I";
        break;
    
    case 10:
        alphabet = "J";
        break;
    
    case 11:
        alphabet = "K";
        break;
    
    case 12:
        alphabet = "L";
        break;
    
    case 13:
        alphabet = "M";
        break;
    
    case 14:
        alphabet = "N";
        break;
    
    case 15:
        alphabet = "O";
        break;
    
    case 16:
        alphabet = "P";
        break;
    
    case 17:
        alphabet = "Q";
        break;
    
    case 18:
        alphabet = "R";
        break;
    
    case 19:
        alphabet = "S";
        break;
    
    case 20:
        alphabet = "T";
        break;
    
    default:
        alphabet = "A";
        break;
}

letterDisplay = "The name of the highest scorer in Calculus starts with the letter: "+alphabet;
document.getElementById("letter").innerHTML = letterDisplay;

/*Time Display*/

rawTime = trig * calc;
mins = rawTime % 60;
hours = (rawTime - mins) / 60;

timeDisplay = "The average time it took students to finish the Calculus test was ("+rawTime+" min/s): "+hours+" hr/s "+mins+" min/s";
document.getElementById("time").innerHTML = timeDisplay;