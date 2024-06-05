import React from 'react'
import { queryClient } from '..'

function ContactPage() {

  const clearCache = () => {
    queryClient.invalidateQueries('suppliers')
  }

  return <>
  <button onClick={clearCache}>Clear Cache</button>
    <div>ContactPage</div>
  
  </>
}

export default ContactPage