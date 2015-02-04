require 'json'

# require_relative "./Library\ Display/catalog.txt"

catalog = File.read("./Library\ Display/catalog.txt")

@json_catalog = JSON.parse(catalog)

# puts json_catalog.length