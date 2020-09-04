# these modules are just our namespaces
module Api
    module V1
        class UsersController < ApplicationController
            # The show all feature
            def index
                # I ordered the data such that it was descending based on the date created
                users = User.order('created_at DESC');
                # display all the json
                render json: users
            end

            # show specific value
            def show 
                user = User.find(params[:id])
                # this function will actually send the message and recipe
                user.final_send
                render json: {status: 'SUCCESS', message:'Loaded user', data:user},status: :ok
            end

            def create
                user = User.new(user_params)
                if user.save
                    render json: {status: 'SUCCESS', message:'User Fridge Saved', data:user},status: :ok
                else
                    render json: {status: 'ERROR', message:'Unable to Save', data:user.errors},status: :unprocessable_entity
                end
            end

            def destroy
                user = User.find(params[:id])
                user.destroy
                render json: {status: 'SUCCESS', message:'Deleted Article', data:user},status: :ok
            end

            def update
                user = User.find(params[:id])
                if user.update_attributes(user_params)
                    render json: {status: 'SUCCESS', message:'User Fridge Updated', data:user},status: :ok
                else
                    render json: {status: 'ERROR', message:'User Fridge Not Updated', data:user.errors},status: :unprocessable_entity
                end
            end
            # parameter must be whitelisted before used
            private
            def user_params
                params.permit(:name, :number, :body)
            end
        end
    end
end