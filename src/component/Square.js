import React, {useState} from 'react';

const Square = () => {
    const [state, setState] = useState(null);
    return (
        <button className="square" onClick={() => { setState('X'); }}>
            {state}
        </button>
    );
}
export default Square;