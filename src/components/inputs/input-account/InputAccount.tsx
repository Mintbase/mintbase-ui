import React from 'react'
import './inputaccount.css'
interface InputAccountProps {
  subtitle: string
  smallSubtitle: string
  inputs: JSX.Element
  footer: JSX.Element
}
export const MbInputAccount = (props: InputAccountProps) => {
  const { subtitle, smallSubtitle, inputs, footer } = props

  return (
    <main>
      <section className="p-2 h-72 overflow-y-scroll">
        <header>
          <p className="p-big-90 text-gray-700 dark:text-gray-300 mb-16">
            {subtitle}
          </p>
          <p className="dark:text-white p-med-90 mb-8">{smallSubtitle}</p>
        </header>

        <div>{inputs}</div>
      </section>
      <footer className="text-center pt-24 border-t border-gray-150 dark:border-gray-700 flex flex-col lg:flex-row justify-center items-center lg:relative">
        {footer}
      </footer>
    </main>
  )
}
