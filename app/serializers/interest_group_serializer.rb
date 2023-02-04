class InterestGroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :day, :time, :is_weekly
end
