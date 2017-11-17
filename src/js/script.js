console.log('hello world');

import img from '../assets/img/phaser.png'

//
// import PIXI from "phaser/build/custom/pixi";
// import p2 from "phaser/build/custom/p2";
// import Phaser from "phaser";

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

function preload () {

    game.load.image('logo', 'assets/img/phaser.png');

}

function create () {

    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);

}
