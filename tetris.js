(function(game){
    'use strict';
    window.alert('Use the left and right arrows to move, space to rotate, p to pause and r to restart!');
    game.table = document.querySelector('#table');
    game.createTable();
    game.rows = game.readRows(document.querySelectorAll('#table tr'));
    game.init();
    game.point = document.querySelector('#point');
    game.pause = document.querySelector('#pause');

    document.addEventListener('keydown', (evt) => {
    if (evt.key === 'ArrowRight' || evt.key === 'ArrowLeft' ||
        evt.key === ' ' || evt.key === 'p' || evt.key === 'r')
        game.actualKey = evt.key;
    });

    setInterval(function(){
    if (game.actualKey === 'ArrowLeft')
        if(!game.collisionCheck(game.tetrimino, game.line, game.column - 1, game.rotation) && !game.paused)
        game.column--;

    if (game.actualKey === 'ArrowRight') 
        if(!game.collisionCheck(game.tetrimino, game.line, game.column + 1, game.rotation) && !game.paused)
        game.column++;

    if (game.actualKey === ' ') 
        if(!game.collisionCheck(game.tetrimino, game.line, game.column, (game.rotation + 90)) &&
        !game.collisionCheck(game.tetrimino, game.line, game.column, 0) && !game.paused)
            game.rotation += 90;
        if(game.rotation > 270)
            game.rotation = 0;
            

    if (game.actualKey === 'p' && !game.gameOver)
        game.pauseGame();

    if (game.actualKey === 'r' && !game.paused){
        game.init();
        game.point.innerText = game.points;
    }
    game.actualKey = null;
    }, 0.03)

    setInterval(function (){
        if(!game.paused) {
            game.clearBoard();
            if(game.blockLanded === 2)
                if(game.collisionCheck(game.tetrimino, game.line + 1, game.column, game.rotation) === 1) {
                    game.fixBlock(game.tetrimino, game.line, game.column, game.rotation);
                    game.tetrimino = game.randomBlock();
                    game.rotation = 0
                    game.blockLanded = 0;
                    game.line = 2;
                    game.column = 5;
                    game.lineCheck();
                    game.point.innerText = game.points;
                }
            else
                game.blockLanded = 0;
        
            if(game.collisionCheck(game.tetrimino, game.line + 1, game.column, game.rotation) === 1) {
                game.drawBlock(game.tetrimino, game.line, game.column, game.rotation);
                game.blockLanded++;
            }
            else
            game.drawBlock(game.tetrimino, game.line++, game.column, game.rotation);
        
            if(game.gameOver){
                game.over();
            }
        }
    }, 200);
})(window.game)