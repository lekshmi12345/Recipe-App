import React from 'react'

const Recepieentry = () => {
  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" >
                  <label for="" className="form-label">Recepie Title</label>
                  <input type="text" className="form-control"/>  
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                   <label for="" className="form-label">Category </label> 
                   <select name="cars" id="cars">
                    <option value="volvo">Veg</option>
                    <option value="audi">NonVeg</option>
                  </select>
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                    <label for="" className="form-label">Description</label>
                    <textarea className="form-control" id="" cols="10" rows="4"></textarea>
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <label for="" className="form-label">Prepared By</label>
                   <input type="text" className="form-control"/>
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success">SUBMIT</button>
                </div>
               
                
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Recepieentry