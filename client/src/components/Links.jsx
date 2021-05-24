import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                Today a Reader, Tomorrow a Leader
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/blogs/list" className="nav-link">
                                List Blogs
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/blogs/create" className="nav-link">
                                Create Blog
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
