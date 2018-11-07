class ShopsController < ApplicationController
  def index
    @shops = Shop.all
  end

  def show
    @shop = Shop.find_by(id: params[:id])
  end

  def new
    @shop = Shop.new
  end

  def create
    shop = Shop.create(shop_params)
    redirect_to shops_path
  end

  def destroy
    shop = Shop.find_by(id: params[:id])
    shop.destroy
    redirect_to shops_path
  end

  def edit
    @shop = Shop.find_by(id: params[:id])
  end

  def update
    shop = Shop.find_by(id: params[:id])
    shop.update(shop_params)
    redirect_to shop
  end

  private

  def shop_params
    params.require(:shop).permit(:name, :description, :location)
  end
end
