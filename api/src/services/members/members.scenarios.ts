import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MemberCreateArgs>({
  member: {
    one: {
      data: {
        fName: 'String',
        lName: 'String',
        email: 'String',
        year: 6822304,
      },
    },
    two: {
      data: {
        fName: 'String',
        lName: 'String',
        email: 'String',
        year: 6101514,
      },
    },
  },
})

export type StandardScenario = typeof standard
