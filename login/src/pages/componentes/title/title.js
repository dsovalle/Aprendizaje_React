import React from 'react';

const Title = ({ text }) => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-prsblue  tracking-tighter grid place-items-center' > {text} </h1>
        </div>
    );
}

export default Title;