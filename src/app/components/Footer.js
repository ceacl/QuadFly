import React, { Component } from 'react';

class Footer extends Component 
{
    render(){
        return (
               
            <div className="foot">
    
                <footer className="page-footer font-small indigo ">

                    <div className="container text-center text-md-left">

                        <div className="row">

                            <div className="col-md-3 mx-auto">

                                <h4 className="mt-3 mb-4 text-center">Contact</h4>

                                <ul className="list-unstyled">
                                
                                <li>
                                    <a href="#!"><h6 className="text-center">Link 1</h6></a>
                                 </li>
                            
                                </ul>

                            </div>

                            <hr className="clearfix w-100 d-md-none"/>

                            <div className="col-md-3 mx-auto">

                                <h5 className="text-center mt-3 mb-4">Privacy & Legal</h5>

                                <ul className="list-unstyled">
                            
                                <li>
                                    <a href="#!"><h6 className="text-center">Link 1</h6></a>
                                </li>
                            
                                </ul>

                        </div>

                            <hr className="clearfix w-100 d-md-none"/>

                            <div className="col-md-3 mx-auto">

                                <h5 className="text-center mt-3 mb-4">Community</h5>

                                    <ul className="list-unstyled">
                                
                                    <li>
                                        <a href="#!"><h6 className="text-center">Link 1</h6></a>
                                    </li>
                                
                                </ul>

                            </div>

                            <hr className="clearfix w-100 d-md-none"/>

                        <div className="col-md-3 mx-auto">

                            <h5 className="text-center mt-3 mb-4">WorkTeam</h5>

                            <ul className="list-unstyled mx-auto justify-content-center">
                            <li>
                                <a href="#!"><h6 className="text-center">Link 1</h6></a>
                            </li>
                            </ul>

                        </div>

                        </div>

                    </div>


                    <div className="footer-copyright text-center py-3">© 2020 Copyright. Quadfly C.R. All Rights Reserved
                    </div>

                  
                </footer>
                            
            </div>
           
            
        );
    }
}

export default Footer;