The input-process-output model is used by the Movie List application. It accepts a list of films as input, each of which has information on the film, including title, genre, rating, and year of release. The input may come from a JSON file, user input entered through the command line, or data that is already loaded into the application. To enable effective operations, the program organizes the data into a structured format, like a list or dictionary, after the input has been loaded. Among the actions available to users include searching for a certain movie by title, sorting them by rating, and filtering them by genre. To produce precise and pertinent results, these procedures are carried out using filtering and sorting algorithms. A smooth user experience is ensured by displaying the output as a refined list of movies based on the user's queries, such as a sorted list of the best-rated films or all films in a particular genre.



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