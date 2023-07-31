import React from 'react'
import InlineSVG from 'react-inlinesvg'
import { EIconName } from '../../consts/icons'
import facebookIcon from './assets/facebook.svg'
import instagramIcon from './assets/instagram.svg'
import linkedinIcon from './assets/linkedin.svg'
import mediumIcon from './assets/medium.svg'
import mintbaseIcon from './assets/mintbase.svg'
import pinterestIcon from './assets/pinterest.svg'
import telegramIcon from './assets/telegram.svg'
import twitterIcon from './assets/twitter.svg'
import youtubeIcon from './assets/youtube.svg'
import githubIcon from './assets/github.svg'
import discordIcon from './assets/discord.svg'
import checkIcon from './assets/check.svg'
import verifiedIcon from './assets/verified.svg'
import closeIcon from './assets/close.svg'
import arrowUpIcon from './assets/arrow_up.svg'
import arrowBackIcon from './assets/arrow_back.svg'
import arrowForwardIcon from './assets/arrow_forward.svg'
import moonIcon from './assets/moon.svg'
import sunIcon from './assets/sun.svg'
import ticketIcon from './assets/ticket.svg'
import threeDIcon from './assets/threed.svg'
import videoIcon from './assets/video.svg'
import fileIcon from './assets/file.svg'
import imageIcon from './assets/image.svg'
import audioIcon from './assets/audio.svg'
import compareArrowsIcon from './assets/compare_arrows.svg'
import reportIcon from './assets/report.svg'
import arrowDropDownIcon from './assets/arrow_drop_down.svg'
import arrowDropUpIcon from './assets/arrow_drop_up.svg'
import fullscreenIcon from './assets/fullscreen.svg'
import fullscreenExitIcon from './assets/fullscreen_exit.svg'
import moreIcon from './assets/more.svg'
import deleteIcon from './assets/delete.svg'
import shareIcon from './assets/share.svg'
import menuIcon from './assets/menu.svg'
import searchIcon from './assets/search.svg'
import arrowBackBigIcon from './assets/arrow_back_big.svg'
import arrowForwardBigIcon from './assets/arrow_forward_big.svg'
import arrowBackSmallIcon from './assets/arrow_back_small.svg'
import arrowForwardSmallIcon from './assets/arrow_forward_small.svg'
import arrowExpandMoreIcon from './assets/arrow_expand_more.svg'
import arrowExpandLessIcon from './assets/arrow_expand_less.svg'
import selectArrowsIcon from './assets/select_arrows.svg'
import openNewTabIcon from './assets/open_new_tab.svg'
import linkIcon from './assets/link.svg'
import unlinkIcon from './assets/unlink.svg'
import likeIcon from './assets/like.svg'
import likeFilledIcon from './assets/like_filled.svg'
import infoIcon from './assets/info.svg'
import errorIcon from './assets/error.svg'
import successIcon from './assets/success.svg'
import editionsIcon from './assets/editions.svg'
import copyIcon from './assets/copy.svg'
import burnIcon from './assets/burn.svg'
import playIcon from './assets/play.svg'
import pauseIcon from './assets/pause.svg'
import downloadIcon from './assets/download.svg'
import eyeIcon from './assets/eye.svg'
import apollo42DarkBadgeIcon from './assets/apollo42_badge_dark.svg'
import apollo42LightBadgeIcon from './assets/apollo42_badge_light.svg'
import fewFarDarkBadgeIcon from './assets/fewfar_badge_dark.svg'
import fewFarLightBadgeIcon from './assets/fewfar_badge_light.svg'
import parasLightBadgeIcon from './assets/paras_badge_light.svg'
import parasDarkBadgeIcon from './assets/paras_badge_dark.svg'
import satoriLightBadgeIcon from './assets/satori_badge_light.svg'
import satoriDarkBadgeIcon from './assets/satori_badge_dark.svg'
import tenkLightBadgeIcon from './assets/tenk_badge_light.svg'
import tenkDarkBadgeIcon from './assets/tenk_badge_dark.svg'
import imageNotSupportedIcon from './assets/image_not_supported.svg'
import mintbaseDarkBadgeIcon from './assets/mintbase_dark_badge.svg'
import mintbaseLightBadgeIcon from './assets/mintbase_light_badge.svg'
import webIcon from './assets/web.svg'
import nearSocialSmallIcon from './assets/nearsocial-icon.svg'
import nearSocialLongIcon from './assets/nearsocial-long.svg'
import filtersIcon from './assets/filters.svg'
import notificationsIcon from './assets/notifications.svg'
import bookIcon from './assets/book.svg'
import rocketIcon from './assets/rocket.svg'
import shifIcon from './assets/shift.svg'
import oderByIcon from './assets/order_by.svg'
import usdcIcon from './assets/usdc.svg'
import usdtIcon from './assets/usdt.svg'
import nearIcon from './assets/near.svg'
import simpleShareIcon from './assets/simple_share.svg'
import handCoinsIcon from './assets/hand_coins.svg'
import coinsIcon from './assets/coins.svg'
import flashIcon from './assets/flash.svg'
import handRaiseIcon from './assets/hand_raise.svg'
import handShakeIcon from './assets/hand_shake.svg'
import houseIcon from './assets/house.svg'
import sellIcon from './assets/sell.svg'
import sendIcon from './assets/send.svg'
import multiplyIcon from './assets/multiply.svg'
import backspaceIcon from './assets/backspace.svg'
import creditCard from './assets/credit_card.svg'
import terminalIcon from './assets/terminal.svg'
import fadersIcon from './assets/faders.svg'
import shieldCheckIcon from './assets/shield_check.svg'
import chartpieIcon from './assets/chartpie.svg'
import simpleCreditCardIcon from './assets/simple_credit_card.svg'
import stablesIcon from './assets/stables.svg'
import forwardIcon from './assets/forward.svg'
import arrowDiagonalIcon from './assets/arrow_diagonal.svg'
import editIcon from './assets/edit.svg'

enum IconType {
  MINTBASE = 'mintbase',
  CIRCLE = 'circle',
}

const customIcons: { [key: string]: string } = {
  [EIconName.FACEBOOK]: facebookIcon,
  [EIconName.INSTAGRAM]: instagramIcon,
  [EIconName.PINTEREST]: pinterestIcon,
  [EIconName.TWITTER]: twitterIcon,
  [EIconName.TELEGRAM]: telegramIcon,
  [EIconName.MEDIUM]: mediumIcon,
  [EIconName.LINKEDIN]: linkedinIcon,
  [EIconName.YOUTUBE]: youtubeIcon,
  [EIconName.MINTBASE]: mintbaseIcon,
  [EIconName.GITHUB]: githubIcon,
  [EIconName.DISCORD]: discordIcon,
  [EIconName.CHECK]: checkIcon,
  [EIconName.VERIFIED]: verifiedIcon,
  [EIconName.CLOSE]: closeIcon,
  [EIconName.ARROW_UP]: arrowUpIcon,
  [EIconName.ARROW_BACK]: arrowBackIcon,
  [EIconName.ARROW_FORWARD]: arrowForwardIcon,
  [EIconName.MOON]: moonIcon,
  [EIconName.SUN]: sunIcon,
  [EIconName.TICKET]: ticketIcon,
  [EIconName.THREED]: threeDIcon,
  [EIconName.VIDEO]: videoIcon,
  [EIconName.FILE]: fileIcon,
  [EIconName.DOWNLOAD]: downloadIcon,
  [EIconName.IMAGE]: imageIcon,
  [EIconName.AUDIO]: audioIcon,
  [EIconName.COMPARE_ARROWS]: compareArrowsIcon,
  [EIconName.CREDIT_CARD]: creditCard,
  [EIconName.REPORT]: reportIcon,
  [EIconName.ARROW_DROP_DOWN]: arrowDropDownIcon,
  [EIconName.ARROW_DROP_UP]: arrowDropUpIcon,
  [EIconName.FULLSCREEN]: fullscreenIcon,
  [EIconName.FULLSCREEN_EXIT]: fullscreenExitIcon,
  [EIconName.MORE]: moreIcon,
  [EIconName.DELETE]: deleteIcon,
  [EIconName.SHARE]: shareIcon,
  [EIconName.MENU]: menuIcon,
  [EIconName.SEARCH]: searchIcon,
  [EIconName.FILTERS]: filtersIcon,
  [EIconName.FORWARD]: forwardIcon,
  [EIconName.NOTIFICATIONS]: notificationsIcon,
  [EIconName.ARROW_BACK_BIG]: arrowBackBigIcon,
  [EIconName.ARROW_FORWARD_BIG]: arrowForwardBigIcon,
  [EIconName.ARROW_BACK_SMALL]: arrowBackSmallIcon,
  [EIconName.ARROW_FORWARD_SMALL]: arrowForwardSmallIcon,
  [EIconName.ARROW_EXPAND_MORE]: arrowExpandMoreIcon,
  [EIconName.ARROW_EXPAND_LESS]: arrowExpandLessIcon,
  [EIconName.SELECT_ARROWS]: selectArrowsIcon,
  [EIconName.OPEN_NEW_TAB]: openNewTabIcon,
  [EIconName.LINK]: linkIcon,
  [EIconName.UNLINK]: unlinkIcon,
  [EIconName.LIKE]: likeIcon,
  [EIconName.LIKE_FILLED]: likeFilledIcon,
  [EIconName.INFO]: infoIcon,
  [EIconName.ERROR]: errorIcon,
  [EIconName.SUCCESS]: successIcon,
  [EIconName.EDITIONS]: editionsIcon,
  [EIconName.EDIT]: editIcon,
  [EIconName.COPY]: copyIcon,
  [EIconName.BURN]: burnIcon,
  [EIconName.PLAY]: playIcon,
  [EIconName.PAUSE]: pauseIcon,
  [EIconName.EYE]: eyeIcon,
  [EIconName.IMAGE_NOT_SUPPORTED]: imageNotSupportedIcon,
  [EIconName.MINTBASE_DARK_BADGE]: mintbaseDarkBadgeIcon,
  [EIconName.MINTBASE_LIGHT_BADGE]: mintbaseLightBadgeIcon,
  [EIconName.APOLLO42_DARK_BADGE]: apollo42DarkBadgeIcon,
  [EIconName.APOLLO42_LIGHT_BADGE]: apollo42LightBadgeIcon,
  [EIconName.FEWFAR_DARK_BADGE]: fewFarDarkBadgeIcon,
  [EIconName.FEWFAR_LIGHT_BADGE]: fewFarLightBadgeIcon,
  [EIconName.PARAS_DARK_BADGE]: parasDarkBadgeIcon,
  [EIconName.PARAS_LIGHT_BADGE]: parasLightBadgeIcon,
  [EIconName.SATORI_DARK_BADGE]: satoriDarkBadgeIcon,
  [EIconName.SATORI_LIGHT_BADGE]: satoriLightBadgeIcon,
  [EIconName.TENK_DARK_BADGE]: tenkDarkBadgeIcon,
  [EIconName.TENK_LIGHT_BADGE]: tenkLightBadgeIcon,
  [EIconName.NEAR_SOCIAL]: nearSocialSmallIcon,
  [EIconName.NEAR_SOCIAL_LONG]: nearSocialLongIcon,
  [EIconName.WEB]: webIcon,
  [EIconName.BOOK]: bookIcon,
  [EIconName.ROCKET]: rocketIcon,
  [EIconName.SHIFT]: shifIcon,
  [EIconName.ORDER_BY]: oderByIcon,
  [EIconName.USDC]: usdcIcon,
  [EIconName.USDT]: usdtIcon,
  [EIconName.NEAR]: nearIcon,
  [EIconName.HAND_COINS]: handCoinsIcon,
  [EIconName.SIMPLE_SHARE]: simpleShareIcon,
  [EIconName.COINS]: coinsIcon,
  [EIconName.FLASH]: flashIcon,
  [EIconName.HAND_RAISE]: handRaiseIcon,
  [EIconName.HAND_SHAKE]: handShakeIcon,
  [EIconName.HOUSE]: houseIcon,
  [EIconName.SEND]: sendIcon,
  [EIconName.SELL]: sellIcon,
  [EIconName.MULTIPLY]: multiplyIcon,
  [EIconName.BACKSPACE]: backspaceIcon,
  [EIconName.TERMINAL]: terminalIcon,
  [EIconName.FADERS]: fadersIcon,
  [EIconName.SHIELD_CHECK]: shieldCheckIcon,
  [EIconName.SIMPLE_CREDIT_CARD]: simpleCreditCardIcon,
  [EIconName.CHARTPIE]: chartpieIcon,
  [EIconName.STABLES]: stablesIcon,
  [EIconName.ARROW_DIAGONAL]: arrowDiagonalIcon,
  [EIconName.NONE]: '',
}

export const MbIcon = ({
  name,
  color = 'mb-blackblue',
  darkColor,
  size = '24px',
  height,
  className = '',
}: {
  name: EIconName
  color: string
  darkColor?: string
  size?: string
  height?: string
  className?: string
}) => {
  const iconType = () => {
    if (name === EIconName.CIRCLE) return IconType.CIRCLE
    return IconType.MINTBASE
  }

  return (
    <div className={`flex justify-center ${className}`}>
      {
        {
          [IconType.MINTBASE]: (
            <InlineSVG
              src={customIcons[name as string]}
              width={size}
              height={height || size}
              className={`fill-current text-${color} dark:text-${darkColor}`}
            />
          ),
          [IconType.CIRCLE]: (
            <div
              className={`w-3 h-3 rounded-full bg-${color} dark:bg-${darkColor}`}
            />
          ),
        }[iconType()]
      }
    </div>
  )
}
