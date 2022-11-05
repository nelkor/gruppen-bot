import { Context } from 'grammy'

import { SessionData } from './types'

export const initial = (): SessionData => ({
  pizzaCount: 0,
})

export const getSessionKey = ({ from, chat }: Context) =>
  !from || !chat ? undefined : `${from.id}/${chat.id}`
