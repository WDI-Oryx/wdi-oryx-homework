class CompaniesController < ApplicationController
  def show
    @company = Company.find_by(id: params[:id])
  end

  def index
    @companies = Company.all
  end

  def new
      @company = Company.new 
  end

  def create 
    copmany = Company.create(company_params)
    redirect_to company_path(copmany)
  end 

  def edit
    @company = Company.find_by(id: params[:id])
  end
  def update
    company = Company.find_by(id: params[:id])
    company.update(company_params)
    redirect_to company_path(company)
  end

  def destroy
    company = Company.find_by(id: params[:id])
    company.destroy
    redirect_to companies_path

  end
  private 
  def company_params
    params.require(:company).permit(:name, :type_of_company, :phone_number)
  end
end
