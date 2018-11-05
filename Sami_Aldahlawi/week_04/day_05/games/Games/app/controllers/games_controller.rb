class GamesController < ApplicationController
  def rps
    @play = params[:play]
    @play = @play.downcase()
    $computer_play = ""
    @result = who_winner(@play)
  end

  def who_winner(p)
    ## 0 -> rock
    ## 1 -> paper
    ## 2 -> scissors
    plays = ["rock", "paper", "scissors"]
    p = plays.find_index(p)
    rand_play = rand(3) ## 0,1,2
    @computer_play = plays[rand_play]
    if (p == 0 && rand_play == 1) ## Commputer = paper winner
      return "Computer is winner \"Paper\" "
    elsif (p == 0 && rand_play == 2) ## player = rock winner
      return "You is winner \"rock\" "
    elsif (p == 1 && rand_play == 0) ## player = paper winner
      return "You is winner \"Paper\" "
    elsif (p == 1 && rand_play == 2) ## Computer = scissors winner
      return "Computer is winner \"Scissors\" "
    elsif (p == 2 && rand_play == 0) ## Computer = rock winner
      return "Computer is winner \"Rock\" "
    elsif (p == 2 && rand_play == 1) ## player = scissors winner
      return "You is winner \"Scissors\" "
    else
      return "NoOne winner"
    end
  end

  def magic
    @magic_values = ["It is certain", "It is decidedly so", "Without a doubt", "Yes - definitely", "You may rely on it", "As I see it, yes",
                     "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", " Ask again later", "Better not tell you now",
                     "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good",
                     "Very doubtful"]
    @replay_migic = @magic_values[rand(@magic_values.length)]
  end

  def secret
    @number = params[:number].to_i ##to_i to convert to integer
    @rand_number = rand(10) + 1
    if @number == @rand_number
      render("games/secret/win")
    elsif @number != @rand_number && @number != 0
      render("games/secret/lose")
    end
  end
end
