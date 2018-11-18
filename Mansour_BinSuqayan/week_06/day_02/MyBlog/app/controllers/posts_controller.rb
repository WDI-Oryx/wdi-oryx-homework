class PostsController < ApplicationController
  # Given to us by Devise. If a request comes through to the PostsController make sure you call the method called authenticate_user! first
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find_by(id: params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    post = current_user.posts.create(post_params)
    redirect_to post_path(post)
  end

  def edit
  end

  private

  def post_params
    params.required(:post).permit(:title, :body)
  end
end



