import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  items: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      return state.items.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContact = (state) => state.contacts.items;
