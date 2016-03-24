const initialState = {}; // if there's an elaborate initial state
                         // define it elsewhere and import it instead

export default function (state = initialState, action) {
    const actionHandler = {
        RESET_STATE: () => {
            return {};
        },
        ANOTHER_ACTION: () => {
            const newState = {
                ...state,
                ...action
            };
            delete newState.type;
            return newState;
        }
    };

    if (actionHandler[action.type]) {
        return actionHandler[action.type]();
    }
    return state;
}
