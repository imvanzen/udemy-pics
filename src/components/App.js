import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { 
        images: [],
        lastKnownScrollPosition: 0,
        ticking: false
    };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState({ images: response.data.results })
    }

    componentDidMount () {
        document.addEventListener('scroll', (e) => {
            this.setState({lastKnownScrollPosition: window.scrollY});
            
            if (!this.state.ticking) {
                window.requestAnimationFrame(() => {
                    console.log(this.state.lastKnownScrollPosition);
                    this.setState({ticking: false});
                });
            
                this.setState({ticking: true});
            }
        })
    }

    render () {
        return (
            <div className='app ui container' style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;