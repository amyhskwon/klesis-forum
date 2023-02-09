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
end
