(jQuery(function($){
    
    function clearBoard(collisionMatrix)
    {
        var x, y;
        for(x = 0; x <20; x++)
        {
         for(y = 1; y <13; y++)
            {
                if((collisionMatrix[x][y] == 1))
                $("#tabuleiro > tbody > tr:eq(" + x + ") > td:eq(" + y + ")").text("O");
                else
                $("#tabuleiro > tbody > tr:eq(" + x + ") > td:eq(" + y + ")").text("|X|");
            }

        }   
    }
    function randomBlock()
    {
        var rand = 2 //Math.floor(Math.random()*7)+1
        console.log(rand);
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
    function drawSquare(linha, coluna)
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

    function drawLine(linha, coluna)
    {
        return {
            pos1: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos2: {
                line: (linha*1+1),
                column: (coluna*1)
            },
            pos3: {
                line: (linha*1+2),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1+3),
                column: (coluna*1)
            }
        }
    }

    function drawL(linha, coluna)
    {
        return {
            pos1: {
                line: linha,
                column: coluna
            },
            pos2: {
                line: (linha*1+1),
                column: coluna
            },
            pos3: {
                line: (linha*1+2),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1+2),
                column: (coluna*1+1)
            }
        }
    }

    function drawReverseL(linha, coluna)
    {
        return {
            pos1: {
                line: linha,
                column: coluna
            },
            pos2: {
                line: (linha*1+1),
                column: coluna
            },
            pos3: {
                line: (linha*1+2),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1+2),
                column: (coluna*1-1)
            }
        }
    }

    function drawS(linha, coluna)
    {
        return {
            pos1: {
                line: linha,
                column: coluna
            },
            pos2: {
                line: (linha*1+1),
                column: coluna
            },
            pos3: {
                line: (linha*1+1),
                column: (coluna*1+1)
            },
            pos4: {
                line: (linha*1+2),
                column: (coluna*1+1)
            }
        }
    }

    function drawReverseS(linha, coluna)
    {
        return {
            pos1: {
                line: linha,
                column: coluna
            },
            pos2: {
                line: (linha*1+1),
                column: coluna
            },
            pos3: {
                line: (linha*1+1),
                column: (coluna*1-1)
            },
            pos4: {
                line: (linha*1+2),
                column: (coluna*1-1)
            }
        }
    }
    function drawT(linha, coluna)
    {
        return {
            pos1: {
                line: linha,
                column: coluna
            },
            pos2: {
                line: (linha*1+1),
                column: coluna
            },
            pos3: {
                line: (linha*1+1),
                column: (coluna*1+1)
            },
            pos4: {
                line: (linha*1+2),
                column: (coluna*1)
            }
        }
    }
    function drawBlock(block, line, column)
    {
        $("#tabuleiro > tbody > tr:eq(" + block(line, column).pos1.line + ") > td:eq(" + block(line, column).pos1.column + ")").text("O");
        $("#tabuleiro > tbody > tr:eq(" + block(line, column).pos2.line + ") > td:eq(" + block(line, column).pos2.column + ")").text("O");
        $("#tabuleiro > tbody > tr:eq(" + block(line, column).pos3.line + ") > td:eq(" + block(line, column).pos3.column + ")").text("O");
        $("#tabuleiro > tbody > tr:eq(" + block(line, column).pos4.line + ") > td:eq(" + block(line, column).pos4.column + ")").text("O");
    }
    function fixBlock(block, line, column)
    {
        collisionMatrix[block(line, column).pos1.line][block(line, column).pos1.column] = 1;
        collisionMatrix[block(line, column).pos2.line][block(line, column).pos2.column] = 1;
        collisionMatrix[block(line, column).pos3.line][block(line, column).pos3.column] = 1; 
        collisionMatrix[block(line, column).pos4.line][block(line, column).pos4.column] = 1;
        console.log(collisionMatrix);

    }
    function collisionCheck(block, line, column, collisionMatrix )
    {
        if(collisionMatrix[block(line, column).pos1.line][block(line, column).pos1.column] == 1 || 
        collisionMatrix[block(line, column).pos2.line][block(line, column).pos2.column] == 1 ||
        collisionMatrix[block(line, column).pos3.line][block(line, column).pos3.column] == 1 ||
        collisionMatrix[block(line, column).pos4.line][block(line, column).pos4.column] == 1)
        {
            console.log('fodase');
            return 1;
        }
        else
        return 0;
    }
    function lineCheck(collisionMatrix)
    {
        for(x = 19; x > 0; x--)
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
    var actualLine = 0;
    var actualColumn = 4;
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
    [1,1,0,0,0,0,0,0,0,1,0,1],
    [1,1,0,0,0,0,0,0,1,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]]

    $(document).on('keydown', function(evt){
        if (evt.which == 37 || evt.which == 39 || evt.which == 32)
            actualKey = evt.which;
    });

    setInterval(function (){
        clearBoard(collisionMatrix);
        if (actualKey == 37) {
            if(collisionCheck(actualBlock, actualLine, actualColumn-1, collisionMatrix) == 1)
            {
                console.log('aqui');
            }
            else
            actualColumn--;
        }
        if (actualKey == 39) {
            if(collisionCheck(actualBlock, actualLine, actualColumn+1, collisionMatrix) == 1)
            {
            }
            else
            actualColumn++;
        }

        if(blockLanded == 2)
        {
            fixBlock(actualBlock, actualLine, actualColumn);
            actualBlock = randomBlock();
            blockLanded = 0;
            actualLine = 0;
            actualColumn = 4;
            lineCheck(collisionMatrix);
        }
        if(collisionCheck(actualBlock, actualLine+1, actualColumn, collisionMatrix) == 1)
        {
            drawBlock(actualBlock, actualLine, actualColumn);
            blockLanded++;
        }
        else
            drawBlock(actualBlock, actualLine++, actualColumn);
        
        actualKey = null;
    }, 150);

}))