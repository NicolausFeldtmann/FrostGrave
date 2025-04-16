function getWinTemplate() {

    return `
        <div class="endScreen">
            <div class="message">
                <h2>YOU MADE IT!</h2>
                <p>
                    Thank you for playing my litte gamee!<br>
                    It's only a little demo to show what i can code.<br>
                    If you maybe see more of my work, follow the link to my...<br>
                    <a herf="#">portfolio</a> 
                </p>
                <div class="endBtnArea">
                    <div class="endBtnBox">
                        <div class="btn" onclick="backToStart()">Back to Titel Screen</div>
                    </div>
                    <div class="endBtnBox">
                        <div class="btn" onclick="restart()">Restat</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

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
                    <div class="endBtnBox">
                        <div class="btn" onclick="runAgain()">Back to Titel Screen</div>
                    </div>
                    <div class="endBtnBox">
                        <div class="btn" onclick="runAgain()">Restart</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}