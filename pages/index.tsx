import React, { useState, ChangeEvent, FormEvent } from 'react'
import Router from 'next/router'

import { App } from 'layouts/app'

import { ModalAdvancedOptions } from 'components/modal-advanced-options'
import { Navigation } from 'components/navigation'

import { Button } from 'ui/button'
import { space } from 'ui/theme'
import { Textarea } from 'ui/textarea'
import { Type } from 'ui/button/button.types'

import { useEncrypt } from 'hooks/use-keychain'

import { api } from 'utils/api'
import { PageTitle } from 'components/page-title'

import pkg from '../package.json'
import { NextPageContext } from 'next'

export type HomeProps = {
  host: string
}

const Home = ({ host }: HomeProps) => {
  const [pwd, setPwd] = useState<string>('')
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
    } = await api.post(`${host}/api/create-secret`, {
      iv,
      cipherText,
      pwd
    })

    const URL = `/s/${id}?cipherKey=${cipherKey}`
    const redirectURL = pwd ? `${URL}?pwd=1` : URL

    Router.push(redirectURL)
  }

  const onApplyOptions = (payload: { password?: string }) => {
    console.log({ payload })
    setPwd(payload?.password ?? '')
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
          <Button type={Type.Submit} disabled={secret.length === 0}>
            Create secret
          </Button>
        </footer>
      </form>

      <ModalAdvancedOptions
        isOpen={isModalAdvancedOptionsOpen}
        onClose={() => toggleModalAdvancedOptions(false)}
        onApply={onApplyOptions}
      />

      <style jsx>{`
        footer {
          display: grid;
          justify-content: end;
          grid-template-columns: 98px 135px;
          grid-column-gap: ${space.spacing(4)};
          align-items: center;
          margin-top: ${space.spacing(4)};
          white-space: nowrap;
        }
      `}</style>
    </App>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const hostname = context?.req?.headers.host
  const host = hostname?.includes('localhost')
    ? `http://${hostname}`
    : `https://${hostname}`

  return {
    props: {
      host
    }
  }
}

export default Home
