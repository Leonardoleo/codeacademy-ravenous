import React from 'react';
import './BusinessList.css';

//Components
import Business from '../Business/Business';

/**
 * A list of business tiles
 */
class BusinessList extends React.Component{
    render(){
        return (
            <div className="BusinessList">
                {
                    // Pass through all fetched businesses to render individually
                    this.props.businessList.map((item,idx) => {
                        return <Business key={idx} business={item} />
                    })
                }
            </div>
        );
    }
}

export default BusinessList;