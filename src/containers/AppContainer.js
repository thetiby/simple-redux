import { connect } from 'react-redux';
import SomeActions from '../actions/SomeActions';
import App from '../components/App';

let i = 1;

// AppContainer is a stateful component that
// decides the logic of the behvaiour
// the presentational compontent App will adopt

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
        if (i % 2) {
            dispatch(SomeActions.anotherAction('it', 'works'));
        } else {
            dispatch(SomeActions.resetState());
        }
        i = i == 1 ? 0 : 1;
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
