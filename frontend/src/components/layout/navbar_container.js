import { connect } from 'react-redux';
import { logoutUser } from '../../action/session_actions';
import Navbar from './navbar';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
