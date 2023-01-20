import { useState, useEffect } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useParams} from 'react-router-dom'

function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  //params for link
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(`YOUR_API_KEY_HERE`);
    const recipes = await data.json();
    setCuisine(recipes.results);
  }

  useEffect(() => {

    //v pages mas :/type
    getCuisine(params.type);
  }, [params.type]);


  return (
    <Grid
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
        {cuisine.map((item) => {
            return (
                <Card key={item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                </Card>  
            );
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

export default Cuisine
