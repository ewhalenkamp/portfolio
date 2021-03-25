import React from 'react';
import youtubeApi from '../apis/youtube.js'
import './component.css';

function SearchButton(props) {
    return (
        <button className="searchButton" id="search" onClick={props.focusOn}>
            <i className="ri-search-line"/>
        </button>
    );
}

function YoutubeButton(props) {
    return (
        <button className="searchYTButton" onClick={props.onYTSearch}>
                <i className="ri-youtube-line"/>
        </button>
    );
}

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title:"",
            focus: false,
        };
    }

    onYTSearch = async keyword => {
        const response = await youtubeApi.get("./search", {
          params: {
            part: 'snippet',
            q: keyword,
            type: 'video',
            maxResults: 50,
          }
        });
        
        this.props.updateSearchResults(response.data.items);

        
        // const videos = [];
        // response.data.items.forEach((item) => {videos.push(item);})
        // this.setState({videos});
      }

    //focusOn and focusOff controllers handle the css transition class for the search bar

    focusOn = () => {
        document.getElementsByClassName("searchInput")[0].classList.add("open");
        document.getElementsByClassName("searchBox")[0].classList.add("open");
        document.getElementById("inputfield")
        document.getElementById("inputfield").focus();
        document.getElementById("inputfield").select();
        this.setState({focus: true});
    }

    focusOff = () => {
        document.getElementsByClassName("searchInput")[0].classList.remove("open");
        document.getElementsByClassName("searchBox")[0].classList.remove("open");
        this.setState({focus: false});
    }

    onSubmit = event => {
        event.preventDefault();
        this.onYTSearch(this.state.title);
        
    }

    onChange = event => {
        event.preventDefault();
        const title = event.target.value;
        this.setState({title});
    }

    onBlur = event => {
        setTimeout(this.focusOff,250);
    }

    checkEnter = event => {
        if (event.key==='Enter') {
            console.log("hey");
            this.onSubmit(event);
        } 
    }

    render() {
        const focus = this.state.focus;
        let buttons;
        if (focus)
            buttons = <YoutubeButton onYTSearch={this.onSubmit}/>;
        else
            buttons = <SearchButton focusOn={this.focusOn}/>;
        return (
        <div className="searchBox">
            <input onKeyPress={this.checkEnter} id="inputfield" className="searchInput" onChange={this.onChange} onBlur={this.onBlur} type="text" name="" placeholder="Search"/>
            {buttons}

        </div>
        );
    }
}

export default Search;