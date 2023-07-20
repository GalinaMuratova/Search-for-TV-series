import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { AppDispatch, RootState } from "../../app/store";
import {fetchData, changeValue} from "./serialSearchSlice";
import './serialSearch.css';

const SerialSearch: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const [inputValue, setInputValue] = useState<string>('');
    const [isLinksVisible, setIsLinksVisible] = useState<boolean>(true);
    const results= useSelector((state: RootState) => state.showReducer.results);
    const loading = useSelector((state:RootState) => state.showReducer.loading)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        dispatch(changeValue(value));

        if (value.length > 3) {
            dispatch(fetchData(value));
        }
        setIsLinksVisible(true);
    };

    const handleLinkClick = () => {
        setIsLinksVisible(false);
        setInputValue('');
    };

    let serialList = (
        <>
            {results.map((show, index) => (
                <div className="mb-1" key={index}>
                    <Link
                        className="serial-links"
                        to={`/shows/${show.id}`}
                        onClick={handleLinkClick}
                    >
                        {show.name}
                    </Link>
                </div>
            ))}
        </>
    );

    if (loading) {
        serialList = <div>Loading</div>
    }

    return (
        <div className="container mt-5">
            <Link to='/' className='link-home'><h1 className="mb-4">Search for TV series</h1></Link>
            <input className="form-control mb-4"
                   type="text"
                   value={inputValue}
                   onChange={handleInputChange}
                   placeholder="Enter the name of the show"
            />
            {isLinksVisible && results.length > 0 && (
                <div>
                    {serialList}
                </div>
            )}
        </div>
    );
};

export default SerialSearch;


