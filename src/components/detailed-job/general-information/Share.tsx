import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  ViberIcon,
  WhatsappIcon
} from 'react-share'

import { useCopyToClipboard } from '../../../utilities/useCopyToClipboard'
import sprite from '../../../assets/icons.svg'
import styles from './style.module.css'

const shareUrl = window.location.href

export function Share ({
  title,
  setShare
}: {
  title: string
  setShare: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [copiedText, copy]: [
    string | null,
    () => Promise<boolean>
  ] = useCopyToClipboard()
  return (
    <div className={styles.socialMedia}>
      <div className={styles.socialMediaWrapper}>
        <button
          onClick={() => {
            setShare(false)
          }}
        >
          <svg id="url" className={styles.closeIcon}>
            <use href={sprite + '#close'}></use>
          </svg>
        </button>
        <div className={styles.buttonsWrapper}>
          <button
            onClick={() => {
              void copy()
            }}
            className={styles.linkWrapper}
          >
            <svg id="url" className={styles.linkIcon}>
              <use href={sprite + '#link'}></use>
            </svg>
          </button>

          <EmailShareButton
            className={styles.shareButton}
            url={shareUrl}
            title={title}
          >
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
          <FacebookShareButton
            className={styles.shareButton}
            url={shareUrl}
            title={title}
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <LinkedinShareButton
            className={styles.shareButton}
            url={shareUrl}
            title={title}
          >
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <TelegramShareButton
            className={styles.shareButton}
            url={shareUrl}
            title={title}
          >
            <TelegramIcon size={32} round={true} />
          </TelegramShareButton>
          <TwitterShareButton
            className={styles.shareButton}
            url={shareUrl}
            title={title}
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <ViberShareButton
            className={styles.shareButton}
            url={shareUrl}
            title={title}
          >
            <ViberIcon size={32} round={true} />
          </ViberShareButton>
          <WhatsappShareButton
            className={styles.shareButton}
            url={shareUrl}
            title={title}
          >
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </div>
        <p className={styles.copyNotation}>{copiedText ?? ''}</p>
      </div>
    </div>
  )
}
