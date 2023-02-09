class Event < ApplicationRecord
    has_many :rsvps
    has_many :users, through: :rsvps

    enum weekday: [:monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday]
end
