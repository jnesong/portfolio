class ChangeRecordFromTextToFloat < ActiveRecord::Migration[6.1]
  def change
    change_column :records, :hemoglobin, :float, using: 'hemoglobin::float'
    change_column :records, :wbc, :float, using: 'wbc::float'
    change_column :records, :glucose, :float, using: 'glucose::float'
    change_column :records, :sodium, :float, using: 'sodium::float'
    change_column :records, :potassium, :float, using: 'potassium::float'
    change_column :records, :calcium, :float, using: 'calcium::float'
  end
end
