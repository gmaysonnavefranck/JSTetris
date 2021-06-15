'use strict';
import tetriminos from './tetriminos.js';
let game = {
  actualKey: null,
  gameOver: false,
  line: null,
  column: null,
  rotation: null,
  points: null,
  blockLanded: null,
  table: null,
  rows: null,
  point: null,
  tetrimino: null,
  paused: null,
  pause: null,
  collisionMatrix: null,

  createTable: function() {
    for(let i = 0; i < 4; i++) {
      let row = document.createElement('tr');
      row.classList.add("d-none");
      for(let j = 0; j< 12; j++){
        let cell = document.createElement('td');
        row.append(cell);
      }
      this.table.append(row);
    }
  
    for(let i = 0; i<17; i++){
      let row = document.createElement('tr');
      let firstCell = document.createElement('td');
  
      firstCell.classList.add("d-none");
      row.append(firstCell);
  
      for(let j = 0; j< 10; j++){
        let cell = document.createElement('td');
        row.append(cell);
      }
  
      let lastCell = document.createElement('td');
      lastCell.classList.add("d-none");
      row.append(lastCell);
      this.table.append(row);
    }
  
    let row = document.createElement('tr');
    for(let j = 0; j< 12; j++){
      let cell = document.createElement('td');
      cell.classList.add("d-none");
      row.append(cell);
    }
    table.append(row);
  },

  init: function() {
    this.actualKey = null,
    this.gameOver = false,
    this.line = 2,
    this.column = 5,
    this.rotation = 0,
    this.points = 0,
    this.blockLanded = 0,
    this.tetrimino = this.randomBlock(),
    this.paused = false;
    this.collisionMatrix = [
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]];

    game.rows.forEach(row => row.querySelectorAll('td').forEach(cell => {
      cell.classList.remove('gameOver');
    }));

  },

  clearBoard: function() {
    for(let x = 1; x < 21; x++) {
      for(let y = 1; y < 11; y++) {
        if((this.collisionMatrix[x][y] === 1)) 
          this.rows[x].querySelectorAll('td')[y].classList.add('block');
        else
          this.rows[x].querySelectorAll('td')[y].classList.remove('block');
      }
    }   
  },

  lineCheck: function () {
    for(let x = 20; x > 0; x--) {
        let sum = 0;
        for(let y = 1; y < 11; y++) {
            if(this.collisionMatrix[x][y] === 1) {
                sum++;
                if(sum === 10) {
                  this.points += 100;
                    for(let k = 1; k < 11; k++)
                            this.collisionMatrix[x][k] = 0;
                    for(let i = x; i > 0; i--)
                        for(let j = 1; j < 11; j++)
                        {
                            this.collisionMatrix[i][j] = this.collisionMatrix[i-1][j];
                            this.collisionMatrix[i-1][j]=0;
                        }  
                    this.lineCheck();  
                }
            }
        }
    }
  },

  collisionCheck: function(block, line, column, rotation) {
    if(rotation > 270) 
      rotation = 0;
    if(this.collisionMatrix[block(line, column,rotation).pos1.line][block(line, column,rotation).pos1.column] === 1 || 
       this.collisionMatrix[block(line, column,rotation).pos2.line][block(line, column,rotation).pos2.column] === 1 ||
       this.collisionMatrix[block(line, column,rotation).pos3.line][block(line, column,rotation).pos3.column] === 1 ||
       this.collisionMatrix[block(line, column,rotation).pos4.line][block(line, column,rotation).pos4.column] === 1){ 
        return 1;
       }
    else
      return 0;
  },

  fixBlock: function(block, line, column, rotation) {
    if(line === 2)
      this.gameOver = true;
    this.collisionMatrix[block(line, column,rotation).pos1.line][block(line, column,rotation).pos1.column] = 1;
    this.collisionMatrix[block(line, column,rotation).pos2.line][block(line, column,rotation).pos2.column] = 1;
    this.collisionMatrix[block(line, column,rotation).pos3.line][block(line, column,rotation).pos3.column] = 1; 
    this.collisionMatrix[block(line, column,rotation).pos4.line][block(line, column,rotation).pos4.column] = 1;
  },

  pauseGame: function() {
    this.paused = !this.paused
    if(this.paused) {
      this.table.style.filter = 'blur(10px)';
      this.pause.style.display = "block";
    } else {
      this.table.style.filter = '';
      this.pause.style.display = "none";
    }
  },

  drawBlock: function(block, line, column, rotation) {
    this.rows[block(line, column,rotation).pos1.line].querySelectorAll('td')[block(line, column,rotation).pos1.column].classList.add('block');
    this.rows[block(line, column,rotation).pos2.line].querySelectorAll('td')[block(line, column,rotation).pos2.column].classList.add('block');
    this.rows[block(line, column,rotation).pos3.line].querySelectorAll('td')[block(line, column,rotation).pos3.column].classList.add('block');
    this.rows[block(line, column,rotation).pos4.line].querySelectorAll('td')[block(line, column,rotation).pos4.column].classList.add('block');
  },

  over: function() {
    game.clearBoard();
    game.rows.forEach(row => row.querySelectorAll('td').forEach(cell => {
      cell.classList.add('gameOver');
      cell.classList.remove('block');
    }));
  },

  randomBlock: function() {
    let rand = Math.floor(Math.random()*7)+1
    switch(rand){
      case 1:
        return tetriminos.drawSquare;
        break;
      case 2:
        return tetriminos.drawLine;
        break;
      case 3:
        return tetriminos.drawL
        break;
      case 4:
        return tetriminos.drawReverseL
        break;
      case 5:
        return tetriminos.drawT
        break;
      case 6:
        return tetriminos.drawS
        break;
      case 7:
        return tetriminos.drawReverseS
        break;
    }
  }

}
export default game;
