import React, {Component} from 'react';
import loadimg from '../assets/icon/loading.gif';
class Loading extends Component
{
    render(){
        return(
        
            <div className="container center-align">
                <div className="col s12 m12 l12" id="containerLoading">
                    <img src={loadimg} className="responsive-img" 
                         alt="" id="bannerMavicAir" width="70%" height="70%" />
                </div>
            </div>
        );
    }
}

export default Loading;