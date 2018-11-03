class GamesController < ApplicationController
  def index
    @gamesList = ["rps", "mb", "secret"]
  end

  def show
  end

  #Rock, Paper, Scissors
  def rps
    @userChoise = params[:choise]
    @rpsList = ["rock", "paper", "scissors"]
    if @userChoise
      @computerChoise = @rpsList[rand(0...3)]
      @result = play(@userChoise, @computerChoise)
    end
  end

  #Magic 8 Ball
  def mb
    @userChoise = params[:quistion]
    allAnswers = ["try again!", "yes ,go for it", "I dont think so", "sure!"]
    @magicAnswer = allAnswers[rand(0...3)]
  end

  #Secret Number
  def secret
    @sNumber = rand(1..11)
    @userGuess = params[:number]
    if @userGuess
      if @sNumber == @userGuess
        render("games/win")
      else
        render("games/lose")
      end
    end
  end

  private

  def play(play1, play2)
    if play1 === "rock" && play2 === "paper"
      return "computer"
    elsif play1 === "rock" && play2 === "scissors"
      return "user"
    end
    if play1 === "scissors" && play2 === "paper"
      return "user"
    elsif play1 === "scissors" && play2 === "rock"
      return "computer"
    end
    if play1 === "paper" && play2 === "rock"
      return "user"
    elsif play1 === "paper" && play2 === "scissors"
      return "computer"
    end
  end
end
