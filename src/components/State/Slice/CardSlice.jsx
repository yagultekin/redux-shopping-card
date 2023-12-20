import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardItems: [],
    amount: 0, 
    total: 0,
}

const CardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        add: (state, action) => {
            //What this function does is that it checks if the item is already in the cart, if it is, it increases the amount of the item, if it is not, it adds the item to the cart.
            state.amount++;
            const cardItem = state.cardItems.find(cardItem => cardItem.id === action.payload.id);
            cardItem ? (cardItem.amount = cardItem.amount + 1) : state.cardItems.push({...action.payload, amount: 1});
        },
        increase: (state, action) => {
            state.amount++;
            const itemIndex = state.cardItems.findIndex((cardItem) => cardItem.id === action.payload.id);
            state.cardItems[itemIndex].amount += 1;
            let total = 0;
            total = state.cardItems[itemIndex].amount * state.cardItems.price;
        },
        decrease: (state, action) => {
            const itemIndex = state.cardItems.findIndex((cardItem) => cardItem.id === action.payload.id);
            //What the code below does is that it checks if the amount of the item is 0, if it is, it does not decrease the amount of the item. 
            state.cardItems[itemIndex].amount > 0 && state.cardItems[itemIndex].amount-- && state.amount--;
        },
        remove: (state, action) => {
            state.cardItems.map(cardItem => {
                if (cardItem.id === action.payload.id) {
                    state.cardItems = state.cardItems.filter(item => item.id !== cardItem.id);
                    state.amount = state.amount - cardItem.amount;
                }
            })
        },
        total: (state) => {
            let total = 0;
            state.cardItems.forEach(cardItem => {
                total += cardItem.amount * cardItem.price;
            })
            state.total = total;
        },
        clear: (state) => {
            state.cardItems = [];
            state.amount = 0;
            state.total = 0;
        }
    },
})
export const { add, increase, decrease, remove, total, clear } = CardSlice.actions;
export default CardSlice.reducer;