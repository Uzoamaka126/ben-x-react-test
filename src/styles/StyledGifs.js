import styled from 'styled-components';


export const StyledGifs = styled.div`
    width: 100%;

    form {
        // border: 1px solid red;
        width: 50%;
        min-height: 40px;
        margin: auto;


        .form-div {
            display: flex;
            align-items: center;
            height: 40px;

            input {
                width:70%;
                padding: 12px;
    
            }

            button {
                background: #0e0e0e;
                color: #fff;
                width: 20%;
                border: none;
                outline: none;
                padding: 14px 16px;

            }
        }
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-left: 30px;
        margin-right: 30px;
        width: 90%;
        margin: 30px auto;

        a {
            margin-bottom: 30px;
            margin-right: 30px;
            width: 20%;
            border: 1px solid #eee;

            .div-img {
                width: 100%;
                height: 100%;

                video {
                    width: 100%;
                height: 100%;
                }
            }
        }
    }

`;