import React from 'react';
import HTML2React from 'html2react';

class Checkbox extends React.Component{
    constructor(props){
      super();
      this.state={
        value:'',
        props: props
      }
      this.updateForm = this.updateForm.bind(this);
    }




    updateForm =(event) =>{
      const target = event.target;
      //console.log(target.value);
      this.setState({value:target.value})
    }
    render(){
      //console.log(this.props);
      const styles={
        display: "none"
      }
      const width ={
        width:"100% !important",
        clear:"both"
      }
      const id = this.state.props.id;
      return (
        <li className={`form-field error block ${this.props.cssClass}`} style={width}>
          <div className={this.state.props.type} style={width}>
            <label htmlFor={`input_${this.state.props.formId}_${id}`} className={`gf-label ${this.state.props.labelPlacement}`}  style={styles}>
              {this.state.props.label}
              {this.state.props.isRequired ? <abbr>*</abbr> : null}
            </label>

              <React.Fragment>
                <input
                  id={`input_${this.state.props.formId}_${this.state.props.id}`}
                  name={this.state.props.customName || `input_${this.state.props.id}`}
                  type='checkbox'
                  value={this.state.props.value ? this.state.props.value : this.state.value}
                  placeholder={this.state.props.placeholder}
                  maxLength={this.state.props.maxLength}
                  required={this.state.props.isRequired}
                  onChange={(event) => {
                    this.updateForm(event, this.state.props.field);
                  }}
                  aria-label={this.state.props.label}
                  aria-describedby={`error_${this.state.props.formId}_${id}`}
                />
                {this.state.props.description && <div className="description">{HTML2React(this.state.props.description)}</div>}
              </React.Fragment>

            {((this.state.props.validationMessage && this.state.props.touched) || this.state.props.error) && (
              <span className="error-message" id={`error_${this.state.props.formId}_${id}`}>
                {this.state.props.validationMessage || this.state.props.error}
              </span>
            )}
          </div>
        </li>
      );
  }
};
export default Checkbox;
