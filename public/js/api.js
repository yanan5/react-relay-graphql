import { post } from 'jquery';
import ServerActions from './actions/ServerActions';
let API = {
	fetchLinks(){
		post('/graphql' ,{
			query: `{
				links {
					_id,
					title,
					url
				}
			}`
		}).done(resp => {
				console.log('1. In Api fetchLinks');
				console.log(resp);
				ServerActions.receiveLinks(resp.data.links);
			})
	}
}
export default API;