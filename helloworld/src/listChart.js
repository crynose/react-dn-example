import React from 'react';
import ListContent from './listContent';
class ListChart extends React.Component {
	render() {
		var sortedData = this.props.data.sort(function(obj1, obj2){return obj2.upvoteNo- obj1.upvoteNo});
		var itemContent = sortedData.map(listData => {			
			return (
		        <ListContent
		          key={listData.id}
		          countIncrement={this.props.countIncrement}
		          {...listData}
		        />
		    );
	    });
		return(			
			<div id="page-container" className="wrap padded has-sidebar">
			    <div id="page-main-content">
			        <div id="page-main-content-inner">
			            <div className="montana-list" id="top-stories-list">
			                <header id="frontpage-welcome-hero" className="montana-hero"><div className="montana-hero-info">
			                    <h2>Designer News <span>is where the design community meets.</span></h2>
			                    </div>
			                </header>
			            </div>            
			            <ul className="montana-list-items">
			                {itemContent}
			            </ul>
			        </div>
			    </div>
			</div>
		);
	}
}
export default ListChart;