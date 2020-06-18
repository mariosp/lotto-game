import React from "react";
import "./LottoNumber.scss";

const LottoNumber = ({value}) => {

    return (
        <div className="lotto-wrapper">
            <div className={`lotto-number`}>
                {value}
            </div>
        </div>
    );
}

export default LottoNumber;