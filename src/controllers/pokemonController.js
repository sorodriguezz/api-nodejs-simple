const getPokemon = async (req, res) => {
  const pokemonName = req.params.name;
  try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      res.json(data);
  } catch (error) {
      res.status(500).send('Error fetching data from PokeAPI');
  }
};

module.exports = { getPokemon };