class TeachersController < ApplicationController
  def index
    @teachers = Teacher.all
  end

  def show
    @teacher = Teacher.find_by(id: params[:id])
  end

  def new
    @teacher = Teacher.new
  end

  def create
    Teacher.create(params.require(:teacher).permit(:name, course_ids: []))
    redirect_to teachers_path
  end

  def edit
    @teacher = Teacher.find_by(id: params[:id])
  end

  def update
    teacher = Teacher.find_by(id: params[:id])
    teacher.update(params.require(:teacher).permit(:name, course_ids: []))
    redirect_to teachers_path
  end

  def destroy
    teacher = Teacher.find_by(id: params[:id])
    teacher.destroy
    redirect_to teachers_path
  end
end
