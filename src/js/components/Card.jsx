import React from "react";

function Card() {
    return (
        <div className="row p-3 justify-content-center">
            <div className="card card text-center col-3 mr-3" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Totam rerum ea corrupti error repellat quod ducimus aliquid vitae similique voluptatibus.</p>
                        <a href="#" className="btn btn-primary">Find out more</a>
                    </div>
            </div>
            <div className="card card text-center col-3 ms-3" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Totam rerum ea corrupti error repellat quod ducimus aliquid vitae similique voluptatibus.</p>
                        <a href="#" className="btn btn-primary ">Find out more</a>
                    </div>
            </div>
            <div className="card card text-center col-3 ms-3" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Totam rerum ea corrupti error repellat quod ducimus aliquid vitae similique voluptatibus.</p>
                        <a href="#" className="btn btn-primary">Find out more</a>
                    </div>
            </div>
        </div>
    )
}

export default Card