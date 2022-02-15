import React from "react";
import Item from "../Components/static/Item";


const filteredItems = ( text, setFunction, arr, propsFunction) => {
    if (text){
     return setFunction(arr.filter(e => e.description.toUpperCase().includes(text)).map(element =>
        <Item
            key={element.id}
            item={element}
            id={element.id}
            img={element.image}
            description={element.description}
            rem={propsFunction}
            showBtn={true}
        />
    ))} else {
        return setFunction(arr.map(element =>
            <Item
                key={element.id}
                item={element}
                id={element.id}
                img={element.image}
                description={element.description}
                rem={propsFunction}
                showBtn={true}
            />))
    }
}
const filteredAndChosen = (text, setArr, setItem, setOptions, currentItem, id, arr, propsFunction) => {
    if (text){
                let foundItems = arr.filter(e => e.description.toUpperCase().includes(text));
                 setArr(foundItems.map(element => element.id === id ?
                    <Item
                        key={element.id}
                        item={element}
                        id={element.id}
                        img={element.image}
                        description={element.description}
                        rem={propsFunction}
                        showBtn={true}
                        get={true}
                    />
                    :
                    <Item
                        key={element.id}
                        item={element}
                        id={element.id}
                        img={element.image}
                        description={element.description}
                        rem={propsFunction}
                        showBtn={true}
                        get={false}
                    />
                ))
            } else {
                setArr(arr.map(element => element.id === id
                    ?
                    <Item
                        key={element.id}
                        item={element}
                        id={element.id}
                        img={element.image}
                        description={element.description}
                        rem={propsFunction}
                        showBtn={true}
                        get={true}
                    />
                    :
                    <Item
                        key={element.id}
                        item={element}
                        id={element.id}
                        img={element.image}
                        description={element.description}
                        rem={propsFunction}
                        showBtn={true}
                        get={false}
                    />
                )
            )}
            setOptions({
                show: true,
                description: currentItem.description,
                image: currentItem.image
            });
            setItem({
                    quantity: 1,
                    volume:'',
                    netto:'',
                    brutto:'',
                    cost:''}
            )
        }

export {filteredItems, filteredAndChosen};
