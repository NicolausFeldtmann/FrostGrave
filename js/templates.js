
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