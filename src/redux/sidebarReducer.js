/* eslint-disable */
const initialState = {
  sidebarShow: 'responsive',
  sidebarUnfoldable: false,
}

const sidebarReducer = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'SET_SIDEBAR_SHOW':
      return { ...state, sidebarShow: rest.sidebarShow }
    case 'SET_SIDEBAR_UNFOLDABLE':
      return { ...state, sidebarUnfoldable: rest.sidebarUnfoldable }
    default:
      return state
  }
}


export default sidebarReducer;

  
