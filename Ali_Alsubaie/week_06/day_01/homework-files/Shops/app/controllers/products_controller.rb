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

  def create
    product = Product.create(product_params)
    redirect_to products_path
  end

  def destroy
    product = Product.find_by(id: params[:id])
    product.destroy
    redirect_to products_path
  end

  def edit
    @product = Product.find_by(id: params[:id])
  end

  def update
    product = Product.find_by(id: params[:id])
    product.update(product_params)
    redirect_to product
  end

  private

  def product_params
    params.require(:product).permit(:name, :brand, :description, :price, :shop_id)
  end
end
