class CreateInterestGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :interest_groups do |t|
      t.string :name
      t.string :description
      t.string :location
      t.weekday :day
      t.time :time
      t.boolean :is_weekly

      t.timestamps
    end
  end
end
