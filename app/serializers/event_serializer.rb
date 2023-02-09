class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :weekday, :time, :is_weekly
end
