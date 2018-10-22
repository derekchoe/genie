import { connect } from 'react-redux';
import Signup from './signup';
import { signupUser } from '../../action/session_actions';

const mapStateToProps = state => ({
  session: state.session,
  errors: Object.values(state.errors)
});

const mapDispatchToProps = dispatch => ({
  signupUser: userData => dispatch(signupUser(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
