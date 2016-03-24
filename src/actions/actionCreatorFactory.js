// convert `ACTION_TYPE` to `actionType`
// and assign the action creator with that name
// to the actionCreatorNamespace
export default (ACTION_TYPE, actionCreatorNamespace) => {
    let actionName = ACTION_TYPE.toLowerCase()
                                .replace(
                                    /_(.)/g,
                                    (str, match) => match.toUpperCase()
                                );
    actionCreatorNamespace[actionName] = (...actionData) => {
        return {
            type: ACTION_TYPE,
            ...actionData
        }
    };
};
