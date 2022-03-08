class Api::RecordsController < ApplicationController
    skip_before_action :authenticate_user

    def index
        render json: Record.all
    end

    def create
        new_record = Record.create!(record_params)
        render json: new_record, status: :created 
    end
    
    def update 
        past_record = find_record
        past_record.update!(record_params)
        render json: past_record
    end

    def destroy 
        goodbye_record = find_record
        goodbye_record.destroy
        head :no_content
    end

    private 

    def find_record
        Record.find(params[:id])
    end

    def record_params 
        params.permit(:hemoglobin, :wbc, :glucose, :sodium, :potassium, :calcium)
    end
end
