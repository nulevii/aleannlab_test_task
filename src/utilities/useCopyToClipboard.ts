import { useState } from 'react'

type CopiedValue = string | null

type CopyFn = () => Promise<boolean> // Return success

export function useCopyToClipboard (): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null)

  const copy: CopyFn = async () => {
    if (!navigator?.clipboard) {
      setCopiedText('Clipboard not supported')
      console.log(copiedText)
      setTimeout(() => {
        setCopiedText(null)
      }, 1000)

      return false
    }

    // Try to save to clipboard then save it in the state if worked

    try {
      await navigator.clipboard.writeText(document.URL)

      setCopiedText('Text copied')
      setTimeout(() => {
        setCopiedText(null)
      }, 1000)

      return true
    } catch (error) {
      setCopiedText('Copy failed')
      setTimeout(() => {
        setCopiedText(null)
      }, 1000)

      return false
    }
  }

  return [copiedText, copy]
}
