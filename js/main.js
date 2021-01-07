let player1 = "X";
let player2 = "O";
let totalTurns = 0;
let gameOn = true;
let player1Turn = 0;
let player2Turn = 0;


$(document).ready(function(){

  
    $('.cell').click(function(){ 
    const cell = $(this).attr("id")
    if ($(`#${cell}`).text()=== "" && gameOn) { // checks if cell is available to place X or O
        
    
      if(player1Turn === player2Turn) {
        if ($(`#${cell}`).text()!== player2) {  // player 1 taking turns/addiny turn count. Blocks Os if X is there
            $(`#${cell}`).text(player1);
            player1Turn += 1;
            totalTurns += 1;
        }
      } else if (player1Turn !== player2Turn) {
        if ($(`#${cell}`).text()!== player1) { // player 2 taking turns/adding turn count. Blocks Xs if O is there
            $(`#${cell}`).text(player2);
            player2Turn += 1;
            totalTurns += 1;
        }
      }
      if (totalTurns === 9 && gameOn) { // if count turn hits 9 will display winner if there is winner or Draw if no winner
        $('.status').text(`Draw!`); 
      };  

      if ($('#0').text()=== player1 && $('#1').text()=== player1 && $('#2').text()=== player1 || $('#3').text()=== player1 && $('#4').text()=== player1 && $('#5').text()=== player1 || $('#6').text()=== player1 && $('#7').text()=== player1 && $('#8').text()=== player1 || $('#0').text()=== player1 && $('#3').text()=== player1 && $('#6').text()=== player1 || $('#1').text()=== player1 && $('#4').text()=== player1 && $('#7').text()=== player1 || $('#2').text()=== player1 && $('#5').text()=== player1 && $('#8').text()=== player1 || $('#0').text()=== player1 && $('#4').text()=== player1 && $('#8').text()=== player1 || $('#2').text()=== player1 && $('#4').text()=== player1 && $('#6').text()=== player1) {
        $('.status').text(`X Wins!`);
        gameOn = false;
            // ^ player 1 win sequences
      } else if ($('#0').text()=== player2 && $('#1').text()=== player2 && $('#2').text()=== player2 || $('#3').text()=== player2 && $('#4').text()=== player2 && $('#5').text()=== player2 || $('#6').text()=== player2 && $('#7').text()=== player2 && $('#8').text()=== player2 || $('#0').text()=== player2 && $('#3').text()=== player2 && $('#6').text()=== player2 || $('#1').text()=== player2 && $('#4').text()=== player2 && $('#7').text()=== player2 || $('#2').text()=== player2 && $('#5').text()=== player2 && $('#8').text()=== player2 || $('#0').text()=== player2 && $('#4').text()=== player2 && $('#8').text()=== player2 || $('#2').text()=== player2 && $('#4').text()=== player2 && $('#6').text()=== player2) {
        $('.status').text(`O Wins!`);
        gameOn = false;
      } // ^ player 2 win sequences
    }
      $('.restart').click(function(){ // restarts game
        $('.cell').text("")
        $('.status').text("");
         totalTurns = 0;
         gameOn = true;
         player1Turn = 0;
         player2Turn = 0;
      });
    
    });    
});  




















