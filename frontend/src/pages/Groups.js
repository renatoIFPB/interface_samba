import React from 'react';
import Tree from '../components/FileExplorer'
import './css/Groups.css'
import Main from './Main'


export default function Grupos(){
    return (
        <div>
            <Main />
            <div className="dist_top">
                <Tree />
            </div>
        </div>
    );
}