import type { MembersQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import {
  Avatar,
  Badge,
  Card,
  Center,
  Grid,
  Group,
  Image,
  Loader,
  Text,
  Title,
} from '@mantine/core'

export const QUERY = gql`
  query MembersQuery {
    members {
      id
      fName
      mInit
      lName
      year
      profilePictureLink
      roles {
        type
        startDate
        endDate
      }
    }
  }
`

export const Loading = () => (
  <Center>
    <Loader />
  </Center>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ members }: CellSuccessProps<MembersQuery>) => {
  const convertYearValuetoString = (year: number) => {
    switch (year) {
      case 1:
        return 'Freshman'
      case 2:
        return 'Sophomore'
      case 3:
        return 'Junior'
      case 4:
        return 'Senior'
    }
  }

  return (
    <>
      {members.map((member) => {
        return (
          <Card key={member.id}>
            <Group position="left">
              <Avatar
                size={100}
                radius={'xl'}
                src={member.profilePictureLink}
              />
              <Grid columns={1}>
                <Grid.Col>
                  <Text size="lg">{`${member.fName} ${member.lName}`}</Text>
                  <Text color={'dimmed'} size="md">
                    {convertYearValuetoString(member.year)}
                  </Text>
                  {member.roles
                    .filter((role) => role.endDate === null)
                    .map((role) => {
                      return (
                        <Badge color={'blue'} variant="filled">
                          {role.type}
                        </Badge>
                      )
                    })}
                </Grid.Col>
              </Grid>
            </Group>
          </Card>
        )
      })}
    </>
  )
}
