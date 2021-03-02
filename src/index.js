import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css';
import Images1 from './pictures/images.png';
import Images2 from './pictures/images2.png';
import Images3 from './pictures/images3.png';
import CommentTest from './ComponentTest'
const App=()=>{
     return (
      <div className="Container">
         <CommentTest  Image={Images1} ImageClass="pic1" Name="Alex" Comment="Great Blog Post!" Time="Great Blog Post!"/>
         <CommentTest  Image={Images2} ImageClass="pic2" Name="Sam" Comment="Informative. Thanks." Time="Today at 7:51"/>
         <CommentTest  Image={Images3} ImageClass="pic3" Name="JAne" Comment="Looks great." Time="Today at 9:01"/>
      </div>
     

     
     
     )

}
ReactDOM.render(<App />,document.getElementById('root'))


