class TeachersController < ApplicationController
  def index
    @teachers = Teacher.all
  end

  def show
    @teacher = Teacher.find_by(id: params[:id])
  end

  def new
    @teachers = Teacher.new
  end

  def create
    teachers = Teacher.create(teacher_params)
    redirect_to teacher_path
  end

  def edit
    @teacher = Teacher.find_by(id: params[:id])
  end

  def update
    teacher = Teacher.find_by(id: params[:id])
    teacher.update(author_params)
    redirect_to teacher_path(teacher)
  end

  def destroy
    teacher = Teacher.find_by(id: params[:id])
    teacher.destroy
    redirect_to teachers_path
  end

  private

  def teacher_params
    params.require(:teacher).permit(:name, :location, :dob, :course)
  end
end
