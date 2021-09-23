class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :image_url
      t.string :bio
      t.belongs_to :series, null: false, foreign_key: true

      t.timestamps
    end
  end
end
