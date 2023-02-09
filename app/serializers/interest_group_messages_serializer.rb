class InterestGroupMessagesSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :weekday, :time, :is_weekly

  has_many :messages
end
