import React, { useState } from 'react';

export const NameContext = React.createContext(undefined);

/*
!!!
Important Add every ContextProvider to Composer
!!!
*/
export default function NameContextProvider({children}) {
    const [name, setName] = useState({});

    const handleSet = () => {
        setName();
    }

    const actions = { handleSet };

    return (
        <NameContext.Provider value={{ ...name, ...actions }}>
            {children}
        </NameContext.Provider>
    );
};
