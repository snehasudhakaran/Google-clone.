import React, { useState } from "react";
import './search.css';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../stateProvider.js";
import { actionTypes } from "../reducer.js";


// Google Search functionality
export function Search({ hiddenButtons = false }) {

    const[{},dispatch]  = useStateValue();
    const [input, setInput] = useState('');
    const Navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();

        if(input){

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        });

        // navigation to Search page
        Navigate("/search")
        }else{
            console.log("type something")
        }

        
    };

    return (

        // search Input 
        <form className='search'>
            <div className="search_input">
                <SearchIcon className='search_inputIcon' />
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <KeyboardVoiceIcon />
            </div>

            {!hiddenButtons ? (
                <div className="search_buttons">
                    <button type='submit' onClick={search} variant='outlined' >Google Search</button>
                    <button>I'm Feeling Lucky</button>
                </div>
            ) : (
                <div className="search_buttons search_buttonsHidden">
                    <button type='submit' onClick={search} variant='outlined' >Google Search</button>
                    <button>I'm Feeling Lucky</button>
                </div>
            )}
        </form>

    )
};

