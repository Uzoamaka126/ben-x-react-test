import React from 'react';
import { StyledLoadMore } from '../../styles/StyledLoadMore';

export default function LoadMoreBtn({ text, callback }) {
    // We are going to need a callback that runs when the button is clicked
    return (
        <StyledLoadMore type="button" onClick={callback}>      
            {text}
        </StyledLoadMore>
    )
}