import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

type addedRoleInput = {
  addedRole: {
    type: string
    memberId: number
  }
}

type endRoleInput = {
  endedRole: {
    id: number
    endDate: string
  }
}

export const roles = ({ memberId }: { memberId: number }) => {
  return db.role.findMany({
    where: {
      memberId: memberId,
    },
  })
}

export const role = ({ id }: Prisma.RoleWhereUniqueInput) => {
  return db.role.findUnique({
    where: { id },
  })
}

export const Role = {
  Member: (_obj, { root }: ResolverArgs<ReturnType<typeof role>>) =>
    db.role.findUnique({ where: { id: root.id } }).Member(),
}

export const rolesByMember = ({ id }: Prisma.MemberWhereInput) => {
  return db.role.findMany({
    where: {
      memberId: id,
    },
  })
}

export const addRoleToMember = ({ addedRole }: addedRoleInput) => {
  return db.role.create({
    data: {
      type: addedRole.type,
      memberId: addedRole.memberId,
    },
  })
}

export const endRole = ({ endedRole }: endRoleInput) => {
  return db.role.update({
    where: {
      id: endedRole.id,
    },
    data: {
      endDate: endedRole.endDate,
    },
  })
}
