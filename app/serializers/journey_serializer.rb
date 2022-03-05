class JourneySerializer < ActiveModel::Serializer
  attributes :id, :date, :drink, :level, :entry, :month, :year
end
