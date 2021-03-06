import React from 'react'

const { arrayOf, string, node, object } = React.PropTypes

const shims = `
  (String.prototype.trim && Function.prototype.bind) || document.write('<script src="/es5-shim.js"><\\/script>');
  window.Promise || document.write('<script src="/Promise.js"><\\/script>');
  window.fetch || document.write('<script src="/fetch.js"><\\/script>');
`

const Document = React.createClass({

  propTypes: {
    styles: arrayOf(node),
    scripts: arrayOf(node),
    content: string,
    title: string,
    initialState: object
  },

  render() {
    const { styles, scripts, content, title, initialState } = this.props

    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <title>{title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <link rel="stylesheet" href="/vendor/Materialize/dist/css/materialize.min.css"></link>
          {styles}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: content }}/>
          <script dangerouslySetInnerHTML={{ __html: shims }}/>
          {initialState &&
            <script dangerouslySetInnerHTML={{
              __html: `window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};`
            }}/>
          }
          <script type="text/javascript" src="/vendor/jquery/dist/jquery.min.js"></script>
          <script src="/vendor/Materialize/dist/js/materialize.min.js"></script>
          {scripts}
        </body>
      </html>
    )
  }

})

export default Document
