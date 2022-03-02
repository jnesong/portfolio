class CreateJourneys < ActiveRecord::Migration[6.1]
  def change
    create_table :journeys do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :date
      t.integer :drink_id
      t.text :entry
      t.string :month
      t.integer :year

      t.timestamps
    end
  end
end
