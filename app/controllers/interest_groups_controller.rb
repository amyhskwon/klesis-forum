class InterestGroupsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        igs = InterestGroup.all
        render json: igs
    end

    def show
        ig = find_ig
        render json: ig, serializer: InterestGroupMessagesSerializer
    end

    def create
        ig = InterestGroup.create!(interest_group_params)
        render json: ig, status: :created
    end

    def update
        ig = find_ig
        ig.update!(interest_group_params)
        render json: ig, status: :updated
    end

    def destroy
        ig = find_ig
        ig.destroy
        head :no_content
    end

    private

    def find_ig
        InterestGroup.find(params[:id])
    end

    def interest_group_params
        params.permit(:name, :description, :location, :weekday, :time, :is_weekly, :moderator)
    end
end
