import React, { useState } from 'react'

export const ShareContext = React.createContext({});

export const ShareContextProvider = ({children}) => {

	const [share, setShare] = useState({})

	return <ShareContext.Provider value={[share, setShare]}>{children}</ShareContext.Provider>
}