class User < ApplicationRecord
    has_secure_password
    has_many :memberships
    has_many :interest_groups, through: :memberships
    has_many :messages
    has_many :rsvps
    has_many :events, through: :rsvps
    
    enum role: [:member, :moderator, :admin]
end
