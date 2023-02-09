class User < ApplicationRecord
    has_secure_password
    has_many :membership
    has_many :interest_groups, through: :membership
    has_many :messages
    has_many :rsvps
    has_many :events, through: :rsvps
end
