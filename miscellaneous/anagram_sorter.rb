# This takes an array of words and returns an array of arrays, where the arrays
# are grouped by whether are not they are anagrams of each other. It does this by 
# creating a temporary hash with the alphabetized letters of the word as the key.
# For instance, ["tea", "eat"] would temporarily be in a has of "aet" => ["tea", "eat"]

def create_anagrams_list(list)
  temp_hash = {}
  list.each do |word|
    key = find_key(word)
    temp_hash.has_key?(key) ? temp_hash[key] << word : temp_hash[key] = [word]
  end
  temp_hash.values
end

def find_key(word)
  word.chars.sort.join
end

test_anagrams = ["tea", "ate", "eat", "dog", "god", "dear"]
puts create_anagrams_list(test_anagrams) == [["tea", "ate", "eat"], ["dog", "god"], ["dear"]]
# returns true