import React from "react";
import HTML2React from "html2react";
import Infocolumn from '../acf/infocolumn.js';

const Sds =(props)=>{
  const cols = [];
  props.country.map((a,i)=>{
    cols.push(<option value={a.county_code} key={i}>{a.country_name}</option> )
  });
  const types = [];
  props.safety_data_sheets.map((a,i)=>{
    types.push(<option value={a.url} key={i}>{a.title}</option> )
  });

    return(

      <div className="sds lightgray-fade">
            <div className="inner-content">
                <h1>{props.sds_title}</h1>
                <div className="short-dash"></div>
                <div className="row">
                    <div className="col-md-6">


                        <div className="sds-info">
                            {HTML2React(props.sds_detail)}
                        </div>

                    </div>
                    <div className="col-md-6">

                        <div className="secondary-light-gray">
                            <div className="pad-all">
                                <form action="" method="GET" id="sdsout">

                                    <select defaultValue="default" name="SDS" id="SDS">
                                        <option value="default" disabled>Choose type</option>

                                        {types}

                                    </select>

                                     <select defaultValue="default" name="country" id="country">
                                        <option value="default" disabled >Choose Country</option>

                                        {cols}

                                    </select>
                                    <input type="submit" className="orange button" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sds;
