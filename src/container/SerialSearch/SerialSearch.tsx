import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { AppDispatch, RootState } from "../../app/store";
import { fetchData, changeValue } from "./serialSearchSlice";

const SerialSearch: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const [inputValue, setInputValue] = useState<string>('');
    const [isLinksVisible, setIsLinksVisible] = useState<boolean>(true);
    const results= useSelector((state: RootState) => state.showReducer.results);

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

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Поиск сериалов</h1>
            <input className="form-control mb-4"
                   type="text"
                   value={inputValue}
                   onChange={handleInputChange}
                   placeholder="Введите название сериала"
            />
            {isLinksVisible && results.length > 0 && (
                <div>
                    {results.map((show, index) => (
                        <div className="mb-1" key={index}>
                            <Link
                                className="btn btn-outline-primary btn-block"
                                to={`/shows/${show.id}`}
                                onClick={handleLinkClick}
                            >
                                {show.name}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SerialSearch;


