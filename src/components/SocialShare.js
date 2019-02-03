import React from 'react'
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  TwitterIcon,
  FacebookIcon,
  GooglePlusIcon,
  EmailIcon,
  LinkedinIcon,
} from 'react-share'
const SocialShare = ({ title, url }) => (
  <div className="field is-grouped is-pulled-right">
    <div className="control">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
    <div className="control">
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
    <div className="control">
      <GooglePlusShareButton url={url} title={title}>
        <GooglePlusIcon size={32} round />
      </GooglePlusShareButton>
    </div>
    <div className="control">
      <EmailShareButton url={url} subject={title}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
    <div className="control">
      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  </div>
)

export default SocialShare
