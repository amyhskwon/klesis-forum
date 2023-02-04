class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :start_date, :end_date, :is_weekly
end
