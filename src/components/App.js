import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: [] }; 

    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 0wffO7H8FG47kNP9JVYQzJa2dB9c-T71g4Wxf6nguBg'
            }
        });

        this.setState({images: response.data.results})
    }

    render () {
        return (
            <div className='app ui container' style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;