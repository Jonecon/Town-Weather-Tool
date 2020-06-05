import React, { useState } from 'react';

function Town(props) {

    const [validationError, setValidationError] = useState(null);

    const validate = (event) => {
        setValidationError('');
        props.onTownChange(event.target.value);
    };

    return (
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-10">
                    <style jsx="true">{`
                        .form-control::-webkit-input-placeholder {
                            color: #ddd;
                        }
                    `}
                    </style>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="usr" 
                        placeholder="New Zealand Town"
                        onkeypress={(event) => {
                            if (event.key === "Enter") {
                            	console.log("We made it here");
                                validate(event);
                            }
                        }}
                    ></input>   
                </div>
            </div>
            <div className="pl-3 row">
                <div className="text-danger small"> { validationError }</div>
            </div>
        </div>
    );
}

export default Town