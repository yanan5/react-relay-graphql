import React from "react";
import API from '../api';
import linkStore from '../stores/LinkStore';
import PropTypes from 'prop-types';
let _getAppState = () => {
  return { links: linkStore.getAll() }
}
export default class Main extends React.Component {
  static propTypes = {
    limit: PropTypes.number
  }

  static defaultProps = {
    limit: 4
  }
  
  state = _getAppState();

  componentWillMount(){}
  componentDidMount(){
  	API.fetchLinks();
    linkStore.on('change', this.onChange);
  }
  componentWillUnmount() {
    linkStore.removeListener('change', this.onChange);
  }
  onChange = () => {
    console.log('4. In View');
    this.setState(_getAppState());
  }
  render() {
    let content = this.state.links.slice(0, this.props.limit).map(link => 
      (<li key={link._id}>
        <a href={link.url} target="_blank">{link.title}</a>
      </li>)
    )
    return (
    	<div>
    		<h3>Links</h3>
    		<ul>{content}</ul>
    	</div>
    );
  }
}
