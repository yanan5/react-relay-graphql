import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';
import { EventEmitter } from 'events';
console.log('inside link store');
let _links = [];

class LinkStore extends EventEmitter {
	constructor(props) {
		super(props);

		AppDispatcher.register(action => {
			switch(action.actionType) {
				case ActionTypes.RECEIVE_LINKS:
					console.log("3. Inside Store");
					_links = action.links;
					this.emit('change');
				break;
				default:
			}
		});
	}

	getAll(){
		return _links;
	}
}

let linkStore = new LinkStore();
export default linkStore;