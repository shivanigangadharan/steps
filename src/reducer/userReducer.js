export const userReducer = (state, action) => {
    switch (action.type) {
        case "ADD_FULLNAME":
            return { ...state, fullName: action.payload }
        case "ADD_DISPLAYNAME":
            return { ...state, displayName: action.payload }
        case "ADD_WORKSPACE_NAME":
        case "ADD_WORKSPACE_URL":
        case "ADD_PLAN_CHOICE":
        case "UPDATE_STEP":
            return { ...state, step: action.payload }
    }
}