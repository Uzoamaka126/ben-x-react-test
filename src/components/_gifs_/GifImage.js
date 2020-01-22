import React from 'react';

export default function GifImage({ imag }) {
    const { original } = imag;
    return (
        <div>
            <img src={original} />
        </div>
    )
}