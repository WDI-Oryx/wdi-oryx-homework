class GamesController < ApplicationController
    def rps
        @value = params[:random]
        # raise
        value_games = ["rock","paper","scissors"]
        # if @value == "rock"
        #     @value = value_games[rand(3)]
        # end
    end

    def check_winner(val)
    
end