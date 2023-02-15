class InterestGroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :weekday, :time, :is_weekly, :moderator

  has_many :memberships
  has_many :users
end
