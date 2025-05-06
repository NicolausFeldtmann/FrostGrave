
/**
 * template for beat game event
 */
function getWinTemplate() {

    return `
        <div class="endScreen">
            <div class="message">
                <h2>YOU MADE IT!</h2>
                <p>
                    Thank you for playing my litte game!<br>
                    It's only a little demo to show what i can code.<br>
                    If you maybe see more of my work, follow the link to my...<br>
                    <a herf="#">portfolio</a> 
                </p>
                <div class="endBtnArea">
                    <div class="endBtnBox" onclick="backToStart()">
                        <div class="btn">Back to Titel Screen</div>
                    </div>
                    <div class="endBtnBox">
                        <div class="btn" onclick="runAgain()">Restat</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * template for game over event
 */
function getLostTemplate() {

    return `
        <div class="endScreen">
            <div class="message">
                <h2>GAME OVER</h2>
                <p>
                    Sadly you died the final death...<br>
                    Good luck next time.
                </p>
                <div class="endBtnArea">
                    <div class="endBtnBox" onclick="backToStart()">
                        <div class="btn">Back to Titel Screen</div>
                    </div>
                    <div class="endBtnBox">
                        <div class="btn" onclick="runAgain()">Restart</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * template for loading screen
 */
function getLoadingScreen() {

    return`
        <div class="blurEffeckt" style="display: none;"></div>
        <div class="animatedArea" id="animatedArea">
            <div class="spinnigObject">
                <img class="spinningFlake" src="./img/frost.png">
            </div>
        </div>
    `;
}

/**
 * template for game instrunctions
 */
function getInstructions() {

    return`
        <div class="instrucTxt">
            <h3 class="instrucH3">The Kingdome is frozen...</h3>
            <p class="startPara">
                For over than 1.000 years youre kingdome is frozen im time by black magic.<br> 
                But now you're reanimated by the life spending sunlight... 
                Undead villagers stray the land. 
                Lead by the icegigant Eisenhorn, invulnerable by men made weapons and lower magic.
                <br>
                <br>
                Collect 5 falling stars to be able to cast an anicent und powerfull spell...
            </p>
        </div>
    `;
}

/**
 * template for game controlls 
 */
function getControllsTemplate() {

    return`
        <div class="controlls">
            <div class="controllsBox">
                <p class="controllsPara">To Move</p>
                <div class="letterBox">A</div>
                <div class="letterBox">D</div>
            </div>
            <div class="controllsBox">
                <p class="controllsPara">To jump</p>
                <div class="letterBox">SPACE</div>
            </div>
            <div class="controllsBox">
                <p class="controllsPara">Mele attack</p>
                <div class="letterBox">E</div>     
            </div>
            <div class="controllsBox">
                <p class="controllsPara">Cast spell</p>
                <div class="letterBox">Q</div>
            </div>
            <div class="controllsBox">
                <p class="controllsPara">Cast anicent spell</p>
                <div class="letterBox">C</div>
            </div>
        </div>
    `;
}

/**
 * Template for mobile buttons
 */
function getMobileBtnTemplate() {

    return`
         <div class="btnArea" id="btnArea">
                <div class="btnLeft">
                    <img class="controllBtn" id="btnLeft" src="img/buttons/arrow-left.png">
                    <img class="controllBtn" id="btnRight" src="img/buttons/arrow-right.png">
                </div>
                <div class="btnRight">
                    <img class="controllBtn right" id="btnFire" src="img/buttons/fireball.jpg">
                    <img class="controllBtn right" id="btnJump" src="img/buttons/arrow-up.png">
                    <img class="controllBtn right" id="btnSlash" src="img/buttons/slash.png">
                    <img class="controllBtn right" id="btnOverkill" src="img/buttons/flash.jpg">
                </div>
            </div>
    `;
}

function getManuellTemplate() {

    return`
        <div class="manuellArea">
            <h3 class="manuH3">Controlls</h3>
            <div class="manuTxt">
                <p class="manuPara">
                    Collect 5 falling Stars and cast anicent Spell against EISENHORN.<br>
                    EISENHORN is immune to any other attack 
                </p>
                <p class="manuPara">
                    Kill walkers with mele weapons or Icefire ball.<br>
                    Any contact with walkers will harm you.
                </p>
                <div class="manuControlls">
                    <div class="controllsBoxManu">
                        <p class="controllsParaManu">To Move</p>
                        <div class="letterRow">
                            <div class="letterBoxManu">A</div>
                            <div class="letterBoxManu">D</div>
                        </div>
                    </div>
                    <div class="controllsBoxManu">
                        <p class="controllsParaManu">To jump</p>
                        <div class="letterBoxManu">SPACE</div>
                    </div>
                    <div class="controllsBoxManu">
                        <p class="controllsParaManu">Mele attack</p>
                        <div class="letterBoxManu">E</div>     
                    </div>
                    <div class="controllsBoxManu">
                        <p class="controllsParaManu">Cast spell</p>
                        <div class="letterBoxManu">Q</div>
                    </div>
                    <div class="controllsBoxManu">
                        <p class="controllsParaManu">Cast anicent spell</p>
                        <div class="letterBoxManu">C</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}