import { configureStore } from '@reduxjs/toolkit';
import MsgReducer from './MsgReducer';

  
const MsgStore = configureStore({reducer: MsgReducer})
  
export default MsgStore;