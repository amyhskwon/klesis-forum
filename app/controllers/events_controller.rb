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

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    private

    def event_params
        params.permit(:name, :description, :location, :weekday, :time, :is_weekly)
    end
end
