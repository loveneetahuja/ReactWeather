var React = require('react');


var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>
      This shows Aaj ka mausam.

      </p>
      <p>
      	Here are some tools I have used:
      </p>
      <ul>
      	<li>
      		<a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
      	</li>
      	<li>
      		<a href="http://openweathermap.org">Open Weather Map</a> - Open Weather to search for weather by location. 
      	</li>
      </ul>
    </div>
  )
};

module.exports=About;
