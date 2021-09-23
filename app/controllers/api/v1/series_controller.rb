module Api
  module V1
    class SeriesController < ApplicationController
      protect_from_forgery with: :null_session
      before_action :find_series, only: [:show, :update, :destroy]

      def index
        @series = Series.all
        render json: SeriesSerializer.new(@series, characters).serializable_hash.to_json
      end

      def show
        # series = Series.find_by(slug: params[:slug])
        render json: SeriesSerializer.new(@series, characters).serializable_hash.to_json
      end

      def create
        @series = Series.new(series_params)

        if @series.save
          render json: SeriesSerializer.new(@series).serializable_hash.to_json
        else
          render json: {error: @series.error.messages}, status: 422
        end
      end

      def update
        if @series.update(series_params)
          render json: SeriesSerializer.new(@series, characters).serializable_hash.to_json
        else
          render json: {error: @series.error.messages}, status: 422
        end
      end

      def destroy
        if @series.destroy
          head :no_content
        else
          render json: {error: @series.error.messages}, status: 422
        end
      end

      private

      def series_params
        params.require(:series).permit(:name, :image_url, :description)
      end

      def find_series
        @series = Series.find_by(slug: params[:slug])
      end

      def characters
        @characters ||= {include: %i[characters]}
      end
      
    end
  end
end