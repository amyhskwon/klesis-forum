class InterestGroup < ApplicationRecord
    has_many :memberships, dependent: :destroy
    has_many :users, through: :memberships
    has_many :messages, dependent: :destroy

    enum weekday: [:Monday, :Tuesday, :Wednesday, :Thursday, :Friday, :Saturday, :Sunday]
end
