import random
import string
import nltk
import uuid
from nltk.corpus import words

# Load the list of words
word_list = words.words()

# Shuffle the words and select the number of required words
random.shuffle(word_list)
num_tags = 10000
unique_words = word_list[:num_tags]

# Function to assign the number of tags per ticket based on the given distribution
def assign_num_tags():
    rand_num = random.random()
    if rand_num <= 0.90:
        return 1
    elif rand_num <= 0.99:
        return 2
    else:
        return random.randint(3, 5)

# Generate seed.sql file
with open('seed.sql', 'w') as sql_file:
    # Insert unique tags into the tags table
    for word in unique_words:
        sql_file.write(f"INSERT INTO public.tags (value, comment) VALUES ('{word}', '{word}');\n")

    # Set the number of tickets
    num_tickets = 100000

    # Seed the tickets table and xref_tickets_tags table
    for _ in range(num_tickets):
        # Generate random ticket data
        ticket_id = uuid.uuid4()
        ticket_name = random.choice(unique_words)
        ticket_description = ' '.join(random.sample(unique_words, 5))

        # Insert the ticket into the tickets table
        sql_file.write(f"INSERT INTO public.tickets (ticket_id, name, description) VALUES ('{ticket_id}', '{ticket_name}', '{ticket_description}');\n")

        # Assign tags to the ticket based on the given distribution
        num_tags_per_ticket = assign_num_tags()
        ticket_tags = random.sample(unique_words, num_tags_per_ticket)

        # Insert the ticket-tag associations into the xref_tickets_tags table
        for tag in ticket_tags:
            sql_file.write(f"INSERT INTO public.xref_ticket_tag (ticket_id, tag_value) VALUES ('{ticket_id}', '{tag}');\n")

print("seed.sql file generated successfully!")
