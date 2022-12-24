import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { FormControlLabel, FormGroup, Checkbox, AccordionSummary, Accordion} from '@mui/material';
import "../styles/recipe.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//Baking
//Meat
//Condiments
//Drinks
//Produce
//Misc
//Dairy

const RecipeList = ({ dishes, props }) => {

    const handleBakingChange = (e) => {
      
    };
    const handleMeatChange = () => {
      
    };
    const handleCondimentsChange = () => {
       
    };
    const handleDrinksChange = () => {
       
    };

    const handleDairyChange = () => {
       
    };

    const handleProduceChange = () => {
       
    };

    const handleMiscChange = () => {
       
    };

    return (
        <>

        <Container id = "container">
        <Accordion sx={{ maxWidth: 300 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h5>Filtered By Ingredient Group</h5>
        </AccordionSummary>
                <FormGroup>
            
                    <FormControlLabel value="Baking" control={
                        <Checkbox onChange={handleBakingChange} />} 
                            label="Baking" />

                    <FormControlLabel value="Meat" control={
                        <Checkbox onChange={handleMeatChange} />}
                            label="Meat" />

                    <FormControlLabel value="Condiment" control={
                        <Checkbox onChange={handleCondimentsChange} />}
                            label="Condiment" />

                    <FormControlLabel value="DairyFree" control={
                        <Checkbox onChange={handleDairyChange} />}
                            label="Dairy Free" />
                                
                    <FormControlLabel value="Drinks" control={
                        <Checkbox onChange={handleDrinksChange} />}
                            label="Drinks" />

                    <FormControlLabel value="Produce" control={
                        <Checkbox onChange={handleProduceChange} />}
                            label="Produce" />

                    <FormControlLabel value="Misc" control={
                        <Checkbox onChange={handleMiscChange} />}
                            label="Misc" />

                  
                </FormGroup>
            </Accordion>
            
<div class = "recipe">

    {dishes.map((dish) => (
        <p key={dish.id}>
        
        <Link to={dish.id} onClick="window.location.reload();">{dish.name} </Link>
           
        </p>
    ))}
</div>

</Container>
<Outlet />
</>
    );
};

export default RecipeList;



