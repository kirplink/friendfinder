var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        console.log(friendsData[0].scores);
        console.log(req.body.scores);
        var closeScore = 100;
        var bestFriend = {};
        for (let val of friendsData) {
            for (var i = 0; i < val.scores.length; i++) {
                var friendScore = Math.abs(val.scores[i] - req.body.scores[i]);
                if (friendScore < closeScore) {
                    bestFriend = val;
                }
            }

        }

        res.json(bestFriend);
        friendsData.push(req.body);
    });
};