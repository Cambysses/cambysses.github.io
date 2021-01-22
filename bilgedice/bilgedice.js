class Player 
{
    constructor()
    {
        this.dice = [];
        this.qualifiers = [];
        this.score = 0;
    }

    roll()
    {
        var random = Number([Math.floor(Math.random() * 6)]) + 1;
        rolls.append(`<li><img class="die" src="content/${random}.png" onclick="keep()"></li>`)
    }

    add_die()
    {

    }
}

function roll()
{
    var rolls = $("#player-rolls");
    rolls.empty();
    for (var i = 0; i < 6; i++)
    {
        var random = Number([Math.floor(Math.random() * 6)]) + 1;
        rolls.append(`<li><img class="die" src="content/${random}.png" onclick="keep()"></li>`)
    }
}

function start()
{
    var player = new Player();

}