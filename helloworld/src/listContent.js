import React from 'react';
class ListContent extends React.Component {
    constructor(props) {
    super(props);
    this.incCount = this.incCount.bind(this);    
    }
    incCount(){
        this.props.countIncrement(this.props.id);
    }
	render() {
		return(
			<li className="story-list-item montana-list-item ">
                <div className="list-story-badge-grouper">
                    <a href="">
                        <svg aria-label="discussion-story-badge" height="51" id="svg-discussion-story-badge" role="img" version="1.1" viewBox="0 0 51 51" width="51">
                            <circle fill="#dbe0e8" cx="26" cy="26" r="25" />
                            <path fill-rule="evenodd" d="m33.674 24.568c0 0-.106.329-1.101.963l-9.179 3.661c0 0-.056.113 0 .145 1.869 1.064 5.606 3.192 5.606 3.192l-3.209 5.621c0 0-.294.531.529.692.823.161 6.703.811 6.703.811 0 0-.555 2.115-4.02 2.5-3.468.384-5.213 0-5.213 0 0 0-.562 1.88.242 2.864.804.983-1.419 4.996-1.64 5.712.925.148 11.195 1.884 19.902-5.812 8.66-7.617 8.707-16.93 8.707-18.32 0-6.164-1.613-11.912-6.482-17.376 0 0-6.579 6.02-10.841 15.348m8.604 4.444c1.518 0 2.749-1.231 2.749-2.748 0-1.518-1.231-2.748-2.749-2.748-1.518 0-2.749 1.231-2.749 2.748 0 1.518 1.231 2.748 2.749 2.748m-26.755 7.434c0 0-5.859-8.905-6.228-14.708 0 0 17.596-7.774 24.19-19.573-1.773-.604-4.279-1.167-7.49-1.167-3.211 0-10.533.538-17.15 6.837-8.224 7.824-7.842 16.744-7.842 19.15 0 1.926.513 4.16.513 4.16 0 0 8.633 4.985 14.01 5.299" fill="#9099a7" />
                        </svg>
                    </a>
                </div>
                <div className="list-story-grouper list-story-upvote-grouper">
                    <button className="story-upvote-button toggle-login" onClick={this.incCount}>                        
                        <svg aria-label="up-arrow" className="upvote-up-arrow" height="7" id="svg-up-arrow "role="img" version="1.1" viewBox="0 0 11 7" width="11">
                            <path d="m.202 5.715c-.367.417-.217.755.329.755h9.438c.549 0 .702-.33.338-.742l-4.41-4.985c-.363-.41-.947-.412-1.322.013l-4.373 4.96" />
                        </svg> 
                        <span className="story-upvote-button-number unvoted-number">{this.props.upvoteNo}</span>                       
                    </button>                    
                </div>
                <div className="list-story-grouper list-story-main-grouper">
                    <a href="#" alt="" className="montana-item-title">{this.props.content}<span className="list-story-domain">(nvite.com)</span></a>
                    <div className="montana-item-meta"><a href="" className="list-story-comment-count">{this.props.commentNo} comments</a><span className="montana-item-meta-bullet">&bull;</span>
                    </div>
                </div>
			</li>
		)
	}
}
export default ListContent;