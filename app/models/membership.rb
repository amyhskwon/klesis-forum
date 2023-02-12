class Membership < ApplicationRecord
    belongs_to :user
    belongs_to :interest_group

    validates :interest_group_id, uniqueness: {scope: :user_id}
end
