class AddDrinkToJourneys < ActiveRecord::Migration[6.1]
  def change
    add_column :journeys, :drink, :string
  end
end
