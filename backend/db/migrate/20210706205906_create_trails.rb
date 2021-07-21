class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.text :name, required: true
      t.text :description, required: true
      t.string :open_at, required: true
      t.string :close_at, required: true
      t.belongs_to :user, required: true
      t.timestamps
    end
  end
end
