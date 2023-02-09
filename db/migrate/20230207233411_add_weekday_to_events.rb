class AddWeekdayToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :weekday, :integer
  end
end
