class Event < ApplicationRecord
    has_many :rsvps
    has_many :users, through: :rsvps

    enum weekday: [:Monday, :Tuesday, :Wednesday, :Thursday, :Friday, :Saturday, :Sunday]
end
