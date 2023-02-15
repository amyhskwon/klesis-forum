class MessagesController < ApplicationController
    
    def index
        messages = Message.all
        render json: messages 
    end

    def create
        message = @current_user.messages.create!(message_params)
        render json: message, status: :created
    end

    private

    def message_params
        params.permit(:user_id, :interest_group_id, :content, :time)
    end
end
