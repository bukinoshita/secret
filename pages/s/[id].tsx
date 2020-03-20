import React from 'react'
import { useRouter } from 'next/router'

import { App } from 'layouts/app'

import { PageTitle } from 'components/page-title'
import { Input } from 'ui/input'
import { NextPageContext } from 'next'

const S = ({ host }: any) => {
  const { query } = useRouter()
  const secretURL = `${host}/secret/${query.id}/${query.cipherKey}`
  const hasPwd = query?.cipherKey?.includes('pwd=1')

  return (
    <App>
      <PageTitle
        center
        title="Share your secret"
        subtitle="Safely share your secret without having it stored in any app."
      />

      <section>
        <Input
          readOnly
          copyable
          label="Secret URL"
          id="secret"
          name="secret"
          value={secretURL}
          hint={
            hasPwd
              ? 'Anyone with this link and the password can view the secret.'
              : 'Anyone with this link can view the secret.'
          }
        />
      </section>

      <style jsx>{`
        section {
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </App>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      host: context?.req?.headers?.host
    }
  }
}

export default S
