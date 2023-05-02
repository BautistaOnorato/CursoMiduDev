export const fetchUsers = async ({ pageParam = 1 }: { pageParam?: number }) => {
  return await fetch(`https://randomuser.me/api/?results=10&seed=boca&page=${pageParam}`)
    .then(async res => {
      if(!res.ok) throw new Error('error en la petición')
      return await res.json()
    })
    .then(data => {
      const currentPage = Number(data.info.page)
      const nextCursor = currentPage > 3 ? undefined : currentPage + 1

      return {
        users: data.results,
        nextCursor
      }
    })
}

