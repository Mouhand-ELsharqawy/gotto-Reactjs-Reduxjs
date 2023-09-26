import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const getUsers = createAsyncThunk('user/getusers',async(_,thunkAPI)=>{
    const { rejectWithValue } =thunkAPI;
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        return data;
    }catch(error){
        rejectWithValue(error.message);
    }
}) 

export const insertUser = createAsyncThunk('user/adduser',async(userData,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/users",{
            method:"POST",
            body: JSON.stringify(userData),
            headers:{
                'Content-type':'application/json; charset = UTF-8'
            }
        });
        const data = await res.json();
        return data;
    }catch(error){
        rejectWithValue(error.message)
    }
})

const userSlice = createSlice({
    name:"user",
    initialState:{users:[],isLoading:false,error:null},
    extraReducers:{
        [getUsers.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [getUsers.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.users = action.payload;
        },
        [getUsers.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        [insertUser.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [insertUser.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.users.push(action.payload);
            console.log(action.payload);
        },
        [insertUser.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})
export default userSlice.reducer;