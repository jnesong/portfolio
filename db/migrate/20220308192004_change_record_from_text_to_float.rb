class ChangeRecordFromTextToFloat < ActiveRecord::Migration[6.1]
  def change
    change_column :records, :potassium, :float
    change_column :records, :sodium, :float
    change_column :records, :calcium, :float
    change_column :records, :wbc, :float
    change_column :records, :glucose, :float
    change_column :records, :hemoglobin, :float
  end
end
