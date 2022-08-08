import React from 'react';

const Title = ({ text }) => {
    return (
        <div>
            <h1 className='text-4xl font-semibold text-prsblue  tracking-tighter' > {text} </h1>
        </div>
    );
}

export default Title;