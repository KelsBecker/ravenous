import React from 'react';
import './BusinessList.css'
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render(){
        return(
            <div className="BusinessList">
                {/* currently hard coded, will access the yelp api later */}
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        )
    }
}

export default BusinessList;