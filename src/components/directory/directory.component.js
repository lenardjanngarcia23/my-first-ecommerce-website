import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component'

// import '../directory/directory.styles.scss'
import '../directory/directory.styles.scss'

class Directory extends Component {
    constructor() {
        super()

        this.state = {
            section: [{
                    title: 'HATS',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                  },
                  {
                    title: 'JACKETS',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'jackets'
                  },
                  {
                    title: 'SNEAKERS',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'sneakers'
                  },
                  {
                    title: 'WOMENS',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'womens'
                  },
                  {
                    title: 'MENS',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'mens'
                  }]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {this.state.section.map(({ id, ...sectionProps }) => (
                        <MenuItem key={id} {...sectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory
