import React, {useMemo} from "react";
import Item from "../Components/desktop/itemsPage/Item";
import {useSelector} from "react-redux";
import {itemsMass} from "./staticData";


const useSelected = () =>{
    const selected = useSelector(state => state.selected)
    return useMemo(() => {
        let arr = [];
        if (selected.length) {
            selected.forEach(e => {
                arr.push(e.id)
            })
            return itemsMass.filter(e => arr.indexOf(e.id) < 0)
        } else {
            return itemsMass
        }
    }, [selected])
}

const useFilteredItems = (text, id, setId) => {
    function useFilteredMass(text) {
        const arr = useSelected()
        if (text) {
            return arr.filter(e => e.description.toUpperCase().includes(text))
        } else {
            return arr
        }
    }
    const useFilteredAndChosen = (id, setId) => {
        return useFilteredMass(text).map((element)=>
            element.id === id ?
                <Item
                    key={element.id}
                    item={element}
                    id={element.id}
                    img={element.image}
                    description={element.description}
                    rem={setId}
                    get={true}
                />
                :
                <Item
                    key={element.id}
                    item={element}
                    id={element.id}
                    img={element.image}
                    description={element.description}
                    rem={setId}
                    get={false}
                />
        )

    }
    return useFilteredAndChosen(id, setId)
}
export {useFilteredItems}

