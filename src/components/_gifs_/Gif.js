import React from 'react';
import { StyledGifThumb} from '../../styles/StyledGif';
import GifImage from './GifImage';
export default function Gif({ gif }) {
    const { title, images, bitly_gif_url } = gif;
    const { mp4, url, width, height} = images.original_mp4;

    return (
        <StyledGifThumb>
            <div>
                <div className="div-img">
                    <video >
                        <source src={mp4} />
                    </video>
                </div>
                <div className="gif-head">
                    <p>{title}</p>
                    <p>{url}</p>
                </div>
            </div>
        </StyledGifThumb>
    )
}

