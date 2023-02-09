class ChangeDataTypeForStartTime < ActiveRecord::Migration[6.1]
  def change
    rename_column :events, :start_date, :weekday
  end
end
