import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    uid: "text",
    userData: [],
};
const mainSlice = createSlice({
    name: "mainSlice",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        editUserData: (state, action) => {
            const userId = action.payload.id;
            const updatedFields = action.payload;
            const userIndex = state.userData.findIndex((user) => user.id === userId);
            if (userIndex !== -1) {
                state.userData[userIndex] = {
                    ...state.userData[userIndex],
                    name: updatedFields.name,
                    email: updatedFields.email,
                    phone: updatedFields.phone,
                    address: {
                        ...state.userData[userIndex].address,
                        city: updatedFields.city,
                        zipcode: updatedFields.zipcode,
                    },
                };
            }
            else {
                console.error(`User with id ${userId} not found.`);
            }
        },
        deleteUserData: (state, action) => {
            const allDataExceptDeleted = state.userData?.filter((item) => {
                return item.id !== action.payload;
            });
            state.userData = allDataExceptDeleted;
        },
        addUserData: (state, action) => {
            const dataToAdd = action.payload;
            if (dataToAdd) {
                const lastId = state.userData.length > 0
                    ? state.userData[state.userData.length - 1].id
                    : 0;
                const newUser = {
                    id: lastId + 1,
                    name: dataToAdd.name,
                    username: dataToAdd.username || "",
                    email: dataToAdd.email,
                    phone: dataToAdd.phone,
                    website: dataToAdd.website || "",
                    address: {
                        street: dataToAdd.street || "",
                        suite: dataToAdd.suite || "",
                        city: dataToAdd.city,
                        zipcode: dataToAdd.zipcode,
                        geo: {
                            lat: dataToAdd.lat || "0",
                            lng: dataToAdd.lng || "0",
                        },
                    },
                    company: {
                        name: dataToAdd.companyName || "",
                        catchPhrase: dataToAdd.catchPhrase || "",
                        bs: dataToAdd.bs || "",
                    },
                };
                state.userData = [...state.userData, newUser];
            }
            else {
                console.error("No data provided for the new user.");
            }
        },
    },
});
export const { setUserData, editUserData, deleteUserData, addUserData } = mainSlice.actions;
export default mainSlice.reducer;
