class Message < ApplicationRecord
    belongs_to :user
    belongs_to :interest_group
end
