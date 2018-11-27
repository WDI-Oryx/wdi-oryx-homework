class StudentsController < ApplicationController
  def index
    @students = Student.all
  end

  def show
    @student = Student.find_by(id: params[:id])
  end

  def create
    student = Student.create student_params
    redirect_to student_path(student)
  end

  def new
    @student = Student.new
  end

  def edit
  end

  private

  def student_params
    params.require(:student).permit(:name, :dob, :collige, :major)
  end
end
