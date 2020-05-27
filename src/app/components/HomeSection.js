import React, {Component}  from 'react';

class HomeSection extends Component
{
    render()
    {
        return(

            <div className="homeSection container-fluid">

                <div id="rowSection" className="row">

                    
                    <div id="cardLeft" className=" offset-md-1 col-md-4">

                            <div className="row">
                               
                                <div id="cardLeftCenter" className="offset-md-1 col-md-10">
                                    <h3>Aqui va un drone</h3>
                                    <h3>Aqui va un drone</h3>
                                    <h3>Aqui va un drone</h3>
                                </div>
    
                            </div>                       

                    </div>

                    
                    <div id="cardRight" className="col-md-6 offset-md-1">

                        
                            <div className="row">
                               
                                <div id="cardLeftCenter" className="offset-md-1 col-md-10">
                                    <h3>Aqui va un drone</h3>
                                    <h3>Aqui va un drone</h3>
                                    <h3>Aqui va un drone</h3>
                                </div>
    
                            </div>    
                        
                            <div className="row">
                               
                                <div id="cardLeftCenter" className="offset-md-1 col-md-10">
                                    <h3>Aqui va un drone</h3>
                                    <h3>Aqui va un drone</h3>
                                    <h3>Aqui va un drone</h3>
                                </div>
    
                            </div>    
                       

                    </div>

                </div>

            </div>

        );
    }
}

export default HomeSection;