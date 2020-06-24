import React from 'react';
import './BusinessList.css'
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render(){
        return(
            <div className="BusinessList">
                {/* currently hard coded, will access the yelp api later */}
                {this.props.businesses.map((business, index) => <Business business={business} key={index}/>)}
            </div>
        )
    }
}

export default BusinessList;