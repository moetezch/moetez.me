import React, { Fragment } from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class DarkLightSwitch extends React.Component {
  render() {
    return (
      <ThemeToggler handleThemeSwitch={this.props.handleThemeSwitch}>
        {({ theme, toggleTheme }) => {
          const iconClass =
            theme === 'light' ? 'fa fa-moon-o fa-2x' : 'fa fa-sun-o fa-2x'
          return (
            <Fragment>
              <i
                className={iconClass}
                onClick={() => {
                  const nextTheme = theme === 'light' ? 'dark' : 'light'
                  toggleTheme(nextTheme)
                  this.props.handleThemeSwitch(nextTheme)
                }}
              />
            </Fragment>
          )
        }}
      </ThemeToggler>
    )
  }
}

export default DarkLightSwitch
