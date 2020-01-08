import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { SERVER_URL } from "../constants.js";
import  dangergif  from "../assets/danger.gif";
import { failuresForEnclousre , solutionForFailure , getSeverityForFailure} from "../queries.js";

const useStyles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
});

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enclosure: "",
      failures: [],
      response: {},
      dangerResponse: {},
      failure: "",
      solutions: [],
      selectedSolution: "",
      danger : false
    };
  }

  handleChangeEnclosure = event => {
    this.setState({solutions : []});
    this.setState({danger : false});
    this.setState({enclosure : event.target.value})
    this.getFailuresForEnclosure(event.target.value);
  };

  handleChangeFailure = event => {
    this.getSolutionForFailure(event.target.value);
    this.setState({failure : event.target.value})
  };


  getFailuresForEnclosure = enclosure => {
    fetch(
      SERVER_URL +
        "?query=" +
        encodeURIComponent(failuresForEnclousre.replace("VARENCLOSURE", enclosure)),
      {
        method: 'POST',
        headers: {
          'Accept' : 'application/sparql-results+json'
        },
      }
    )
      .then(response => response.json())
      .then(response => {
        this.setState({ response });
        console.log(this.state.response);
        var failures = [];
        this.state.response.results.bindings.forEach(function (obj, index) {
          failures.push(obj.Failures.value);
        });
        this.setState({failures});

      });

     
      
  };



  getSolutionForFailure = failure => {
    fetch(
      SERVER_URL + 
        "?query=" + 
        encodeURIComponent(solutionForFailure.replace("VARFAILURE", failure)),
        {
          method : 'POST' ,
          headers: {
            'Accept' : 'application/sparql-results+json'
          },
        }
    )
        .then(response => response.json())
        .then(response => {
          this.setState({response});
          var solutions = [];
          this.state.response.results.bindings.forEach(function (obj, index) {
            solutions.push(obj.Solution.value);
          });
          this.setState({solutions});

        });


    //Check Severity
      fetch(
        SERVER_URL + 
        "?query=" +
        encodeURIComponent(getSeverityForFailure.replace("VARFAILURE", failure)),
        
        {
          method: 'POST',
          headers: {
            'Accept' : 'application/sparql-results+json'
          },
        }
      )
      .then(dangerResponse => dangerResponse.json())
      .then(dangerResponse => {
        this.setState({dangerResponse});

        if(this.state.dangerResponse.results.bindings.length  == 0){
          this.setState({danger : false});
        } else {
          this.state.dangerResponse.results.bindings.map ( obj => {
            if(obj.Severity.value == "http://www.semanticweb.org/daniel/ontologies/2019/11/untitled-ontology-8#Danger") {
             this.setState({danger : true});
           } 
       });
        }

      })


  }

  render() {
    const { classes } = this.props;
    let danger;

    var menuItemsFailures = this.state.failures.map(function(failure) {
      return <MenuItem value={failure}>{failure}</MenuItem>
    });

    var menuItemsSolutions = this.state.solutions.map(function(solution) {
      return <MenuItem value={solution}>{solution}</MenuItem>
    });

    if(this.state.danger == true) {
      danger = <div><p>Careful Dangerous Failure. Contact Supervisor!</p><img src={dangergif} alt="loading..." height="50px"/></div> ;
    } else {
      danger = null;
    }

    return (
      <div>
        {danger}
        <FormControl className={classes.formControl}>
          <InputLabel>Enclosure</InputLabel>
          <Select
            value={this.state.enclosure}
            onChange={this.handleChangeEnclosure}
          >
            <MenuItem value={"ITEnclosure"}>ITEnclosure</MenuItem>
            <MenuItem value={"CompactEnclosure"}>CompactEnclosure</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Failures</InputLabel>
          <Select
            value={this.state.failure}
            onChange={this.handleChangeFailure}
          >
          {menuItemsFailures}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Solutions</InputLabel>
          <Select
            value={this.state.selectedSolution}
            onChange={this.handleChangeSolution}
          >
          {menuItemsSolutions}
          </Select>
        </FormControl>
        <div><pre>Response 1:{JSON.stringify(this.state.response,null,2)}</pre>
  <pre>Response 2:{JSON.stringify(this.state.dangerResponse,null,2)}</pre></div> 
      </div>
    );
  }
}
export default withStyles(useStyles, { withTheme: true })(DropDown);
