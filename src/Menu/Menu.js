import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const menusArray =[
        "Home","Contact-us", "About"
    ];

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
        {menusArray.map((menuName,i)=>(
             <Menu.Item key={i} name={menuName} active={menuName==activeItem?true:false} onClick={this.handleItemClick} />
        )
            )}
          
        </Menu>
      </Segment>
    )
  }
}