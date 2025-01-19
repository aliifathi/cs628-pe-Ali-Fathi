# Input
(Describe the type of input your program takes. Include examples if applicable.)
# Input
The program takes a list of movies as input. Each movie includes details such as the title, release year, genre, and rating. The input can be provided in the form of a JSON file, user input via a command-line interface, or hardcoded data in the program. Example input:

```json
[
  {"title": "Inception", "year": 2010, "genre": "Sci-Fi", "rating": 8.8},
  {"title": "The Dark Knight", "year": 2008, "genre": "Action", "rating": 9.0},
  {"title": "Interstellar", "year": 2014, "genre": "Sci-Fi", "rating": 8.6}
]


# Process
(Explain the steps the program takes to process the input. Discuss any algorithms, transformations, or computations.)
The program processes the input by performing several operations:

Parsing the input data into a structured format.
Storing the movies in a list or array for easy access.
Allowing users to filter or sort the movie list by specific criteria such as genre, release year, or rating.
Implementing algorithms to perform operations like searching for a movie by title or retrieving the highest-rated movies.

# Output
(Describe what the program outputs. Include examples of expected results.)
1-A sorted list of movies by rating:
    1. The Dark Knight (2008) - Rating: 9.0
    2. Inception (2010) - Rating: 8.8
    3. Interstellar (2014) - Rating: 8.6

2-A filtered list of movies by genre:
    Sci-Fi Movies:
    - Inception (2010)
    - Interstellar (2014)
3-The program displays results either in the terminal or exports them to a file for further use.