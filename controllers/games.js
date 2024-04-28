const { writeData } = require("../utils/data"); 

const sendUpdatedGames = async (req, res) => {
    res.send({
        games: req.games, 
        updated: req.updatedObject 
    });
}

const sendAllGames = async (req, res) => {
    res.send(req.games);
  };

  // const deleteGame = async (req, res) => {  
  //     res.send({
  //     games: req.games,
  //     updated: req.game
  //   });
  // }

  module.exports = {
    sendAllGames,
    sendUpdatedGames
  }