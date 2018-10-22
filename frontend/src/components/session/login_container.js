import { connect } from 'react-redux';
import Login from './login';
import { loginUser } from '../../action/session_actions';

const mapStateToProps = state => ({
  session: state.session,
  errors: Object.values(state.errors)
});

const mapDispatchToProps = dispatch => ({
  loginUser: userData => dispatch(loginUser(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
