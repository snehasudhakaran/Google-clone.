import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../pages/searchPage.css';
import { Search } from "./search";


function SearchPageHeader() {
    return (

        // Search Page header
        <header className="searchPage_header">
            <Link to='/'>
                <img className='searchPage_logo' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'></img>
            </Link>
            <div className="searchPage_headerbody">
                <Search hiddenButtons />
                <div className="searchPage_options">
                    <div className="searchPage_optionsLeft">
                        <div className="searchPage_option">
                            <SearchIcon />
                            <Link to="/all">All</Link>
                        </div>
                        <div className="searchPage_option">
                            <DescriptionIcon />
                            <Link to="/news">News</Link>
                        </div>
                        <div className="searchPage_option">
                            <ImageIcon />
                            <Link to="/images">Images</Link>
                        </div>
                        <div className="searchPage_option">
                            <LocalOfferIcon />
                            <Link to="/shopping">shopping</Link>
                        </div>
                        <div className="searchPage_option">
                            <RoomIcon />
                            <Link to="/maps">maps</Link>
                        </div>
                        <div className="searchPage_option">
                            <MoreVertIcon />
                            <Link to="/more">more</Link>
                        </div>
                    </div>

                    <div className="searchPage_optionsRight">
                        <div className="searchPage_option">
                            <Link to='/settings'>Settings</Link>
                        </div>
                        <div className="searchPage_option">
                            <Link to='/tools'>Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default SearchPageHeader;