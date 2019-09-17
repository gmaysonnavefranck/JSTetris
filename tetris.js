(jQuery(function($){
    
    function clearBoard(collisionMatrix)
    {
        var x, y;
        for(x = 1; x <21; x++)
        {
         for(y = 1; y <11; y++)
            {
                if((collisionMatrix[x][y] == 1))
                $("#tabuleiro > tbody > tr:eq(" + x + ") > td:eq(" + y + ")").text("O").css( "background-color", "green" );
                else
                $("#tabuleiro > tbody > tr:eq(" + x + ") > td:eq(" + y + ")").text("|X|").css( "background-color", "black" );
            }

        }   
    }
    function randomBlock()
    {
        var rand = Math.floor(Math.random()*7)+1
        if(rand == 1)
        {
            return drawSquare;
        }
        if(rand == 2)
        {
            return drawLine;
        }
        if(rand == 3)
        {
            return drawL
        }
        if(rand == 4)
        {
            return drawReverseL
        }
        if(rand == 5)
        {
            return drawT
        }
        if(rand == 6)
        {
            return drawS
        }
        if(rand == 7)
        {
            return drawReverseS
        }
    }
    function drawSquare(linha, coluna,rotation)
    {
        return {
            pos1: {
                line: linha,
                column: coluna
            },
            pos2: {
                line: (linha*1),
                column: (coluna*1+1)
            },
            pos3: {
                line: (linha*1+1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1+1),
                column: (coluna*1+1)
            }
        }
    }
    function drawT(linha, coluna,rotation)
    {
        if(rotation == 0)
       {
        return {
            pos1: {
                line: (linha*1),
                column: (coluna*1-1)
            },
            pos2: {
                line: (linha*1-1),
                column: (coluna*1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1),
                column: (coluna*1+1)
            }
        }
       }
       if(rotation == 90 )
       {
        return {
            pos1: {
                line: (linha*1-1),
                column: (coluna*1)
            },
            pos2: {
                line: (linha*1),
                column: (coluna*1+1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1+1),
                column: (coluna*1)
            }
        }
       }
       if(rotation == 180)
       {
        return {
            pos1: {
                line: (linha*1),
                column: (coluna*1+1)
            },
            pos2: {
                line: (linha*1+1),
                column: (coluna*1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1),
                column: (coluna*1-1)
            }
        }
       }
       if(rotation == 270)
       {
        return {
            pos1: {
                line: (linha*1+1),
                column: (coluna*1)
            },
            pos2: {
                line: (linha*1),
                column: (coluna*1-1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1-1),
                column: (coluna*1)
            }
        }
       }
    }

    function drawLine(linha, coluna, rotation)
    {
       if(rotation == 90 || rotation == 270)
       {
        return {
            pos1: {
                line: linha,
                column: (coluna*1-1)
            },
            pos2: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1+1)
            },
            pos4: {
                line: (linha*1),
                column: (coluna*1+2)
            }
        }
       }
       if(rotation == 0 || rotation == 180)
       {
        return {
            pos1: {
                line: (linha*1-1),
                column: coluna
            },
            pos2: {
                line: (linha*1),
                column: (coluna)
            },
            pos3: {
                line: (linha*1+1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1+2),
                column: (coluna*1)
            }
        }
       }
    }

    function drawL(linha, coluna,rotation)
    {
    

        if(rotation == 0)
       {
        return {
            pos1: {
                line: (linha*1-2),
                column: (coluna*1)
            },
            pos2: {
                line: (linha*1-1),
                column: (coluna*1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1),
                column: (coluna*1+1)
            }
        }
       }
       if(rotation == 90 )
       {
        return {
            pos1: {
                line: (linha*1),
                column: (coluna*1+2)
            },
            pos2: {
                line: (linha*1),
                column: (coluna*1+1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1+1),
                column: (coluna*1)
            }
        }
       }
       if(rotation == 180)
       {
        return {
            pos1: {
                line: (linha*1+2),
                column: (coluna*1)
            },
            pos2: {
                line: (linha*1+1),
                column: (coluna*1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1),
                column: (coluna*1-1)
            }
        }
       }
       if(rotation == 270)
       {
        return {
            pos1: {
                line: (linha*1),
                column: (coluna*1-2)
            },
            pos2: {
                line: (linha*1),
                column: (coluna*1-1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1-1),
                column: (coluna*1)
            }
        }
       }
    }

    function drawReverseL(linha, coluna,rotation)
    {
        if(rotation == 0)
       {
        return {
            pos1: {
                line: (linha*1-2),
                column: (coluna*1)
            },
            pos2: {
                line: (linha*1-1),
                column: (coluna*1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1),
                column: (coluna*1-1)
            }
        }
       }
       if(rotation == 90 )
       {
        return {
            pos1: {
                line: (linha*1),
                column: (coluna*1+2)
            },
            pos2: {
                line: (linha*1),
                column: (coluna*1+1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1-1),
                column: (coluna*1)
            }
        }
       }
       if(rotation == 180)
       {
        return {
            pos1: {
                line: (linha*1+2),
                column: (coluna*1)
            },
            pos2: {
                line: (linha*1+1),
                column: (coluna*1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1),
                column: (coluna*1+1)
            }
        }
       }
       if(rotation == 270)
       {
        return {
            pos1: {
                line: (linha*1),
                column: (coluna*1-2)
            },
            pos2: {
                line: (linha*1),
                column: (coluna*1-1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1+1),
                column: (coluna*1)
            }
        }
       }
    }

    function drawS(linha, coluna,rotation)
    {
        if(rotation == 0)
       {
        return {
            pos1: {
                line: (linha*1-1),
                column: (coluna*1-1)
            },
            pos2: {
                line: (linha*1-1),
                column: (coluna*1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1),
                column: (coluna*1+1)
            }
        }
       }
       if(rotation == 90 )
       {
        return {
            pos1: {
                line: (linha*1-1),
                column: (coluna*1+1)
            },
            pos2: {
                line: (linha*1),
                column: (coluna*1+1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1+1),
                column: (coluna*1)
            }
        }
       }
       if(rotation == 180)
       {
        return {
            pos1: {
                line: (linha*1+1),
                column: (coluna*1+1)
            },
            pos2: {
                line: (linha*1+1),
                column: (coluna*1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1),
                column: (coluna*1-1)
            }
        }
       }
       if(rotation == 270)
       {
        return {
            pos1: {
                line: (linha*1+1),
                column: (coluna*1-1)
            },
            pos2: {
                line: (linha*1),
                column: (coluna*1-1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1-1),
                column: (coluna*1)
            }
        }
       }
    }

    function drawReverseS(linha, coluna,rotation)
    {
        if(rotation == 0)
       {
        return {
            pos1: {
                line: (linha*1-1),
                column: (coluna*1+1)
            },
            pos2: {
                line: (linha*1-1),
                column: (coluna*1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1),
                column: (coluna*1-1)
            }
        }
       }
       if(rotation == 90 )
       {
        return {
            pos1: {
                line: (linha*1+1),
                column: (coluna*1+1)
            },
            pos2: {
                line: (linha*1),
                column: (coluna*1+1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1-1),
                column: (coluna*1)
            }
        }
       }
       if(rotation == 180)
       {
        return {
            pos1: {
                line: (linha*1+1),
                column: (coluna*1-1)
            },
            pos2: {
                line: (linha*1+1),
                column: (coluna*1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1),
                column: (coluna*1+1)
            }
        }
       }
       if(rotation == 270)
       {
        return {
            pos1: {
                line: (linha*1-1),
                column: (coluna*1-1)
            },
            pos2: {
                line: (linha*1),
                column: (coluna*1-1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1+1),
                column: (coluna*1)
            }
        }
       }
        
    }
    function drawBlock(block, line, column,rotation)
    {
        if(rotation > 270)
        rotation = 0
        $("#tabuleiro > tbody > tr:eq(" + block(line, column,rotation).pos1.line + ") > td:eq(" + block(line, column,rotation).pos1.column + ")").text("O").css( "background-color", "green" );
        $("#tabuleiro > tbody > tr:eq(" + block(line, column,rotation).pos2.line + ") > td:eq(" + block(line, column,rotation).pos2.column + ")").text("O").css( "background-color", "green" );
        $("#tabuleiro > tbody > tr:eq(" + block(line, column,rotation).pos3.line + ") > td:eq(" + block(line, column,rotation).pos3.column + ")").text("O").css( "background-color", "green" );
        $("#tabuleiro > tbody > tr:eq(" + block(line, column,rotation).pos4.line + ") > td:eq(" + block(line, column,rotation).pos4.column + ")").text("O").css( "background-color", "green"  );
    }
    function fixBlock(block, line, column)
    {
        if(rotation > 270)
        rotation = 0
        collisionMatrix[block(line, column,rotation).pos1.line][block(line, column,rotation).pos1.column] = 1;
        collisionMatrix[block(line, column,rotation).pos2.line][block(line, column,rotation).pos2.column] = 1;
        collisionMatrix[block(line, column,rotation).pos3.line][block(line, column,rotation).pos3.column] = 1; 
        collisionMatrix[block(line, column,rotation).pos4.line][block(line, column,rotation).pos4.column] = 1;
        console.log(collisionMatrix);

    }
    function collisionCheck(block, line, column, collisionMatrix,rotation )
    {
        if(rotation > 270)
        rotation = 0
        if(collisionMatrix[block(line, column,rotation).pos1.line][block(line, column,rotation).pos1.column] == 1 || 
        collisionMatrix[block(line, column,rotation).pos2.line][block(line, column,rotation).pos2.column] == 1 ||
        collisionMatrix[block(line, column,rotation).pos3.line][block(line, column,rotation).pos3.column] == 1 ||
        collisionMatrix[block(line, column,rotation).pos4.line][block(line, column,rotation).pos4.column] == 1)
        {
            console.log('fodase');
            return 1;
        }
        else
        return 0;
    }
    function lineCheck(collisionMatrix)
    {
        for(x = 20; x > 0; x--)
        {
            var sum = 0;
            for( y = 1 ; y <11; y ++)
            {
                if(collisionMatrix[x][y] == 1)
                {
                    sum++;
                    if(sum > 5)
                    console.log("linha:",x,sum);
                    if(sum == 10)
                    {
                      ponto = ponto+100;
                      $("#ponto:eq(" + ponto + ")")
                        for(k = 1; k<11; k++)
                            collisionMatrix[x][k] = 0;
                            for(i = x; i>0; i--)
                            for(k = 1; k<11; k++)
                             {
                                collisionMatrix[i][k] = collisionMatrix[i-1][k];
                                 collisionMatrix[i-1][k]=0;
                            }  
                            lineCheck(collisionMatrix)  
                        }  
                    }
                }
            }
        }      

    var actualKey = null;
    var actualLine = 2;
    var actualColumn = 5;
    var rotation = 0;
    var ponto = 0;
    var blockLanded = 0;
    var actualBlock = randomBlock();
    var collisionMatrix = [
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
    [1,1,1,1,1,1,1,1,1,1,1,1]]

    $(document).on('keydown', function(evt){
        if (evt.which == 37 || evt.which == 39 || evt.which == 32)
            actualKey = evt.which;
    });

    setInterval(function (){
        clearBoard(collisionMatrix);
        if(rotation > 270)
        rotation = 0
        if (actualKey == 37) {
            if(collisionCheck(actualBlock, actualLine, actualColumn-1, collisionMatrix,rotation) == 1)
            {
            }
            else
            actualColumn--;
        }
        if (actualKey == 39) {
            if(collisionCheck(actualBlock, actualLine, actualColumn+1, collisionMatrix, rotation) == 1)
            {
            }
            else
            actualColumn++;
        }
        if (actualKey == 32) {
                if((collisionCheck(actualBlock, actualLine, actualColumn, collisionMatrix, (rotation+90) ) || 
                (collisionCheck(actualBlock, actualLine, actualColumn, collisionMatrix, 0 )) == 1))
                {}
                else
                {
                    rotation +=90;
                }
                     console.log(rotation);
        }

        if(blockLanded == 2)
        {
          if(collisionCheck(actualBlock, actualLine+1, actualColumn, collisionMatrix,rotation) == 1)
          {
            fixBlock(actualBlock, actualLine, actualColumn,rotation);
            actualBlock = randomBlock();
            rotation = 0
            blockLanded = 0;
            actualLine = 2;
            actualColumn = 5;
            lineCheck(collisionMatrix);
          }
          else
          blockLanded = 0;
        }
        if(collisionCheck(actualBlock, actualLine+1, actualColumn, collisionMatrix,rotation) == 1)
        {
            drawBlock(actualBlock, actualLine, actualColumn,rotation);
            blockLanded++;
        }
        else
            drawBlock(actualBlock, actualLine++, actualColumn,rotation);
        
        actualKey = null;
    }, 150);

}))