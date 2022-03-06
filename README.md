# Pokemon Explorer

Pokemon Explorer is a minimalist website where you can explore all the pokemons!

## Pack Manager Installation

The application was built using [yarn](https://yarnpkg.com/) as its pack manager. Therefore, to install all the projects dependencies, it is important to have yarn installed in your machine.\
If you do not have yarn installed yet, please follow [this](https://yarnpkg.com/getting-started/install) installation guide.

## Application Installation
After installing yarn, just clone the project repository in your machine and within the cloned folder, run the following command to install all the necessary packages:

```
yarn install
```
Once the downloads are finished, you can start the project by running:
```
yarn dev
```
The application you be available in your localhost:3000.\
Now, just have fun exploring all the pokemons!

## Application Information
This application was developed using [Next.js](https://nextjs.org/), a React framework, with [Tailwindcss](https://tailwindcss.com/).

To provide the pokemon data for the application, the [PokéAPI](https://pokeapi.co/) was used. The requisitions were made using axios.

The project contains only one page, that can exhibit a card list of 16 pokemons or a card with detailed information about a specific pokemon. The development was made using the mobile first approach.

### Grid List

The grid list contains the Pokemon's name and its image, separated by a red divider. Once the user hovers over the component, their cursor turns into a pointer cursor, indicating that the user can click on the card. If one does so, they will be redirected to the detailed component of the clicked pokemon.

The grid was built using Tailwindcss grids, divided into columns of 4 elements, spaced with a gap of 4.

### Pokémon Detail Card

This component is shown after a user clicks on a Pokémon and contains detailed information about that little creature./

Below the name and image, are shown the pokemon Species, Types, Weight, Stats, and Moves.

For the moves, the application has a toggle arrow button that, once clicked, display all the pokemon's move. Initially, the exhibition is limited to only 5 moves. The user can also click on the arrow when all the moves are shown to exhibit only 5 moves again.

Lastly, this card contains an arrow on the top that, when clicked by the user, returns to the last page.

### Pagination

For the pagination, [react-paginate](https://github.com/AdeleD/react-paginate) was used.

Basically, this library needs that the user provides a function to handle the page change and also the total number of pages.

The function that handles the page change does a requisition to the PokéApi using the current page number times 16 (because each page "walks" from 16 to 16) to the pokemon dataset as the offset parameter in the requisition. The requisition also includes another parameter, called limit, that, as the name self explains, limits the number of pokemons returned by the API.

The pagination component was also stylized with Tailwindcss to do the numbers be exhibited in rows and to mark the current page with red.

### Search Bar

The search bar was built using only Tailwindcss, and once the user clicks on the search button, the application makes a requisition to the PokeApi using the input value as a parameter.

If the search is successful, the user is redirected to the found pokemon detail page. If not, an error page is shown.

### Error Component

This component is basically to inform the user that an error occurred in his search. A crying pokemon gif is shown with an informative message and a button to return to the last page.

## Contribution
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.