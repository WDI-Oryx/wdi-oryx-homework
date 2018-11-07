class ItemsController < ApplicationController
  def index
    @items = Item.all
  end

  def show
    @item = Item.find_by(id: params[:id])
  end

  def edit
    @item = Item.find_by(id: params[:id])
  end

  def update
    item = Item.find_by(id: params[:id])
    item.update(item_params)
    redirect_to items_path
  end

  def destroy
        item = Item.find_by(id: params[:id])
        item.destroy
redirect_to items_path
  end

  def new
    @item = Item.new
  end

  def create
    item = Item.create(item_params)
    redirect_to items_path
  end

  private

  def item_params
    params.require(:item).permit(:name, :details, :price, :store_id)
  end
end
