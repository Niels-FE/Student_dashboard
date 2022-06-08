import React from 'react';

export const Header = (data) => {

    return (
        <nav className="flex p-3">
            <img width="50" height="50" src="/images/android-chrome-512x512.png" alt="studentdasboard logo" />
            <ul className="flex justify-start ml-4 items-center">
                <li className="text-sm p-2 font-bold text-blue-600 border-b-2 border-blue-600 mx-2">Bar chart</li>
                <li className="text-sm p-2 font-bold mx-2">Line diagram</li>
                <li className="text-sm p-2 font-bold mx-2">Table</li>
            </ul>
        </nav>
    )
}