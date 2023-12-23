import React from "react";
import { useStateValue } from "../stateProvider.js";
import useGoogleSearch from "../useGoogleSearch";
import SearchPageHeader from "../components/searchPageHeader";

// search functionality
export function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    // input from google search input field
    console.log(term)
    // output from google search
    console.log(data)

    return (
        <div className="searchPage">

            {/* header */}
            <SearchPageHeader />

            {/* Search Result */}
            
            {term && (
                <section className="searchPage_results">
                    <p className="searchPage_resultCount">
                        {/* Iterating through the output */}
                        About {data?.searchInformation?.formattedTotalResults} results ({data?.searchInformation?.formattedSearchTime}) for {term}
                    </p>
                    {data?.items.map(item =>
                        <div className="searchPage_result">
                            <a href={item.link}>{item.displayLink}</a>
                            <a className="searchPage_resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage_resultSnippet">{item.snippet}</p>
                        </div>
                    )}
                </section>
            )}

        </div>
    )
};