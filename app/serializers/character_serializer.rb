class CharacterSerializer
  include JSONAPI::Serializer
  attributes :name, :image_url, :bio, :series_id
end
