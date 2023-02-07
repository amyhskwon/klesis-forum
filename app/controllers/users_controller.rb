class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    wrap_parameters format: []

    def show
        current_user = User.find(session[:user_id])
        if current_user
            render json: current_user
        else
            render json: { error: "Not authorized"}, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation, :photo, :grad_year, :phone_number)
    end

end
