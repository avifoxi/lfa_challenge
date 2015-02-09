require 'sinatra'
require 'json'
require 'shotgun'

require_relative './fake_db/models.rb'

Tilt.register Tilt::ERBTemplate, 'html.erb'

students = @students
books = @faux_nosql_catalog
cat_sear = @category_searchables
kl = @klasses
te = @teachers

get '/' do 
  erb :index 
end

get '/books' do
	content_type :json
	books.to_json
end

get '/category_searchables' do 
	content_type :json
	cat_sear.to_json
end

get '/students' do 
	content_type :json
	students.to_json
end

get '/klasses' do 
	content_type :json
	kl.to_json
end

get '/teachers' do 
	content_type :json
	te.to_json
end


