import React, {Component} from 'react'
import CommonHeader from '../common/CommonHeader'


class PostedHeader extends Component{
    render(){
        return (
            <div>
               <CommonHeader 
                    tit="发表主题" 
                    />
            </div>
        )
    }
}

export default PostedHeader