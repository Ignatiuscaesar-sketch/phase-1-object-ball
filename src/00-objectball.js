// Define the gameObject function that returns the game's data structure
function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1},
                "Reggie Evans": {number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7},
                "Brook Lopez": {number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15},
                "Mason Plumlee": {number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5},
                "Jason Terry": {number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1}
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2},
                "Bismak Biyombo": {number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10},
                "DeSagna Diop": {number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5},
                "Ben Gordon": {number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0},
                "Brendan Haywood": {number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12}
            }
        }
    };
}

// Function to get a player's points scored
function numPointsScored(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
        const team = game[teamKey];
        if (team.players[playerName]) {
            return team.players[playerName].points;
        }
    }
}

// Function to get a player's shoe size
function shoeSize(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
        const team = game[teamKey];
        if (team.players[playerName]) {
            return team.players[playerName].shoe;
        }
    }
}

// Function to get the team colors by team name
function teamColors(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
        const team = game[teamKey];
        if (team.teamName === teamName) {
            return team.colors;
        }
    }
}

// Function to get team names
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// Function to get player numbers by team name
function playerNumbers(teamName) {
    const game = gameObject();
    const team = game.home.teamName === teamName ? game.home : game.away;
    return Object.values(team.players).map(player => player.number);
}

// Function to get player stats by player name
function playerStats(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
        const team = game[teamKey];
        if (team.players[playerName]) {
            return team.players[playerName];
        }
    }
}

// Function to find the player with the largest shoe size and return their number of rebounds
function bigShoeRebounds() {
    let largestShoeSize = 0;
    let rebounds = 0;
    const game = gameObject();
    for (const teamKey in game) {
        const team = game[teamKey];
        for (const player in team.players) {
            const playerShoeSize = team.players[player].shoe;
            if (playerShoeSize > largestShoeSize) {
                largestShoeSize = playerShoeSize;
                rebounds = team.players[player].rebounds;
            }
        }
    }
    return rebounds;
}
