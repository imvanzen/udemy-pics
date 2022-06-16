import React from 'react';

import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit = (term) => {
        console.log(term);
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