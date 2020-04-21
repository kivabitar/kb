import React from 'react';


class Select extends React.Component{
    constructor(props){
      super();
      this.state={
        value:'',
        props: props,
        options: [],
        show: true,
        handleChange : props.handleChange
      }
      //console.log(props.condition.rules[0].fieldId)
      this.updateForm = this.updateForm.bind(this);

    }

    componentDidMount(props){
      let list = [];
      let i=1000;
      list.push(<option value="default" disabled hidden key="999">{this.state.props.placeholder}</option>)
      this.props.choices.map(function(a){
        list.push(<option value={a.value}  key={i}>{a.text}</option>);
        i++;
      });
      this.setState({options:list})
    }

    updateForm =(event) =>{
      const target = event.target;

      //console.log(target.value);
      this.setState({value:target.value});

    }
    render(){
      const styles={
        display: "none"
      }
      let vis = []
      if(!this.props.condition){
         vis = {display:"inline-block"}
       }else{
        vis={display:"none"}
      }
      const rules = [];
      const values = [];
      const types = [];
      if(this.props.condition.rules){
        let arr = Array.from(this.props.condition.rules)
        arr.map(function(a){
          //console.log(a)
            rules.push(a.fieldId)
            types.push(a.operator)
            values.push(a.value)
        });
      }
      const id = this.state.props.id;
      let currentValue = this.state.value || "default";
      return (
        <div className={`form-field error ${this.state.props.cssClass}`} style={vis}>

            <label htmlFor={`input_${this.state.props.formId}_${id}`} className={`gf-label ${this.state.props.labelPlacement}`}  style={styles}>
              {this.state.props.label}
              {this.state.props.isRequired ? <abbr>*</abbr> : null}
            </label>
            {this.state.props.descriptionPlacement === 'above' && this.state.props.description ? (
              this.state.props.description && <div className="description">{this.state.props.description}</div>
            ) : (
              <React.Fragment>
                <select
                  id={`input_${this.state.props.formId}_${this.state.props.id}`}
                  name={this.state.props.customName || `input_${this.state.props.id}`}
                  required={this.state.props.isRequired}
                  onChange={(event) => {
                    //this.props.handleChange();
                    this.updateForm(event, this.state.props.field);
                  }}
                  value={currentValue}
                  aria-label={this.state.props.label}
                  aria-describedby={`error_${this.state.props.formId}_${id}`}
                  data-id={id}
                  data-rule={rules}
                  data-value={values}
                  data-type={types}
                >
                {this.state.options}
                </select>
                {this.state.props.description && <div className="description">{this.state.props.description}</div>}
              </React.Fragment>
            )}
            {((this.state.props.validationMessage && this.state.props.touched) || this.state.props.error) && (
              <span className="error-message" id={`error_${this.state.props.formId}_${id}`}>
                {this.state.props.validationMessage || this.state.props.error}
              </span>
            )}

        </div>
      );
  }
};
export default Select;
