import { Card, Image, Icon, Container, Grid } from 'semantic-ui-react'

export const Movie = (props) => {
    const { Search } = props.searchResults
    //console.log(Search);
    return (
        <Container>
            <Grid >
            {
                Search.map(movie => {
                    return <Grid.Column key={movie.imdbID} width={4}>
                            <Card>
                                <Image src={movie.Poster} wrapped ui={false} width={100} />
                                <Card.Content>
                                <Card.Header>{movie.Title}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{movie.Year}</span>
                                </Card.Meta>
                                <Card.Description>
                                    {movie.Type} - {movie.Title}
                                </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    22 Friends
                                </a>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                })
            }
            </Grid>
        </Container>  
    )
}