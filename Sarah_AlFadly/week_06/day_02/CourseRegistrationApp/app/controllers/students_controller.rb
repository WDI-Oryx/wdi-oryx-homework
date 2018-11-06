class StudentsController < ApplicationController
  def index
    @students = Student.all
  end

  def show
    @student = Student.find_by(id: params[:id])
  end

  def new
    @student = Student.new
  end

  def create
    Student.create(student_params)
    redirect_to students_path
  end

  def edit
    @student = Student.find_by(id: params[:id])
  end

  def update
    student = Student.find_by(id: params[:id])
    student.update(student_params)
    redirect_to student
  end

  def destroy
    student = Student.find_by(id: params[:id])
    student.delete
    redirect_to student_path
  end

  private

  def student_params
    params.require(:student).permit(:name, :student_id, :semester, course_ids: [])
  end
end
