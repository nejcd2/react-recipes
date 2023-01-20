import { useState, useEffect } from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'

function Searched() {

    let params = useParams();

    const [searchedRecipes, setSearchedRecipes] = useState([]);
  
    const getSearched = async (name) => {
      const data = await fetch(`YOUR_API_KEY_HERE`);
      const recipes = await data.json();
      setSearchedRecipes(recipes.results);
    }
  
    useEffect(() => {
       //v pages file mas :/search
      getSearched(params.search);
    }, [params.search]);

        
    return (
        <Grid>
             {searchedRecipes.map((searchedRecipe) => {
                return (
                    <Card key={searchedRecipe.id}>
                        <img src={searchedRecipe.image} alt="" />
                        <h4>{searchedRecipe.title}</h4>
                    </Card>
                )
             })}
        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Searched
