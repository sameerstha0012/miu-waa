import React from 'react';
import Posts from "./Post/Posts";
import UpdatePost from "../components/Post/UpdatePost";

const Dashboard = (props) => {
    const posts = [
        { Id: 111, Title: 'Happiness', Author: 'John' },
        { Id: 112, Title: 'MIU', Author: 'Dean' },
        { Id: 113, Title: 'Enjoy Life', Author: 'Jasmine' }
    ];

    return(
      <div>
          <Posts posts={posts}/>
          <UpdatePost/>
      </div>
    );
}

export default Dashboard;