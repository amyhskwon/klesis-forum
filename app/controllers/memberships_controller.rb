class MembershipsController < ApplicationController

    def index
        memberships = @current_user.memberships
        render json: memberships
    end

    def create
        membership = @current_user.memberships.create!(membership_params)
        render json: membership, status: :created
    end

    private

    def membership_params
        params.permit(:user_id, :interest_group_id)
    end
end
