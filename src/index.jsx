/* Import the needs CSS */
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './css/style.css';

/* Import the needed JS */
import $ from 'jquery'; 
import 'bootstrap';
import React from 'react';
import {render} from 'react-dom';
import {Game} from './components/tictactoe';

//Container component
class App extends React.Component {
  render () {
    return (
    	<div>
    		<Game />
    	</div>
    );
  }
}
render(<App/>, document.getElementById('app'));





let leadText = $('.lead');

	$(leadText).mouseenter(handlerIn).mouseleave(handlerOut);

	function handlerIn(){
		$(this).addClass('d3text');
	}
	function handlerOut(){
		$(this).removeClass('d3text');
	}