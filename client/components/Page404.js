import React from 'react'


const Page404 = ({ location }) => (
  <div id="container">
    <heading>404</heading><br /><br /><h1>Head in the clouds?</h1> <br /><br /><p>No match found for <code>{location.pathname}</code>. Bummer.<br /><br /></p>
  </div>

)


// const Page404 = () => (
//   <div>hi</div>
// )

export default Page404;
