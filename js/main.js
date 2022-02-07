'use strict'

var gQuests;
var gCurrQuestIdx;
var gNextId;
var gMsg = '';

function initGame() {
    gCurrQuestIdx = 0;
    gNextId = 1;
    renderQuest();
}

function renderQuest() {

    var strHTML = '';

    createQuests();

            var currQuest =  gQuests[gCurrQuestIdx];
            strHTML += `<img src="img/${gCurrQuestIdx + 1}.jpg">   
            <button onclick="checkAnswer(0, this)">${currQuest.opts[0]}</button><br>
            <button onclick="checkAnswer(1, this)">${currQuest.opts[1]}</button>
            <h2>${gMsg}</h2>`

        var elQuest = document.querySelector('.quest');
        elQuest.innerHTML = strHTML;
}


function checkAnswer(optIdx, elBtn) {

    if (optIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
        gMsg = 'Correct answer!';
        renderQuest();
        gCurrQuestIdx++;
    } else {
        gMsg = 'Try again...';
        renderQuest();
    }

    if (gCurrQuestIdx < gQuests.length) {
        setTimeout(function () {
            renderQuest();
        }, 1000);
    }

    gMsg = '';
    IsVictory();
}

function IsVictory() {

    if (gCurrQuestIdx === gQuests.length) {
        var strHTML = `<div class = "victory" >victory!!!</div>
            <button class="restart" onclick="initGame()">play again</button>`
        var elQuest = document.querySelector('.quest')
        elQuest.innerHTML = strHTML;
    }
}


function createQuests() {
    gQuests = [];
    gQuests.push(createQuest('Dog', 'Cat', 0));
    gQuests.push(createQuest('Hamburger', 'Pizza', 1));
    gQuests.push(createQuest('Winter', 'Summer', 1));
    gQuests.push(createQuest('Happy', 'Sad', 0));
    gQuests.push(createQuest('Tea', 'Coffee', 1));
}

function createQuest(opt1, opt2, idx) {
    return {
        id: gNextId++,
        opts: [opt1, opt2],
        correctOptIndex: idx
    }
}


