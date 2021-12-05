import { createSlice } from '@reduxjs/toolkit';
import Iit from "../vectors/ico/iit.svg"
export const appSlice = createSlice({
  name: 'app',
  initialState: {
    slideId: 0,
    channelName: null,
    slideTitle: "Title",
    slideSubTitle: "Subtitle",
    slideContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    logo: Iit,
    scroll: 0,
  },
  reducers: {
    setChannelInfo: (state,action) => {
     
     state.channelName = action.payload.channelName;
    },
    setSlideInfo: (state,action) => {
      state.slideId = action.payload.slideId;
      state.slideTitle = action.payload.slideTitle;
      state.slideSubTitle = action.payload.slideSubTitle;
      state.slideContent = action.payload.slideContent;
      state.logo = action.payload.logo;
    },
    setScrolInfo: (state,action) => {
      state.scroll = action.payload.scroll;
    },
  },
});

export const {setChannelInfo} = appSlice.actions;
export const {setSlideInfo} = appSlice.actions;
export const {setScrolInfo} = appSlice.actions;
export const selectChannelId= (state) => state.app.channelId;
export const selectChannelName= (state) => state.app.channelName;
export const selectslideTitle= (state) => state.app.slideTitle;
export const selectSubTitle= (state) => state.app.slideSubTitle;
export const selectslideContent= (state) => state.app.slideContent;
export const selectlogo= (state) => state.app.logo;
export const selectscroll= (state) => state.app.scroll;
export default appSlice.reducer;
