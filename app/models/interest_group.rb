class InterestGroup < ApplicationRecord
    has_many :memberships
    has_many :users, through: :memberships
    has_many :messages

    enum :weekday,
    [:monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday]
end
