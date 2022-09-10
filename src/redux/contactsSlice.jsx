import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },

  reducers: {
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    removeContacts(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContacts, removeContacts, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;

// Selectors
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
