import React from "react";
import ReactDOM from "react-dom";

import Hello from "./components/Main";

ReactDOM.render(<Hello limit={4}/>, document.getElementById('react'));

console.log(
	Relay.QL`
		query Test {
			links {
				title
			}
		}
	`
)