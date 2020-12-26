import { useState, useRef } from "react";

const Draganddrop = () => {
    const draggingItem = useRef();
    const dragOverItem = useRef();

    const [lists, setLists] = useState([
        "Reactjs",
        "Redux",
        "Nodejs",
        "Html",
        "CSS",
        "JavaScript"
    ]);

    const handleDragStart = (e,index) => {
        console.log(index);
        draggingItem.current = index;
    };
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    const handleDragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);
        const listCopy = [...lists];
        console.log(draggingItem.current, dragOverItem.current);
        const draggingItemContent = listCopy[draggingItem.current];
        listCopy.splice(draggingItem.current, 1);
        listCopy.splice(dragOverItem.current, 0, draggingItemContent);

        draggingItem.current = dragOverItem.current;
        dragOverItem.current = null;
        setLists(listCopy);
    };
    
    return (
        <div className="drag-container">
	        {
                lists &&
                    lists.map((item, index) => (
                        <h3 key={index} 
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragOver={(e)=> handleDragOver(e)} 
                            onDragEnter={(e) => handleDragEnter(e, index)}
                            draggable
                        >
                            {item}
                        </h3>
                        )
                    )
            }
     
	    </div>
    );
};

export default Draganddrop;
