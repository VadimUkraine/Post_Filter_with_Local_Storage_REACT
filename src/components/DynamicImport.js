import React from 'react';

export default class DynamicImport extends React.Component {
  state = {
    component: null
  }

  componentWillMount () {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default 
            ? component.default 
            : component
        }))
      })
  }

  render() {
    return this.props.children(this.state.component)
  }
}

