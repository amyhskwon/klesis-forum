class Membership < ApplicationRecord
    belongs_to :user
    belongs_to :interest_group

    enum :role,
    [:member, :moderator, :admin]
end
