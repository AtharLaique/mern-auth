import React from 'react'

 const CenterGrid=({children})=> {
    return (
        <div className="row">
        <div className="col-sm-3 col-md-4 col-lg-4"></div>
        <div className="col-sm-6 col-md-4 col-lg-4">
            {children}
        </div>
        <div className="col-sm-3 col-md-4 col-lg-4"></div>
      </div>
    )
}
export default CenterGrid;