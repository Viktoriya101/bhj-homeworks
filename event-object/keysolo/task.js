class Game {
  constructor(container) {
      this.container = container;
      this.wordElement = container.querySelector('.word');
      this.winsElement = container.querySelector('.status__wins');
      this.lossElement = container.querySelector('.status__loss');
      this.timerElement = container.querySelector('#time');

      this.reset();
      this.registerEvents();
  }

  reset() {
      this.setNewWord();
      this.winsElement.textContent = 0;
      this.lossElement.textContent = 0;
      this.wins = 0;
      this.losses = 0;
      this.timeLimit = 0;
  }

  registerEvents() {
      window.addEventListener('keyup', (e) => {
          const inputChar = e.key.toLowerCase();
          const currentChar = this.currentSymbol.textContent.toLowerCase();

          if (inputChar === currentChar) {
              this.success();
          } else {
              this.fail();
          }
      });
  }

  success() {
      if (this.currentSymbol.classList.contains("symbol_current")) {
          this.currentSymbol.classList.remove("symbol_current");
      }
      this.currentSymbol.classList.add('symbol_correct');
      this.currentSymbol = this.currentSymbol.nextElementSibling;

      if (this.currentSymbol !== null) {
          this.currentSymbol.classList.add('symbol_current');
          return;
      }

      this.wins++;
      this.winsElement.textContent = this.wins;

      if (this.wins === 10) {
          alert('Победа!');
          this.reset();
      } else {
          this.setNewWord();
      }
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
      const word = this.getWord();
      this.renderWord(word);
      this.startTimer(word.length);
  }

  getWord() {
      const words = [
          'bob',
          'awesome',
          'netology',
          'hello',
          'kitty',
          'rock',
          'youtube',
          'popcorn',
          'cinema',
          'love',
          'javascript'
      ];
      const index = Math.floor(Math.random() * words.length);
      return words[index];
  }

  renderWord(word) {
      const html = [...word]
          .map((s, i) =>
              `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
          )
          .join('');
      this.wordElement.innerHTML = html;

      this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

  startTimer(length) {
      this.timeLimit = length; 
      this.timerElement.textContent = this.timeLimit; 

      if (this.timerId) {
          clearInterval(this.timerId); 
      }

      this.timerId = setInterval(() => {
          this.timeLimit--;
          this.timerElement.textContent = this.timeLimit;

          if (this.timeLimit < 0) {
              clearInterval(this.timerId);
              this.fail();
          }
      }, 1000);
  }
}

new Game(document.getElementById('game'));