class GamesController < ApplicationController
  def rps
    @value = params[:random]
    @value_games = ["rock", "paper", "scissors"]
    random = rand(3)
    @value_random = @value_games[random]
    @winner = ""
    ## rock vs paper == pager
    ## rock vs scissors == rock
    ## paper vs scissors == scissors

    if @value == "rock" && @value_random == "paper"
      @winner += "The player #{@value_random} is Winner"
    elsif @value == "paper" && @value_random == "rock"
      @winner += "The player #{@value} is Winner"
    elsif @value == "rock" && @value_random == "scissors"
      @winner += "The player #{@value} is Winner"
    elsif @value == "scissors" && @value_random == "rock"
      @winner += "The player #{@value_random} is Winner"
    elsif @value == "paper" && @value_random == "scissors"
      @winner += "The player #{@value_random} is Winner"
    elsif @value == "scissors" && @value_random == "paper"
      @winner += "The player #{@value} is Winner"
    else
      @winner += "All equal"
    end

    # raise
    # raise
  end

  def magicEight
    @question_input = params[:question]
    @values = ["Yes", "Signs point to yes", "Reply hazy, try again", " Ask again later", "Better not tell you now",
               "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good",
               "Very doubtful", "It is certain", "It is decidedly so", "Without a doubt", "Yes - definitely", "You may rely on it", "As I see it, yes",
               "Most likely", "Outlook good"]

    @random_values = @values[rand(@values.length)]
  end

  def secret
    @input_number = params[:number].to_i
    @input_random = rand(10) + 1
    @result = ""
    if @input_number == @input_random
      @result += "Winner"
    elsif @input_number == 0
    else
      @result += "loser"
    end
  end
end
