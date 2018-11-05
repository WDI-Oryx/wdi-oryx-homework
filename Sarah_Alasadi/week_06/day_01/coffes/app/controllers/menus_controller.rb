class MenusController < ApplicationController
  def index
    @menus = Menu.all
  end

  def show
    @menu = Menu.find_by(id: params[:id])
  end

  def new
    @menu = Menu.new
  end

  def create
    menu = Menu.create(menu_params)
    redirect_to menus_path
  end

  def edit
    @menu = Menu.find_by(id: params[:id])
  end

  def update
    menu = Menu.find_by(id: params[:id])
    menu.update(menu_params)
    redirect_to menus_path(menu)
  end

  def destroy
    menu = Menu.find_by(id: params[:id])
    menu.destroy
    redirect_to menus_path
  end

  private

  def menu_params
    params.require(:menu).permit(:name, :size, :description)
  end
end
