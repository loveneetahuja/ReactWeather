var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function (){
    return{
        isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;


    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        isLoading:false,
        location: location,
        temp: temp

      });
    }, function(errorMessage){
      that.setState({isLoading:false});
        alert(errorMessage);
    });
  },
  render: function(){
    var location = this.state.location;
    var temp = this.state.temp;
    var isLoading = this.state.isLoading;

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching Weather...</h3>
      }else if(temp && location){
        return <WeatherMessage temp ={temp} location={location}/>
      }
    }

    return(
      <div>
        <h1> Weather component</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports=Weather;
