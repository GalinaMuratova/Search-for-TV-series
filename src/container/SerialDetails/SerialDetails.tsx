import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {AppDispatch, RootState} from '../../app/store';
import {fetchDataGetInfo} from "./serialDetailsSlice";
import './serialDetails.css';

const SerialDetails:React.FC = () => {
    const { id } = useParams();
    const dispatch: AppDispatch = useDispatch();
    const details = useSelector((state: RootState) => state.serialInformationReducer.results);
    const loading = useSelector((state:RootState) => state.serialInformationReducer.loading);

    useEffect(() => {
        dispatch(fetchDataGetInfo(Number(id)));
    }, [dispatch, id]);
    let infoBlock = (
        <div className='container d-flex justify-content-around info-serial-block'>
            <div className='img-film'>
                <img src={details.img} alt={details.name}/>
            </div>
            <div className='m-3'>
                <h2 className='serial-title'>{details.name}</h2>
                <p><span className='points'>Status:</span> {details.status}</p>
                <p><span className='points'>Language:</span> {details.language}</p>
                <p><span className='points'>Runtime of series :</span> {details.runtime}</p>
                <div dangerouslySetInnerHTML={{ __html: details.summary }} />
            </div>
        </div>
    );

    if (loading) {
        infoBlock = <div>Loading....</div>
    }

    return (
        <>
            {infoBlock}
        </>
    );
};

export default SerialDetails;
