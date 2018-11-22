class TweetsController < ApplicationController
    skip_before_action :verify_authenticity_token

  def index
    @tweets = Tweet.all
    render json: @tweets
  end

  def show
    @tweet = Tweet.find_by(id: params[:id])
    render json: @tweet
  end

  def new
  end

  def create
    tweet = Tweet.create(content: params["content"])
    render json: tweet
  end

  def edit
  end
end
