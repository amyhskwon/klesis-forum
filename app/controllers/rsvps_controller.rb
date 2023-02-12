class RsvpsController < ApplicationController

    def index
        rsvps = Rsvp.all
        render json: rsvps
    end

    def create
        rsvp = @current_user.rsvps.create!(rsvp_params)
        render json: rsvp, status: :created
    end

    private

    def rsvp_params
        params.permit(:user_id, :event_id)
    end
end
