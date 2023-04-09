import random
import string
import nltk
from nltk.corpus import words

# Load the list of words
word_list = words.words()

# Shuffle the words and select the number of required words
random.shuffle(word_list)
num_rows = 100
unique_words = word_list[:num_rows]
print("creating seed file...")

# Generate seed.sql file
with open('seed.sql', 'w') as sql_file:
    for word in unique_words:
        # Use the same word for both value and comment columns
        sql_file.write(f"INSERT INTO public.tags (value, comment) VALUES ('{word}', '{word}');\n")

print("seed.sql file generated successfully!")
