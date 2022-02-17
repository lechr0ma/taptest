import React from 'react';
import './App.css';
import {
    Routes,
    Route
} from "react-router-dom";

import MainPage from "./Components/pages/MainPage";
import ContactsPage from "./Components/pages/ContactsPage";
import SendPage from "./Components/pages/SendPage";
import ItemListPage from "./Components/pages/ItemListPage";
import BasketPage from "./Components/pages/BasketPage";
import TotalPage from "./Components/pages/TotalPage";
import LoadPage from "./Components/pages/LoadPage";
import photo from "./img/item.png";
const itemsMass = [
    {id: 1, image: photo, description:'Диван-кровать, раскладывается 1', netto: '23', brutto: '26', volume: '2', cost: '21 000 руб.' },
    {id: 2, image: photo, description:'Диван-кровать, раскладывается 2', netto: '23', brutto: '26', volume: '2', cost: '22 000 руб.' },
    {id: 3, image: photo, description:'Диван-кровать, раскладывается 3', netto: '23', brutto: '26', volume: '2', cost: '23 000 руб.' },
    {id: 4, image: photo, description:'Диван-кровать, раскладывается 4', netto: '23', brutto: '26', volume: '2', cost: '24 000 руб.' },
    {id: 5, image: photo, description:'Диван-кровать, раскладывается 5', netto: '23', brutto: '26', volume: '2', cost: '25 000 руб.' },
    {id: 6, image: photo, description:'Диван-кровать, раскладывается 6', netto: '23', brutto: '26', volume: '2', cost: '26 000 руб.' },
    {id: 7, image: photo, description:'Диван-кровать, раскладывается 77', netto: '23', brutto: '26', volume: '2', cost: '27 000 руб.' },
    {id: 8, image: photo, description:'Диван-кровать, раскладывается 78', netto: '23', brutto: '26', volume: '2', cost: '27 000 руб.' },
    {id: 9, image: photo, description:'Диван-кровать, раскладывается 79', netto: '23', brutto: '26', volume: '2', cost: '27 000 руб.' },
    {id: 10, image: photo, description:'Диван-кровать, раскладывается 744422', netto: '23', brutto: '26', volume: '2', cost: '27 000 руб.' },
    {id: 11, image: photo, description:'Диван-кровать, раскладывается 766633', netto: '23', brutto: '26', volume: '2', cost: '27 000 руб.' },
    {id: 12, image: photo, description:'Диван-кровать, раскладывается 7555222', netto: '23', brutto: '26', volume: '2', cost: '27 000 руб.' },
    {id: 13, image: photo, description:'Диван-кровать, раскладывается 7444412123', netto: '23', brutto: '26', volume: '2', cost: '27 000 руб.' },
    {id: 14, image: photo, description:'Диван-кровать, раскладывается 74442233', netto: '23', brutto: '26', volume: '2', cost: '27 000 руб.' },]
export {itemsMass};


function App() {
    return(
      <div className='App'>
          <Routes>
              <Route path='/contacts' element={<ContactsPage/>}/>
              <Route exact path='/' element={<MainPage/>}/>
              <Route path = '/sended' element={<SendPage/>}/>
              <Route path = '/basket' element={<BasketPage/>}/>
              <Route path = '/list' element={<ItemListPage/>}/>
              <Route path = '/load' element={<LoadPage/>}/>
              <Route path = '/total' element={<TotalPage/>}/>
          </Routes>
      </div>
  )
}

export default App;
