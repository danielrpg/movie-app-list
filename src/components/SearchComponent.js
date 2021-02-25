import { Component } from "react";
import { Form, Input, Button, Grid } from 'semantic-ui-react'
import { API_KEY } from '../constant/ApiConstant'
import { PropTypes } from 'prop-types'

class SearchCompoment extends Component {
    state= {
        searchResult: [],
        searchText: ''
    }

    searchMovieFromOMDB = () => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.searchText}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            this.setState({
                searchResult: data
            })
            //console.log(this.props)
            this.props.onShowResult(this.state.searchResult)
        })
        // console.log(this.props.onShowResult(this.state.searchText))
    } 

    render() {
        return (
            <Form>
                <Grid columns='equal'>
                    <Grid.Column width={2}>
                        <br />
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Form.Field>
                            <Input 
                                placeholder='Search Movie'
                                onChange={(e) => this.setState({ searchText: e.target.value })} />
                        </Form.Field>    
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Button
                            primary
                            onClick={() => this.searchMovieFromOMDB()}>
                                Search Movie
                        </Button>
                    </Grid.Column>
                </Grid>
            </Form>    
        )
    }
}

SearchCompoment.propType = {
    onShowResult: PropTypes.func
}


export default SearchCompoment