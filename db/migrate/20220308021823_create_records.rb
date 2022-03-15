class CreateRecords < ActiveRecord::Migration[6.1]
  def change
    create_table :records do |t|
      t.text :hemoglobin
      t.text :wbc
      t.text :glucose
      t.text :sodium
      t.text :potassium
      t.text :calcium

      t.timestamps
    end
  end
end
