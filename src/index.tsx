import React from 'react'
import Accordion from './components/accordion/Accordion'
import Action from './components/action/Action'
import Button from './components/button/Button'
import InfoCard from './components/cards/info/InfoCard'
import SmallCard from './components/cards/small/smallCard'
import ThingCard from './components/cards/thing/ThingCard'
import Icon from './components/icon/Icon'
import InputField from './components/input-fields/inputField'
import Tooltip from './components/tooltip/Tooltip'

export const Thing: React.FC = ({ children }) => {
    return (
      // We are adding these classes here
      <div className="mt-10 bg-yellow-100 p-5 rounded-md w-24">
        {children || `the snozzberries taste like snozzberries`}
      </div>
    );
};

export {
  Accordion,
  Action,
  Button,
  InfoCard,
  SmallCard,
  ThingCard,
  Icon,
  InputField,
  Tooltip
}
