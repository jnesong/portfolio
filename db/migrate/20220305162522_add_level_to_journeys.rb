class AddLevelToJourneys < ActiveRecord::Migration[6.1]
  def change
    add_column :journeys, :level, :integer
  end
end
