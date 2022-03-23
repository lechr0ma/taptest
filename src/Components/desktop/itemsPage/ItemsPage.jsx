import React, {useState} from 'react';
import ItemsList from "./ItemsList";
import ItemOptions from "./ItemOptions";

const ItemsPage = () => {
    const [currentItem, setCurrent] = useState({})
    const [isItem, setIsItem] = useState(false)

    function setItem(item) {
        setCurrent(item)
        setIsItem(true)
    }

    return (
        <article className='itemList__container'>
            <ItemsList setItem={setItem}/>
            <ItemOptions item={currentItem} isItem={isItem}/>
        </article>
    );
};

export default ItemsPage;