import React, {Component} from 'react'

class Blog extends Component{
    render(){
        const {posts} = this.props;
        const sidebar = (
            <ul>
                {
                    posts.map((post) => 
                        <li key={post.id}>
                            {post.title}
                        </li>
                    )
                }
            </ul>
        )
        const content = posts.map((post) => 
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        )
        return (
            <div>
                {sidebar}
                <hr />
                {content}
            </div>
        )
    }
}

class Blogs extends Component{
    render(){
        const posts = [
            {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
            {id: 2, title: 'Installation', content: 'You can install React from npm.'}
        ];
        return (
            <div>
               <Blog posts={posts}/>
            </div>
        )
    }
}

export default Blogs