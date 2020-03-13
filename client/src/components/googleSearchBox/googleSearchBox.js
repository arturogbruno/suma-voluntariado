import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Form } from 'react-bootstrap';


export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        location: "",
        coord: {
            lat: "",
            lng: ""
        } 
    };
  }
 
  handleChange = location => {
    this.setState({ location });
  };
 
  handleSelect = location => {
    geocodeByAddress(location)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({ location: location, coord: { lat: latLng.lat, lng: latLng.lng } }, () => this.props.selectLocation(this.state) ))
      .catch(err => console.error('Error', err));
  };

 
  render() {
    return (
        <PlacesAutocomplete
            value={this.state.location}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
        >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
            <Form.Control type="text" name="location"
                {...getInputProps({
                    placeholder: 'Busca la dirección',
                    className: 'location-search-input',
                })}
            />
            <div className="autocomplete-dropdown-container">
                {loading && <div>Cargando...</div>}
                {suggestions.map(suggestion => {
                const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                const style = suggestion.active
                    ? { backgroundColor: 'rgb(234, 242, 255)', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                    <div
                        {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                        })}
                        >
                        <span>{suggestion.description}</span>
                    </div>
                );
                })}
            </div>
            </div>
        )}
        </PlacesAutocomplete>
    );
  }
}