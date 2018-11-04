class GamesController < ApplicationController

  #game 1
  def rps
    @user_input = params[:input].downcase
    array = ["rock", "paper", "sicssors"]
    # raise "Erro"
    random = array[rand(array.length)]
    if @user_input == random
      @result = "You won!"
    else
      @result = "Opps, try again !!"
    end
  end

  #game 2
  def question
    # raise "Erro"
    @user_question = params[:question]
    answers = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes - definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy, try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful",
    ]
    @random_answer = answers[rand(answers.length)]
  end

  #game 3

  # def secret
  #   @random_number = Random.rand(1..10)
  #   @user_num = params[:num]
  #   if @random_number == @user_num
  #     render("games/win")
  #   else
  #     render("games/lose")
  #   end
  # end
end
