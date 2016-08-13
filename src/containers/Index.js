import React, {
  Component,
  PropTypes
} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../components/Main'
import FromComponent from '../components/FromComponent'
import ResultComponent from '../components/ResultComponent.js'
import ToComponent from '../components/ToComponent'

class Index extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {actions} = this.props;
    console.log(actions);
    return <Main actions={actions}/>;
  }
}

Index.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
