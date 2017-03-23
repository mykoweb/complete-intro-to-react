import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle2'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='A' color='peru' />
        <MyTitle title='B' color='mediumaquamarine' />
        <MyTitle title='C' color='rebeccapurple' />
        <MyTitle title='Hello' color='darkvioletred' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
