import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RoleCreateArgs>({
  role: {
    one: {
      data: {
        Member: {
          create: {
            fName: 'String',
            lName: 'String',
            email: 'String',
            year: 220493,
          },
        },
      },
    },
    two: {
      data: {
        Member: {
          create: {
            fName: 'String',
            lName: 'String',
            email: 'String',
            year: 3645596,
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
