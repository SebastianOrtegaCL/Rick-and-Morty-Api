export const getCharacters = async() => {
    try {
        const url = `https://rickandmortyapi.com/api/character/?page=8`;
        const response = await fetch(url)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

