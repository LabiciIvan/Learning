document.querySelector('.button-task_one').addEventListener('click', addSquareToScreen);

function addSquareToScreen() {
     let SquareSection = document.querySelector('.square-section');

     let square = document.createElement('div');
      square.className = 'created_square';

      SquareSection.append(square);
}