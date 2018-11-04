class GamesController < ApplicationController

  def index
  end

  def rps
    @has_played
  end

  def rock
    @has_played = true
    render 'rps'
  end
end
