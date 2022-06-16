import React from 'react';

import SearchBar from './SearchBar';

class App extends React.Component {
    render () {
        return (
            <div className='app ui container' style={{marginTop: '10px'}}>
                <SearchBar />
            </div>
        )
    }
}

export default App;