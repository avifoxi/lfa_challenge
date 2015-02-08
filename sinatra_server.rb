require 'sinatra'
require 'json'
require 'shotgun'
# require 'faker'

require_relative './fake_db/models.rb'

Tilt.register Tilt::ERBTemplate, 'html.erb'

students = @students
books = @faux_nosql_catalog
cat_sear = @category_searchables
kl = @klasses
te = @teachers
# catalog = File.read("./fake_db/catalog.txt")

# faux_nosql_catalog = JSON.parse(catalog)

# names = faux_nosql_catalog.flat_map{|k,v| faux_nosql_catalog[k]['doc']['name']}.uniq
# authors = faux_nosql_catalog.flat_map{|k,v| faux_nosql_catalog[k]['doc']['authors']}.uniq
# tags = faux_nosql_catalog.flat_map{|k,v| faux_nosql_catalog[k]['doc']['tags']}.uniq
# subjects = faux_nosql_catalog.flat_map{|k,v| faux_nosql_catalog[k]['doc']['subjects']}.uniq
# languages = faux_nosql_catalog.flat_map{|k,v| faux_nosql_catalog[k]['doc']['languages']}.uniq

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


