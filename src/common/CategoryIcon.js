import React, { Component } from 'react'
import ReactIcon from '../images/icons/react.svg'
import GitIcon from '../images/icons/git.svg'
import ProgrammingIcon from '../images/icons/programming.svg'
import JavaScriptIcon from '../images/icons/javascript.svg'
import PersonalIcon from '../images/icons/personal.svg'
import TutorialsIcon from '../images/icons/tutorials.svg'
import GatsbyJSIcon from '../images/icons/gatsbyjs.svg'
const icons = [
  {
    name: 'react',
    src: ReactIcon,
  },
  {
    name: 'git',
    src: GitIcon,
  },
  {
    name: 'programming',
    src: ProgrammingIcon,
  },
  {
    name: 'javascript',
    src: JavaScriptIcon,
  },
  {
    name: 'personal',
    src: PersonalIcon,
  },
  {
    name: 'tutorials',
    src: TutorialsIcon,
  },
  {
    name: 'gatsbyjs',
    src: GatsbyJSIcon,
  },
]
export default class CategoryIcon extends Component {
  selectIcon(name) {
    // console.log('booo', icons.filter(icon => name === icon.name)[0].src)
    const filteredIcons = icons.filter(icon => name === icon.name)
    if (filteredIcons.length) {
      return icons.filter(icon => name === icon.name)[0]
    } else {
      return icons.filter(icon => icon.name === 'programming')[0]
    }
  }
  render() {
    return (
      <img
        src={this.selectIcon(this.props.iconName).src}
        alt={this.selectIcon(this.props.iconName).name}
        height="32px"
        width="32px"
        style={{ verticalAlign: 'middle', marginBottom: '5px' }}
      />
    )
  }
}
