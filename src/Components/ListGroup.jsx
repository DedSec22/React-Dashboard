import { MouseEvent } from "react";

function ListGroup() {
    let items = [ 'New York', "San Francisco", 'Tokyo', 'London', 'Paris' ];

    // items = [];

    // CAN  USE FUNCTION TO USE IF CONDITION BELOW
    const ifEmpty = () => {
        return items.length === 0 ? <p>No Items Found</p> : null;
    }

    const ClickHandle = (event) => console.log(event);

    return (
        <>
            <h1>List</h1>

            {ifEmpty()}

            <ul className="list-group">
                {/* {items.map(item => <li key={item} className="list-group-item"
                onClick={(event) => { console.log(event)}}>{item}</li>)} */}

                {/* IF LOGIC GETS MORE COMPLEX OF EVENT HANDLER IT IS GUIDED TO NOT TO
                WRITE IT IN JSX MARKUP INSTEAD MAKE A SEPERATE FUNCTION
                BELOW IS EXAMPLE OF THAT */}

                {items.map(item => <li key={item} className="list-group-item"
                onClick={(ClickHandle)}>{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;
