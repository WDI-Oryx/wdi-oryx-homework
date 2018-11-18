class EmployeesController < ApplicationController
  def index
     @employees = Employee.all
  end

  def show
    @employee = Employee.find_by(id: params[:id])
  end

  def new
    @employee = Employee.new 
  end

   def create 
    employee = Employee.create(employee_params)
    redirect_to employee_path(employee)
  end 

  def edit
    @employee = Employee.find_by(id: params[:id])
  end
  def update
    employee = Employee.find_by(id: params[:id])
    employee.update(employee_params)
    redirect_to employee_path(employee)
  end

  private 
  def employee_params
    params.require(:employee).permit(:name, :age, :gender, :company_id)
  end
end
