class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.text :name
      t.text :description
      t.integer :hour_open
      t.integer :hour_close
      t.belongs_to :user

      t.timestamps
    end
  end
end
