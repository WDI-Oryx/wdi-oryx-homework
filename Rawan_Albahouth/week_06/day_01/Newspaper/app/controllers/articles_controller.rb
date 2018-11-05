class ArticlesController < ApplicationController
  def index
    @articles = Article.all # [Article1, Article2, Article3]
  end

  def show
    @article = Article.find_by(id: params[:id]) # Article1
  end

  def new
  end

  def edit
  end
end
