class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.string :photo
      t.integer :grad_year
      t.integer :phone_number
      t.boolean :admin

      t.timestamps
    end
  end
end
