class Api::TeachersController < ApplicationController
    def index
        @teachers = Teacher.all
        render json: @teachers
    end
    def create
      @teacher = Teacher.create!(teacher_params)
      redirect_to teacher_path(@teacher)
    end
  
    def show
      @teacher = Teacher.find(params[:id])
      render json: @teacher
    end
  
    def update
      @teacher = Teacher.find(params[:id])
      @teacher.update!(teacher_params)
      redirect_to teacher_path(@teacher)
    end
  
    def destroy
      @teacher = Teacher.find(params[:id])
      @teacher.destroy
      redirect_to teachers_path
    end
    private
    
      def teacher_params
        params.require(:teacher).permit(:name, :email, :image)
      end
end
