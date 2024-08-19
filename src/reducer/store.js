import {configureStore} from '@reduxjs/toolkit';
import MemberSlice from './slices/MemberSlice';

const Store = configureStore({
    reducer: {
        member: MemberSlice
    }
})

export default Store 