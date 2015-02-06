require 'sinatra'
require 'json'
require 'shotgun'

Tilt.register Tilt::ERBTemplate, 'html.erb'


catalog = File.read("./Library\ Display/catalog.txt")

json_catalog = JSON.parse(catalog)

names = json_catalog.flat_map{|k,v| json_catalog[k]['doc']['name']}.uniq

authors = json_catalog.flat_map{|k,v| json_catalog[k]['doc']['authors']}.uniq

tags = json_catalog.flat_map{|k,v| json_catalog[k]['doc']['tags']}.uniq

subjects = json_catalog.flat_map{|k,v| json_catalog[k]['doc']['subjects']}.uniq

languages = json_catalog.flat_map{|k,v| json_catalog[k]['doc']['languages']}.uniq

get '/' do 

  @tags = tags
	@subjects = subjects
	@languages = languages
	@authors = authors

  erb :index 
end

get '/books' do
	content_type :json

  json_catalog.to_json
end

# get '/search_params' do 
# 	content_type :json
# 	{
# 		names: names
# 		authors: authors
# 		tags: tags
# 		subjects: subjects
# 		languages: languages
# 	}.to_json
# end