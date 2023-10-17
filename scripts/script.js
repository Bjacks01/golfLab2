const games = [
    {
        studentName: "Slade Berryman",
        gameName: "Find Green Goblin",
        url: "https://sladeberryman.github.io/charlie-376/"
    },
    {
        studentName: "Levon Watkins Jr.",
        gameName: "Guardian Daedra",
        url: "https://v-sec0.github.io/delta-daggerfall-lab/"
    },
    {
        studentName: "Ryan McDonald",
        gameName: "Skyrim: Browser Edition",
        url: "https://armac7.github.io/Delta-Lab/"
    },
    {
        studentName: "Elizabeth Tucker",
        gameName: "The World of Pigs",
        url: "https://beth-ann-tucker.github.io/silver-octo-meme-delta-lab/"
    },
    {
        studentName: "Johnny Caringi",
        gameName: "Spirit Animal Finder",
        url: "https://johnnycaringi.github.io/Spirit-Animal-Finder/"
    },
    {
        studentName: "Jacob Rast",
        gameName: "Octo-Fiesta-Charlie-Jrast",
        url: "https://rastifer.github.io/reimagined-octo-fiesta-charlie-jrast/"
    },
    {
        studentName: "Colby Norwood",
        gameName: "The Fun Game",
        url: "https://cnorwood10.github.io/congenial-pancake-charlie-376/"
    },
    {
        studentName: "Janna Parker",
        gameName: "Click on the pup",
        url: "https://jparker13.github.io/fantastic-bassoon-CHARLIE/"
    },
    {
        studentName: "Kaitlin Renfroe",
        gameName: "Help Doge Land On Moon",
        url: "https://kaitlinrenfroe.github.io/renfroe-charlie-lab/"
    },
    {
        studentName: "Ella Rohling",
        gameName: "Name Facts!",
        url: "https://ellarohling.github.io/legendary-winner-delta/"
    },
    {
        studentName: "Brandon Jacks",
        gameName: "Will Smith Slaptacular",
        url: "https://bjacks01.github.io/BrandoCharlieReal/"
    },
    {
        studentName: "Lucas Hasting",
        gameName: "Doge Clicker",
        url: "https://lucashasting.github.io/charlie-project/"
    },
    {
        studentName: "Seungyeon Chang",
        gameName: "Spongebob Game",
        url: "https://seungyeonchang.github.io/charlie_fall_2023/"
    },
    {
        studentName: "Rachel Honeycutt",
        gameName: "Curly-Computing-Machine",
        url: "https://rachelhoneycutt.github.io/curly-computing-machine-DELTA/"
    },
    {
        studentName: "Rachel Thompson",
        gameName: "Friendly-Octo-Guid",
        url: "https://panhead63.github.io/friendly-octo-guide-delta/"
    },
    {
        studentName: "Raiden Greene",
        gameName: "Raiden's convert page",
        url: "https://raidengreene.github.io/namefactsdeltafall2023/"
    },
    {
        studentName: "Dalton Rodgers",
        gameName: "Probable-Winner",
        url: "https://daltrodg.github.io/probable-winner-bravo/"
    },
    {
        studentName: "Logan Beckman",
        gameName: "Logan's Minigames",
        url: "https://loganbeckman21.github.io/supreme-invention-echo/index.html" //Flagged as a "Deceptive site" by Google Chrome
    },
    {
        studentName: "Tyre Pickett",
        gameName: "Tyres' Flying Pig Olympics",
        url: "https://tyrepickett.github.io/Charlie-flying-pigs/" 
    }
];

$(document).ready(function() {
    $.each(games, function(index, data) {
        let id = "id" + index; //Every W3C modal needs a unique ID to open separate games
        $("#cardHolder").append(
            '<div class="card container-fluid"> <div class="card-header container-fluid"> ' +
            data.gameName +
            '</div><div class="card-body">' +
            data.studentName +
            "'s game" +
            '<button onclick="document.getElementById(\'' +
            id +
            '\').style.display=\'block\'" class="w3-button w3-black container-fluid">Open Modal</button><div id="' +
            id +
            '" class="w3-modal container-fluid"><div class="w3-modal-content w3-animate-zoom container-fluid"><div class="w3-container container-fluid"><span onclick="document.getElementById(\'' +
            id +
            '\').style.display=\'none\'" class="w3-button w3-display-topright">&times;</span><h2>'+
            data.gameName +
            '</h2><iframe src="' +
            data.url +
            '" height="500px" width="870px" class="container-fluid"></iframe></div></div></div></div>'
        );
    });
    console.log("Games Loaded!");
});
