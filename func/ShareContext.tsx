import React, { useState } from 'react'

export const ShareContext = React.createContext({});

export const ShareContextProvider = (props:{children:string}) => {

	const [share, setShare] = useState({})

	return <ShareContext.Provider value={[share, setShare]}>{props.children}</ShareContext.Provider>
}