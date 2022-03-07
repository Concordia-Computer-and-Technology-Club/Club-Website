import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'
import fetch from 'node-fetch'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

type createMemberInput = {
  newMember: Omit<Prisma.MemberCreateInput, 'profilePictureLink'> & {
    githubUsername: string
  }
}

export const members = ({ role }: { role: string }) => {
  logger.debug(role)
  return db.member.findMany({
    where: {
      roles: {
        some: {
          type: role,
        },
      },
    },
  })
}

export const member = ({ id }: Prisma.MemberWhereUniqueInput) => {
  return db.member.findUnique({
    where: { id },
  })
}

export const Member = {
  roles: (_obj, { root }: ResolverArgs<ReturnType<typeof member>>) =>
    db.member.findUnique({ where: { id: root.id } }).roles(),
}

export const createMember = async ({ newMember }: createMemberInput) => {
  const profilePictureLink: string = await fetch(
    `https://api.github.com/users/${newMember.githubUsername}`
  )
    .then((res) => res.json())
    .then((j) => j.avatar_url)
  delete newMember.githubUsername
  return db.member.create({
    data: {
      ...newMember,
      profilePictureLink,
      roles: {
        create: [{}],
      },
    },
  })
}
