class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def show
    @product = Product.find_by(id: params[:id])
  end

  def new
    @product = Product.new

  end

  def edit
  end
  def create
    product = Product.create(product_params)
    redirect_to products_path
  end
def destroy
   @product = Product.find_by(id: params[:id])
    @product.destroy
    redirect_to products_path
end
  private
  def product_params
    params.require(:product).permit(:type, :price,:description,:seller_id)
    
  end
end
