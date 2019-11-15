import React, {Component} from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
class MenuContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	this.handleMouseDown = this.handleMouseDown.bind(this);
	this.toggleMenu = this.toggleMenu.bind(this);
	}
	handleMouseDown(e) {
		this.toggleMenu();
			
			e.stopPropagation();
	}
	toggleMenu() {
		this.setState({
			visible: !this.state.visible
		});
	}

render() {
	console.log("Rendering: MenuContainer");
	return (
		<div>
			<MenuButton handleMouseDown={this.handleMouseDown}/>
			<Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} /> 
			<p>Bla bla bla?</p>
			<ul>
				<li>Lorem</li>
				<li>Ipsum</li>
				<li>Dolor</li>
				<li>Sit</li>
				<li>Bumblebees</li>
				<li>Aenean</li>
				<li>Consectetur</li>
			</ul>
		</div>
	);
}
}
export default MenuContainer;