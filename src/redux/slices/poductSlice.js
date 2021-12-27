import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchProducts = createAsyncThunk(
    'book/fetchBooks',
    async () => {
        const response = await fetch('https://blooming-oasis-58661.herokuapp.com/products').then(res => res.json())
        console.log(response)
        return response
    }
)

export const fetchReviews = createAsyncThunk(
    'review/fetchReviews',
    async () => {
        const response = await fetch('https://blooming-oasis-58661.herokuapp.com/reviews').then(res => res.json())
        return response
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: {
        allProducts: [],
        allReviews: [],
        status: 'pending',
    },
    reducers: {
        updateStatus: (state) => {
            state.status = 'success';
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            state.status = 'success'
        })

        builder.addCase(fetchReviews.fulfilled, (state, action) => {
            state.allReviews = action.payload;
            state.status = 'success'
        })

    },

});

export const { updateStatus } = productSlice.actions;

export default productSlice.reducer;