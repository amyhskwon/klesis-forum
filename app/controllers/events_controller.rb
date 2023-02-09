class EventsController < ApplicationController
    skip_before_action :authorize

    def index
        events = Event.all
        render json: events
    end

    def show
        event = Event.find(params[:id])
        render json: event
    end
end
