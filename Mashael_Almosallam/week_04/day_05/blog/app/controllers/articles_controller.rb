class ArticlesController < ApplicationController
  def new
  end

  def edit
    @article = Article.fing(params[:id])
  end

  def create
    # render plain: params [:article].inspect
    @article = Article.new(article_params)
    if @article.save
      redirect_to @article
    else
      render "new"
    end
  end

  def update
    @article = Article.find(params[:id])
    if @article.update(article_params)
      redirect_to @article
    else render "edit"     end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy

    redirect_to articles_path
  end

  private

  def articel_params
    params.require(:article).permit(:title, :text)
  end

  def show
    @article = Article.find(params[:id])
  end
end
