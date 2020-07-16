import React from 'react';
import ReactDOM from 'react-dom';
import faker, { image } from 'faker';
import CommentDetail from './ComponentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <div>
                <ApprovalCard>
                    <CommentDetail
                        author="Sam"
                        commentTime="Toady 6:00PM"
                        comment="Hey Nice blog!" />
                </ApprovalCard>
                <ApprovalCard>
                     <CommentDetail 
                        author="Jane" 
                        commentTime="Toady 2:00AM" 
                        comment="Looks good " 
                    />
                </ApprovalCard>
               
                <ApprovalCard>
                    <CommentDetail 
                        author="John" 
                        commentTime="Yesterday 10:00PM" 
                        comment="Nice Post" 
                    />
                </ApprovalCard>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));