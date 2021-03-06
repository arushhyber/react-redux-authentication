import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AuthAction from '../../../applications/actions/AuthAction'

class HomePage extends Component {
  componentDidMount() {
    if (this.props.authentication.loggedIn) {
      this.props.actions.getUser()
    }
  }
  render() {
    const { name } = this.props.authentication
    return `Hosgeldin ${name}`
  }
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AuthAction, dispatch),
})

const mapStateToProps = state => ({
  authentication: state.authentication,
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
