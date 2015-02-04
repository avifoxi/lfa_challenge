require 'sinatra'
require 'json'
require 'shotgun'

Tilt.register Tilt::ERBTemplate, 'html.erb'


catalog = File.read("./Library\ Display/catalog.txt")

json_catalog = JSON.parse(catalog)

authors = json_catalog.flat_map{|k,v| json_catalog[k]['doc']['authors']}.uniq

tags = json_catalog.flat_map{|k,v| json_catalog[k]['doc']['tags']}.uniq

subjects = json_catalog.flat_map{|k,v| json_catalog[k]['doc']['subjects']}.uniq

languages = json_catalog.flat_map{|k,v| json_catalog[k]['doc']['languages']}.uniq

get '/' do

  @json_catalog = json_catalog

  @tags = tags
	@subjects = subjects
	@languages = languages

	@authors = authors

  erb :index 
end