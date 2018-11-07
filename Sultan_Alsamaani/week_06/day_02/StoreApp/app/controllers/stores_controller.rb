class StoresController < ApplicationController
  def index
    @stores = Store.all
  end

  def show
    @store = Store.find_by(id: params[:id])
  end

  def edit
    @store = Store.find_by(id: params[:id])
  end

  def update
    @store = Store.find_by(id: params[:id])
@store.update(store_params)
redirect_to stores_path
  end

  

  def destroy
    store = Store.find_by(id: params[:id])
    store.destroy
    redirect_to stores_path

  end

  def new
    @store = Store.new
  end

  def create
    store = Store.create(store_params)
    redirect_to stores_path
  end
  
private
def store_params
params.require(:store).permit(:name, :location)
end

end
