class GamesController < ApplicationController
    def rps 
        @arr = ["Rock", "Paper", "Scissors"]
        @user_chose = params[:user_chose]
        
    end 
end