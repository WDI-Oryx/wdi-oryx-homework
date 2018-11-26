class BlogsController < ApplicationController
    skip_before_action :verify_authenticity_token


  def index
    @blogs = Blog.all
    # raise "error"
    render json: @blogs
  end

  def show
    @blog = Blog.find_by(id: params[:id])
    render json: @blog
  end

  def edit
  end

  def create
     blog =Blog.create(blogParams)
    render json: blog
  end

  def update
  end

  def new
  end
  private
  def blogParams
      params.require(:blog).permit(:title,:content);

  end
end
