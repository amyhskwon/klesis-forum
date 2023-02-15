class InterestGroupMessagesSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :weekday, :time, :is_weekly, :moderator

  has_many :messages
  has_many :users
end
