import { Container} from "@mui/material";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import RecipeList from "./RecipeList";

function Search({ dish }) {
    const [searchField, setSearchField] = useState("");
    const filtered = dish?.filter((entry) => {
        return entry.name.toLowerCase().includes(searchField.toLowerCase()) ||
            entry.ingredientList.toLowerCase().includes(searchField.toLowerCase());
      
    });
    return (

        <Container>
            <Form className="d-flex">
                <Form.Control
                    size="x-lg"
                    type="search"
                    placeholder="Search for Your Recipe!"
                    onChange={(e) => setSearchField(e.target.value)}
                />
            </Form>
            <RecipeList dishes={filtered} />
        </Container>
    );
};

export default Search;