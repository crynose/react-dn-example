import React from 'react';
import listData from './data/listData';
import ListChart from './listChart';
class NewsChart extends React.Component {
	constructor(props) {
	    super(props);
	    this.countIncrement = this.countIncrement.bind(this);
	    this.state = {
	      data: listData     
	    }
	}
	countIncrement(id){
		var data = this.state.data.slice(0).map(content=>Object.assign({},content));
		var content = data.find(content=>content.id===id); 
		content.upvoteNo= ++content.upvoteNo;
		this.setState({
			data
		})

	}
    render() {
    	return(
    		<div id="container">
		    	<div id="header-container">
			        <header id="site-header">
			            <div id="header-bar">
			                <div className="wrap padded">
			                    <div id="header-left-wrap">
			                        <a href="/" id="header-logo-link">
			                            <h1>Designer News</h1>
			                        </a>
			                        <nav id="header-main-navigation">
			                            <div id="header-menu-grouper">
			                            </div>
			                        </nav>
			                    </div>
			                </div>
			            </div>
			            <nav id="header-sub-navigation-container">
			                <div id="mobile-sub-navigation-toggle"><span id="mobile-sub-navigation-label"> Top Stories </span><span id="mobile-sub-navigation-icon"></span></div>
			                <div className="wrap padded">
			                    <ul id="sub-navigation-list-items">
			                        <div id="sub-navigation-visible-items">
			                            <li><a href="/" className="active">Top</a></li>
			                            <li><a href="/">Starred</a></li>
			                        </div>
			                        <li id="sub-navigation-view-more">More</li>
			                        <div id="sub-navigation-additional-items"></div>
			                    </ul>
			                </div>
			            </nav>
			        </header>
	    		</div>
	    		<ListChart
	    		data={this.state.data}	    		
	    		countIncrement ={this.countIncrement}/>
			</div>		
    	)
	} 
}	 	  
export default NewsChart;