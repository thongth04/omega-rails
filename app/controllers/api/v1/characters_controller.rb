module Api
  module V1
    class CharactersController < ApplicationController
      protect_from_forgery with: :null_session
      before_action :find_character, only: [:destroy] # :show, :update

      # def show
      #   render json: CharacterSerializer.new(character).serializable_hash.to_json
      # end

      def create
        @character = series.characters.new(character_params)

        if @character.save
          render json: CharacterSerializer.new(@character).serializable_hash.to_json
        else
          render json: {error: @character.error.messages}, status: 422
        end
      end

      # def update
      #   if character.update(character_params)
      #     render json: CharacterSerializer.new(character).serializable_hash.to_json
      #   else
      #     render json: {error: character.error.messages}, status: 422
      #   end
      # end

      def destroy
        if @character.destroy
          head :no_content
        else
          render json: {error: @character.error.messages}, status: 422
        end
      end

      private

      def series
        @series ||= Series.find(params[:series_id])
      end

      def character_params
        params.require(:character).permit(:name, :image_url, :bio, :series_id)
      end

      def find_character
        @character = Character.find(params[:id])
      end
    end
  end
end