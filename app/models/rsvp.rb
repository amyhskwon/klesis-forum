class Rsvp < ApplicationRecord
    belongs_to :user
    belongs_to :event

    validates :event_id, uniqueness: {scope: :user_id}
end
