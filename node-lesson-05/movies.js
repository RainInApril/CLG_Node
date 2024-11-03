const movies = [
    { title: "Inception", storyline: "A skilled thief is given a chance at redemption if he can successfully perform inception." },
    { title: "Interstellar", storyline: "A team of explorers travels through a wormhole in space in an attempt to save humanity." }
];

// Function to display movies after a delay
function getMovies() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Movies List:");
            movies.forEach((movie, index) => {
                console.log(`${index + 1}. ${movie.title}: ${movie.storyline}`);
            });
            resolve();
        }, 1000); // 1-second delay
    });
}

// Function to add a new movie, returning a promise with a delay
function createMovie(movie) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (movie && movie.title && movie.storyline) {
                movies.push(movie);
                resolve("Movie added successfully!");
            } else {
                reject("Invalid movie object!");
            }
        }, 2000); // 2-second delay
    });
}

// Init function to control the async flow
async function init() {
    try {
        // Adding a new movie with createMovie
        await createMovie({ title: "The Matrix", storyline: "A hacker learns about the true nature of his reality and his role in the war against its controllers." });
        console.log("New movie created.");
        
        // Displaying movies with getMovies
        await getMovies();
    } catch (error) {
        console.error("Error:", error);
    }
}

// Run the init function
init();
