class Series < ApplicationRecord
  has_many :characters

  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end
end
