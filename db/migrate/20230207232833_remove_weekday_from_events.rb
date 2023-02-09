class RemoveWeekdayFromEvents < ActiveRecord::Migration[6.1]
  def change
    remove_column :events, :weekday
  end
end
