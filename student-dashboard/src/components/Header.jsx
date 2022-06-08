import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setVisual } from "../redux/reducer.js"

export const Header = () => {

    const currentPage = useSelector(state => state.visual);
    const styleCurrent = "text-sm p-2 font-bold mx-2 text-blue-600 border-b-2 border-blue-600";
    const styleNormal = "text-sm p-2 font-bold mx-2 cursor-pointer hover:text-blue-300";

    const dispatch = useDispatch();
    const menuChange = (option) => {
        dispatch(setVisual(option));
    }

    return (
        <nav className="flex p-3">
            <img width="50" height="50" src="/images/android-chrome-512x512.png" alt="studentdasboard logo" />
            <ul className="flex justify-start ml-4 items-center">
                <li className={currentPage === "bar" ? styleCurrent : styleNormal} onClick={() => { menuChange('bar') }}>Bar chart</li>
                <li className={currentPage === "line" ? styleCurrent : styleNormal} onClick={() => { menuChange('line') }}>Line diagram</li>
                <li className={currentPage === "table" ? styleCurrent : styleNormal} onClick={() => { menuChange('table') }}>Table</li>
            </ul>
        </nav>

    )
}