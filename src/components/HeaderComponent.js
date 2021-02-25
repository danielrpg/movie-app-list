import { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class HeaderComponent extends Component {
    state = { activeItem : 'SearchMovie' }
    
    render() {
        const { activeItem } = this.state
        return (

            <Menu>
                <Menu.Item
                name='SearchMovie'
                active={activeItem === 'SearchMovie'}
                
                >
                Search Movie
                </Menu.Item>
    
                <Menu.Item
                name='reviews'
                active={activeItem === 'reviews'}
                
                >
                Reviews
                </Menu.Item>
    
                <Menu.Item
                name='upcomingEvents'
                active={activeItem === 'upcomingEvents'}
                
                >
                Upcoming Events
                </Menu.Item>
            </Menu>
        )
    }
}