import React, { useState, ChangeEvent, FormEvent } from 'react'
import Router from 'next/router'

import { App } from 'layouts/app'

import { ModalAdvancedOptions } from 'components/modal-advanced-options'
import { Navigation } from 'components/navigation'

import { Button } from 'ui/button'
import { space } from 'ui/theme'
import { Textarea } from 'ui/textarea'
import { TYPE } from 'ui/button/button.types'

import { useEncrypt } from 'hooks/use-keychain'

import { api } from 'utils/api'
import { PageTitle } from 'components/page-title'

import pkg from '../package.json'

const Home = () => {
  const [encrypt] = useEncrypt()
  const [secret, onTypeSecret] = useState<string>('')
  const [isModalAdvancedOptionsOpen, toggleModalAdvancedOptions] = useState<
    boolean
  >(false)

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const { iv, cipherText, cipherKey } = await encrypt(secret)
    const {
      data: { id }
    } = await api.post('/api/create-secret', { iv, cipherText })

    Router.push(`/s/${id}?cipherKey=${cipherKey}`)
  }

  return (
    <App>
      <PageTitle title={pkg.name} subtitle={pkg.description} />

      <Navigation />

      <form onSubmit={onSubmit}>
        <Textarea
          placeholder="Write your secret…"
          value={secret}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onTypeSecret(event.target.value)
          }
        />

        <footer>
          <Button outline onClick={() => toggleModalAdvancedOptions(true)}>
            Options
          </Button>
          <Button type={TYPE.SUBMIT}>Create secret</Button>
        </footer>
      </form>

      <ModalAdvancedOptions
        isOpen={isModalAdvancedOptionsOpen}
        onClose={() => toggleModalAdvancedOptions(false)}
      />

      <style jsx>{`
        footer {
          display: grid;
          justify-content: end;
          grid-template-columns: 98px 135px;
          grid-column-gap: ${space.spacing(4)};
          align-items: center;
          margin-top: ${space.spacing(4)};
        }
      `}</style>
    </App>
  )
}

export default Home
