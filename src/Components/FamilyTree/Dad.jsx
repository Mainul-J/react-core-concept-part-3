import React from 'react';
import Myself from './Myself';
import Sis from './Sis';
import Brother from './Brother';
import './FamilyTree.css';

const Dad = ({asset}) => {
    return (
        <div>
            <h3>Dad</h3>
            <section className='flex'>
                <Myself asset={asset}></Myself>
                <Sis></Sis>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Dad;