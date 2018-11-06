class ShopsController < ApplicationController
  def index
  @shops = Shop.all 
  #instance varible can be use in view 
end
# 

def show
@shop = Shop.find_by(id: params[:id])
end

def new
  @shop = Shop.new # the attributes will be empty
end
# 
def create
  shop = Shop.create(shop_params)# no need to @ because it will be redirected
  # captital A because the DB in capital 
  redirect_to shops_path 
  # same like >> redirect_to "/shops"
end
# 
def edit
  @shop = Shop.find_by(id: params[:id])
end
# 
def update
shop = Shop.find_by(id: params[:id])
shop.update(shop_params)
redirect_to shop_path(shop) # new get request
end

# 
def destroy
shop = Shop.find_by(id: params[:id])
shop.destroy
redirect_to shops_path  
# تنقلني لصفحه معينه 
end

# it can be called only indide
private

def shop_params
params.require(:shop).permit(:name,:description)
end 

end