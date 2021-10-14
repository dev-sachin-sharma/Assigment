import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  SINGLE_PRODUCT,
  IS_AUTHENTICATED,
} from "../actions";

const initialState = {
  products: [
    { id: "", name: "", launchedAt: "", launchSite: "", popularity: ""},
    { id: "", name: "", launchedAt: "", launchSite: "", popularity: ""},
    { id: "", name: "", launchedAt: "", launchSite: "", popularity: ""},
    { id: "", name: "", launchedAt: "", launchSite: "", popularity: ""},
    { id: "", name: "", launchedAt: "", launchSite: "", popularity: ""},
    { id: "", name: "", launchedAt: "", launchSite: "", popularity: ""},
    { id: "", name: "", launchedAt: "", launchSite: "", popularity: ""},
    { id: "", name: "", launchedAt: "", launchSite: "", popularity: ""},
    { id: "", name: "", launchedAt: "", launchSite: "", popularity: ""},
    { id: "", name: "", launchedAt: "", launchSite: "", popularity: ""},
    { id: "", name: "", launchedAt: "", launchSite: "", popularity: ""},
    { id: "", name: "", launchedAt: "", launchSite: "", popularity: ""},
    { id: "", name: "", launchedAt: "", launchSite: "", popularity: ""},
    { id: "", name: "", launchedAt: "", launchSite: "", popularity: ""},
    { id: "", name: "", launchedAt: "", launchSite: "", popularity: ""},
    { id: "", name: "", launchedAt: "", launchSite: "", popularity: ""},
    { id: "", name: "", launchedAt: "", launchSite: "", popularity: ""}
  ],
  singleProduct: {},
  formRoute: "",
  isAuth: false
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case EDIT_PRODUCT:
      const dummy = [...state.products];
      let objIndex = dummy.findIndex((obj) => obj.id === action.payload.id);
      dummy[objIndex] = { ...action.payload };
      return {
        ...state,
        products: dummy,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
        // products: action.payload
      };
    case SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: action.payload.data,
        formRoute: action.payload.route,
      };
    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuth: action.payload
      };

    default:
      return { ...state };
  }
};
