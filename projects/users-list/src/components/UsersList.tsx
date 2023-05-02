import { SortBy, type User } from '../types.d'

interface Props {
  showColors: boolean,
  changeSorting: (sort: SortBy) => void,
  users: User[]
}

export function UsersList ({ showColors, changeSorting, users }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <td>Foto</td>
          <td style={{ cursor: 'pointer' }} onClick={() => changeSorting(SortBy.NAME)}>Nombre</td>
          <td style={{ cursor: 'pointer' }} onClick={() => changeSorting(SortBy.LAST)}>Apellido</td>
          <td style={{ cursor: 'pointer' }} onClick={() => changeSorting(SortBy.COUNTRY)}>País</td>
        </tr>
      </thead>

      <tbody>
        {
          users.map((user, index) => {
            const backgroundColor = index % 2 === 0 ? '#333' : '#555'
            const color = showColors ? backgroundColor : 'transparent'

            return (
              <tr key={user.email} style={{ background: color }}>
                <td>
                  <img src={user.picture.thumbnail} />
                </td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}