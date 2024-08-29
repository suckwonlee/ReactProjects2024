import ReactDOM from "react-dom/client";
import React from "react";

function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        {
            style: {
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: 'white',
                color: 'black',
                border: '2px solid coral',
                borderRadius: '5px',
                cursor: 'pointer'
            },
            ...props,
            onClick: () => setIsClicked(true)
        },
        isClicked ? 'Clicked' : 'Click here~~'
    );
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MyButton));
