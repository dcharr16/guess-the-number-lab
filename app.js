// console.log('guess the number')
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuess: function(){
    let guess
    while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum){

      guess = prompt(`Guess a number between ${this.smallestNum} and ${this.biggestNum}`)
      
      guess=parseInt(guess)
      console.log(guess);
    }
    return guess
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      while(this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum) {
        this.prevGuesses.push(this.getGuess())
        console.log(this.prevGuesses);
      if (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum) {
        this.smallestNum = this.prevGuesses[this.prevGuesses.length - 1]
      }else{
        this.biggestNum = this.prevGuesses[this.prevGuesses.length - 1]
      }
      this.render();
    }
  },
  render:function(){
    if(this.prevGuesses[this.prevGuesses.length -1] === this.secretNum){
      alert(`Congrats! You guessed the secret number "${this.secretNum}" in ${this.prevGuesses.length} tries`)
    }else{
      alert(`guess is too ${this.prevGuesses[this.prevGuesses.length-1] > this.secretNum ? 'high' : 'low'}. prev guesses ${this.prevGuesses}`)
    }
  }
}
game.play()