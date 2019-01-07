import React from 'react'
import styled from 'styled-components'

import ObfuscatedLink from './obfuscated-link'

import bardImg from './team-thumbs/bard.jpg'
import didrikImg from './team-thumbs/didrik.jpg'
import hakonImg from './team-thumbs/hakon.jpg'
import stavrosImg from './team-thumbs/stavros.jpg'
import bartoszImg from './team-thumbs/bartosz.jpg'
import audunImg from './team-thumbs/audun.jpg'
import julianImg from './team-thumbs/julian.jpg'
import leneImg from './team-thumbs/lene.jpg'
import ainaImg from './team-thumbs/aina.jpg'
import eduardoImg from './team-thumbs/eduardo.jpg'
import filipaImg from './team-thumbs/filipa.jpg'
import marieImg from './team-thumbs/marie.jpg'
import pawelImg from './team-thumbs/pawel.jpg'
import robertImg from './team-thumbs/robert.jpg'
import michaelImg from './team-thumbs/michael.jpg'

export const authors = {
  'bard@snowball.digital': {
    name: 'Bård Farstad',
    image: bardImg,
    links: {
      twitter: 'bardfarstad',
      linkedin: 'bfarstad'
    }
  },
  'didrik@snowball.digital': {
    name: 'Didrik Steen Hegna',
    image: didrikImg
  },
  'stavros@snowball.digital': {
    name: 'Stavros Sotiropoulos',
    image: stavrosImg,
    links: {
      linkedin: 'sta-sotiro'
    }
  },
  'bartosz@snowball.digital': {
    name: 'Bartosz Sokolow',
    image: bartoszImg
  },
  'audun@snowball.digital': {
    name: 'Audun Ask Blaker',
    image: audunImg
  },
  'julian@snowball.digital': {
    name: 'Julian Rubilar',
    image: julianImg
  },
  'hakon@snowball.digital': {
    name: 'Håkon Gullord Krogh',
    image: hakonImg,
    links: {
      twitter: 'hakonkrogh',
      linkedin: 'hakongullordkrogh'
    }
  },
  'lene@snowball.digital': {
    name: 'Lene Aspen Nilsen',
    image: leneImg
  },
  'aina@snowball.digital': {
    name: 'Aina Solvang Lindblom',
    image: ainaImg
  },
  'eduardo@snowball.digital': {
    name: 'Eduardo Morán Alvarado',
    image: eduardoImg
  },
  'filipa@snowball.digital': {
    name: 'Filipa Amado',
    image: filipaImg,
    links: {
      linkedin: 'filipa-amado',
      twitter: 'filipa_amado'
    }
  },
  'marie.weidlich@snowball.digital': {
    name: 'Maria Teresa Weidlich',
    image: marieImg,
    links: {
      linkedin: 'marieweidlich',
      instagram: 'londonfashiontoday'
    }
  },
  'pawel@snowball.digital': {
    name: 'Paweł Kawczyński',
    image: pawelImg,
    links: {
      instagram: 'kavvvva',
      linkedin: 'pawelkawczynski'
    }
  },
  'robert@snowball.digital': {
    name: 'Robert Mulcahy',
    image: robertImg,
    links: {}
  },
  'michael@snowball.digital': {
    name: 'Michael Smesnik',
    image: michaelImg,
    links: {}
  }
}

const Outer = styled.div.attrs({
  className: 'snowball-author'
})`
  display: flex;
  align-items: center;

  a {
    color: #555;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Image = styled.img.attrs({
  className: 'snowball-author__image'
})`
  border-radius: 50%;
  object-fit: fill;
  height: 25px;
  width: 25px;
  margin-right: 15px;
`

const Links = styled.span.attrs({
  className: 'snowball-author__links'
})`
  font-size: 0.75em;
  margin-left: 10px;
`

const Link = styled.a.attrs({
  className: 'snowball-author__link'
})`
  &:not(:first-child) {
    margin-left: 5px;
  }
`

export default class Author extends React.PureComponent {
  renderLink = type => {
    const { email } = this.props
    const data = authors[email]
    const linkData = data.links[type]

    switch (type) {
      case 'twitter':
        return (
          <Link key={type} href={`https://twitter.com/${linkData}`}>
            Twitter
          </Link>
        )
      case 'linkedin':
        return (
          <Link key={type} href={`https://www.linkedin.com/in/${linkData}`}>
            LinkedIn
          </Link>
        )
      case 'instagram':
        return (
          <Link key={type} href={`https://www.instagram.com/${linkData}`}>
            Instagram
          </Link>
        )
      default:
        return null
    }
  }

  render() {
    const { email, ...rest } = this.props;
    const data = authors[email];

    if (!data) {
      return null
    }

    const links = Object.keys(data.links || {})

    return (
      <Outer {...rest}>
        {data.image && <Image src={data.image} alt={data.name} />}
        <ObfuscatedLink href={`mailto:${email}`}>{data.name}</ObfuscatedLink>
        {links.length > 0 && <Links>{links.map(this.renderLink)}</Links>}
      </Outer>
    )
  }
}
