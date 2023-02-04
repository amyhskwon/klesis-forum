class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :description
      t.string :location
      t.datetime :start_date
      t.datetime :end_date
      t.boolean :is_weekly

      t.timestamps
    end
  end
end
