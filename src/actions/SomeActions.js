import newAction from './actionCreatorFactory';

let actions = {};

newAction('RESET_STATE', actions); // => will generate actions.resetState
newAction('ANOTHER_ACTION', actions);

export default actions;
