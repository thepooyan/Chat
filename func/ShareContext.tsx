import React, { useState } from 'react'

export const ShareContext = React.createContext();

export const ShareContextProvider = (props) => {

	const share = {};

	return <ShareContext.Provider value={share}>{props.children}</ShareContext.Provider>
}