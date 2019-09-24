<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tetris</title>
    
    <style>
    .bloco {
        background-color: green;
    }
    .fundo {
        
    }

.d-none{
            display: none;
        }
        .final 
        {
            background-color:red;
        }
        table {
            border: 1px solid black;
            border-collapse: collapse;

        }
        td {
            padding: 15px;
            background-color: black;
        }
    .color{
        background-color:blue;
    }
    
    </style>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
    
</head>
<body>
<audio autoplay loop>
  <source src="music.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
<center>
    <table id="tabuleiro">
    <tr class="d-none">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="d-none">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="d-none">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
                <tr class="d-none">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td  class="d-none"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-none"></td>
        </tr>
        <tr>
            <td class="d-none"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-none"></td>
        </tr>
        <tr>
            <td class="d-none"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-none"></td>
        </tr>
        <tr>
            <td class="d-none"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-none"></td>
        </tr>
        <tr>
            <td class="d-none"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-none"></td>
        </tr>
        <tr>
            <td class="d-none"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-none"></td>
        </tr>
        <tr>
            <td class="d-none"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-none"></td>
        </tr>
        <tr>
            <td class="d-none"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-none"></td>
        </tr>
        <tr>
            <td class="d-none"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-none"></td>
        </tr>
        <tr>
            <td class="d-none"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-none"></td>
        </tr>
        <tr>
            <td class="d-none"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-none"></td>
        </tr>
        <tr>
            <td class="d-none"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-none"></td>
        </tr>
        <tr>
            <td class="d-none"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-none"></td>
        </tr>
        <tr>
            <td class="d-none"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-none"></td>
        </tr>
        <tr>
            <td class="d-none"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-none"></td>
        </tr>
        <tr>
            <td class="d-none"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-none"></td>
        </tr>
        <tr>
            <td class="d-none"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-none"></td>
        </tr>
        <tr>
            <td class="d-none"></td>
            <td class="d-none"></td>
            <td class="d-none"></td>
            <td class="d-none"></td>
            <td class="d-none"></td>
            <td class="d-none"></td>
            <td class="d-none"></td>
            <td class="d-none"></td>
            <td class="d-none"></td>
            <td class="d-none"></td>
            <td class="d-none"></td>
            <td class="d-none"></td>
        </tr>
    </table>
    <h1 id= "ponto"> </h1></center>
    <script src=tetris.js>
    </script>

</body>
</html>
