require 'sinatra'
require 'json'
require 'shotgun'

Tilt.register Tilt::ERBTemplate, 'html.erb'


catalog = File.read("./Library\ Display/catalog.txt")

faux_nosql_catalog = JSON.parse(catalog)

names = faux_nosql_catalog.flat_map{|k,v| faux_nosql_catalog[k]['doc']['name']}.uniq
authors = faux_nosql_catalog.flat_map{|k,v| faux_nosql_catalog[k]['doc']['authors']}.uniq
tags = faux_nosql_catalog.flat_map{|k,v| faux_nosql_catalog[k]['doc']['tags']}.uniq
subjects = faux_nosql_catalog.flat_map{|k,v| faux_nosql_catalog[k]['doc']['subjects']}.uniq
languages = faux_nosql_catalog.flat_map{|k,v| faux_nosql_catalog[k]['doc']['languages']}.uniq

get '/' do 
  erb :index 
end

get '/books' do
	content_type :json

  faux_nosql_catalog.to_json
end

get '/category_searchables' do 
	content_type :json
	{
		name: names,
		authors: authors,
		tags: tags,
		subjects: subjects,
		languages: languages
	}.to_json
end