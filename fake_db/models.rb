require 'faker'
require 'json'

catalog = File.read("./fake_db/catalog.txt")

@faux_nosql_catalog = JSON.parse(catalog)

@klasses = [
	{
		grade: 'PRE-K-GRADE-2',
		homework: [],
		teacher_id: 1
	}, 
	{
		grade: 'GRADES-3-5',
		homework: [],
		teacher_id: 2
	}, 
	{
		grade: 'GRADES-6-8',
		homework: [],
		teacher_id: 1
	}
]

@students = (1..10).each_with_object([]) do |i, arr|
	arr << {
		id: i,
		name: Faker::Name.name,
		favorite_books: [@faux_nosql_catalog.keys.sample, @faux_nosql_catalog.keys.sample],
		klass: @klasses.sample[:grade]
	}
end

@teachers = [
	{
		name: Faker::Name.name,
		id: 1
	},
	{
		name: Faker::Name.name,
		id: 2
	}
]



names = @faux_nosql_catalog.flat_map{|k,v| @faux_nosql_catalog[k]['doc']['name']}.uniq
authors = @faux_nosql_catalog.flat_map{|k,v| @faux_nosql_catalog[k]['doc']['authors']}.uniq
tags = @faux_nosql_catalog.flat_map{|k,v| @faux_nosql_catalog[k]['doc']['tags']}.uniq
subjects = @faux_nosql_catalog.flat_map{|k,v| @faux_nosql_catalog[k]['doc']['subjects']}.uniq
languages = @faux_nosql_catalog.flat_map{|k,v| @faux_nosql_catalog[k]['doc']['languages']}.uniq

@category_searchables = {
	name: names,
	authors: authors,
	tags: tags,
	subjects: subjects,
	languages: languages
}


