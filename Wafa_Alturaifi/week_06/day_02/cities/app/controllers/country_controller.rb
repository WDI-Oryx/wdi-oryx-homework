class CountryController < ApplicationController
  def index
    @countrys = Country.all
  end

  def show
    @country = Country.find_by(id: params[:id])
  end

  def new
    @country = Country.new
  end

  def create
    country = country.update(country_params)
    redirect_to countrys_path
  end

  def edit
    @country = Country.find_by(id: params[:id])
  end

  def update
    country = Country.find_by(id: params[:id])
    country.update(country_params)
    redirect_to country_path(country)
  end

  def destroy
    country = Country.find_by(id: params[:id])
    country.destroy
    redirect_to countrys_path
  end

  private

  def country_params
    params.require(:author).permit(:name, :capital, :currency, :languge)
  end
end
