import React, { Component } from 'react';

//functional component
export const Loading = () => {
    return(
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary">
                <p>Loading ...</p>
            </span>
        </div>
    )
}