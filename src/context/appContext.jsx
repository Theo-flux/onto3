import React, { useState } from 'react'

const AppContext = React.createContext();

function AppProvider({children}){

    const [isModalOpen, setModalOpen] = useState(false);

    function handleModal(){
        setModalOpen(!isModalOpen);
    }

    return(
        <AppContext.Provider value={{
            isModalOpen:isModalOpen,
            handleModal: handleModal

        }}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};