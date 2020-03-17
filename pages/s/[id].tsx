import React from 'react'

import { Page } from 'layouts/page'

import { PageTitle } from 'components/page-title'
import { Input } from 'ui/input'

const S = () => {
  const secretURL = `https://getsecret.now.sh/secret/ekjweniew93enkjdnw2nksa`

  return (
    <Page>
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
          hint="Anyone with this link can view the secret."
        />
      </section>

      <style jsx>{`
        section {
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </Page>
  )
}

export default S
