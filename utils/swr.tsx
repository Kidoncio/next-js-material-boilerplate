import { useMemo } from 'react'

import useSWR, { KeyedMutator, SWRConfiguration } from 'swr'

export const fetcher = async (url, config) => {
  let res

  if (config) {
    res = await fetch(url, config)
  } else {
    res = await fetch(url)
  }

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')

    error.message = await res.json()

    error.name = res.status

    throw error
  }

  return res.json()
}

export interface GetSWRProps {
  key?: any
  swrConfig?: SWRConfiguration
}

export interface GetSWRResult<DATA> {
  data: undefined | DATA
  isLoading: boolean
  error: any
  isValidating: boolean
  mutate: KeyedMutator<DATA>
}

export function GetSWR<DATA = any>(url: string, swrProps?: GetSWRProps): GetSWRResult<DATA> {
  const config = useMemo(
    () => ({
      headers: {
        'Content-Type': 'application/json',
      },
      key: swrProps?.key,
    }),
    [swrProps?.key]
  )

  const { data, error, isValidating, mutate } = useSWR<DATA>(
    [url, config],
    fetcher,
    swrProps?.swrConfig
  )

  return {
    data,
    isLoading: !error && !data && !isValidating,
    error,
    isValidating,
    mutate,
  }
}
