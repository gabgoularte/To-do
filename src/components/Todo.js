import React, { useEffect, useState } from "react";
import Item from "./Item"
import List from "./List";
import TodoForm from "./TodoForm";
import Modal from "./Modal";
import './Todo.css';

const SAVED_ITEMS = "savedItems"

function Todo() {

    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));

        if (savedItems) {
            setItems(savedItems);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items])

    function onAddItem(text) {

        let item = new Item(text);
        
        setItems([...items, item]);
        onHideModal();
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(itm => itm.id !== item.id);

        setItems(filteredItems);
    }

    function onDone(item) {
        let updatedItems = items.map(itm => {
            if(itm.id === item.id) {
                itm.done = !itm.done;
            }

            return itm;
        })

        setItems(updatedItems);
    }

    function onHideModal(event) {
        setShowModal(false);
    }

    return (<div className="container">
        <header className="header">
            <h1>To-do</h1>
            <button onClick={() => setShowModal(true)} className="addButton">+</button>
        </header>
        <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
        <Modal onHideModal={onHideModal} show={showModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
    </div>);
}



export default Todo;