class TodosController < ApplicationController
  def index
    @todos = Todo.all
    render json: @todos
  end

  def show
    @todo = Todo.find_by(id:params[:id])
    render json: @todo
  end

  def new
  end

  def edit
  end
end
