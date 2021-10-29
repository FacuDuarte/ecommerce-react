import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NavBar } from '../components/nav-bar/NavBar'
import { ItemListContainer } from '../components/item-list-container/ItemListContainer'
import { ItemDetailContainer } from '../components/item-detail-container/ItemDetailContainer';
const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer/>
                    </Route>
                    <Route path="/item/:itemId">
                        <ItemDetailContainer/>
                    </Route>
                    <Route path="/category/:categoryId">
                        <ItemListContainer/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes