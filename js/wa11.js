const apiUrl = 'https://api.rawg.io/api';
const apiKey = '2d22cdd074314d5cba8e076ad508492a';

function search() {
  const searchQuery = document.getElementById('searchQuery').value;
  if (searchQuery) {
    //Making initial API call
    fetch(`${apiUrl}/games?key=${apiKey}&search=${searchQuery}`)
    //converting to json
      .then(response => response.json())
      .then(data => {
        const game = data.results[0];
        //calling getgameinfo with first result of game from json
        const gameInfo = getGameInfo(game);
        //calling displaygameinfo to show results in html
        displayGameInfo(gameInfo);
      })
      //Really simple error handling
      .catch(error => displayError('Error making request'));
  } else {
    displayError('Please enter a search query');
  }
}
//getGameInfo just parses individual bits of the returned JSON for use in displayGameInfo
function getGameInfo(game) {
  return {
    title: game.name,
    image: game.background_image,
    rating: game.rating,
    released: game.released,
    platforms: game.platforms.map(platform => platform.platform.name),
  };
}
//Displays info from API call and getGameInfo in the HTML
function displayGameInfo(gameInfo) {
    //setting HTML from separated elements in JSON
  const gameInfoDiv = document.getElementById('gameInfo');
    //We puttin that style inline for the image because I don't care about making this look pretty
  gameInfoDiv.innerHTML = `
    <h2>${gameInfo.title}</h2>
    <img src="${gameInfo.image}" alt="game image" style="width:800px;height:600px";>
    <p>Rating: ${gameInfo.rating}</p>
    <p>Released: ${gameInfo.released}</p>
    <p>Platforms: ${gameInfo.platforms.join(', ')}</p>
  `;
}
//Just setting the HTML to display that something went wrong 
function displayError(message) {
    //takes message passed from failed search and sets the error div content
        //It's only a generic error or telling the user to input a query if the string is blank
  const errorMessageDiv = document.getElementById('errorMessage');
  errorMessageDiv.textContent = message;
}
