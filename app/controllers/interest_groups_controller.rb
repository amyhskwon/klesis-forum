class InterestGroupsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        igs = InterestGroup.all
        render json: igs
    end

    def show
        ig = InterestGroup.find(params[:id])
        render json: ig, serializer: InterestGroupMessagesSerializer
    end

    def create
        ig = @current_user.interest_groups.create!(interest_group_params)
        render json: ig, status: created
    end

    private

    def interest_group_params
        params.permit(:name, :description, :location, :weekday, :time, :is_weekly)
    end
end
