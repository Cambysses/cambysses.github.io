async function getRandomGame(platform) {
    let games = await fetch(`content/games/${platform}.txt`).then(response => response.text());

    // Adds Japanese games to list, if checked and available.
    let supportedPlatforms = ["nes", "snes", "n64", "gb", "gbc", "gba", "mastersystem", "genesis", "dreamcast", "gamegear", "tg16", "ps1"];
    if ($("#includeJapanese").prop("checked") && supportedPlatforms.includes(platform)) {
        games += await fetch(`content/games/${platform}_jpn.txt`).then(response => response.text());
    }

    games = games.split('\n');
    return games[Math.floor(Math.random() * games.length)];
}

$(function () {
    $("#game-announcer").hide();
    $("#animated").attr("src", `content/sprites/${Math.floor(Math.random() * 25)}.gif`);
    $("#game-select ul li").click(function (e) {
        (async () => {
            $('#game').html(await getRandomGame($(this).attr('id')));
        })()
        $('#pre-game').html(`Your ${$(this).text()} game is`);
        $('#game-announcer').show();
    });
});