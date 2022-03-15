class Api::JourneysController < ApplicationController

    def index
        render json: @current_user.journeys.all
    end

    def show 
        journey = find_journey
        render json: journey
    end

    def create
        new_journey = @current_user.journeys.create!(journey_params)
        render json: new_journey, status: :created 
    end
    
    def update 
        past_journey = find_journey
        past_journey.update!(journey_params)
        render json: past_journey
    end

    def destroy 
        goodbye_journey = find_journey
        goodbye_journey.destroy
        head :no_content
    end

    private 

    def find_journey
        Journey.find(params[:id])
    end

    def journey_params 
        params.permit(:user, :date, :drink_id, :drink, :level, :entry, :month, :year)
    end

end
