var curNote;
var curNoteNum;

curNote ="C4";
curNoteNum = "1/4";

document.getElementById("instrument").style.display = "none";

function instumentsFunction (){
    document.getElementById("instruments").style.display = "block";
    document.getElementById("instrument").style.display = "none";
}

function piano () {
    document.getElementById("instruments").style.display = "none";
    document.getElementById("instrument").style.display = "block";
};

function C4 (){
    curNote ="C4";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}
function D4 (){
    curNote ="D4";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}
function E4 (){
    curNote ="E4";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}
function F4 (){
    curNote ="F4";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}
function G4 (){
    curNote ="G4";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}
function A4 (){
    curNote ="A4";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}
function B4 (){
    curNote ="B4";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}
function C5 (){
    curNote ="C5";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}
function D5 (){
    curNote ="D5";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}
function E5 (){
    curNote ="E5";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}
function F5 (){
    curNote ="F5";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}
function G5 (){
    curNote ="G5";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}
function A5 (){
    curNote ="A5";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}
function B5 (){
    curNote ="B5";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}

function oneFour (){
    curNoteNum ="1/4";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}
function oneEight(){
    curNoteNum = "1/8";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}
function oneTwo(){
    curNoteNum = "1/2";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}
function one(){
    curNoteNum = "1";
    document.getElementById("currentNote").innerText = curNote;
    document.getElementById("currentNoteSize").innerText = curNoteNum;
}

document.getElementById("currentNote").innerText = curNote;
document.getElementById("currentNoteSize").innerText = curNoteNum;